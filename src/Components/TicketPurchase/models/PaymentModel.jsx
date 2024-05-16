import React, { useState, useEffect } from 'react';
import visaImage from '../../../Assets/TicketPurchase/visa.png.png';
import mastercardImage from '../../../Assets/TicketPurchase/mastercard.jpg.jpg';
import PaymentConfirm from './PaymentConfirm';

export default function PaymentModel({ visible, onClose, selectedItem }) {
    const [count, setCount] = useState(1); // Default count is 1
    const [totalCost, setTotalCost] = useState(0);

    const [showMyModel06, setShowMyModel06] = useState(false)
    const handleOnClose06 = () => setShowMyModel06(false)

    // Payment Variables
    const [customerName, setCustomerName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expireMonth, setExpireMonth] = useState('');
    const [expireYear, setExpireYear] = useState('');
    const [cvv, setCvv] = useState('');
    const [errors, setErrors] = useState({});
    const [cardImage, setCardImage] = useState(null);
    const [paymentSuccess, setPaymentSuccess] = useState(false);

    useEffect(() => {
        if (visible) {
            setCount(1); // Reset count to 1 when the model is opened
            setTotalCost(0);
            setCustomerName('');
            setCardNumber('');
            setExpireMonth('');
            setExpireYear('');
            setCvv('');
            setErrors({});
            setCardImage(null);
            setPaymentSuccess(false);
        }
    }, [visible]);

    const handleOnClose02 = (e) => {
        if (e.target.id === 'container') {
            onClose();
            setCount(1); // Reset count to 1 when the model is closed
        }
    };

    // Cal Total Cost
    useEffect(() => {
        if (selectedItem !== null) {
            setTotalCost(selectedItem.ticketPrice * count);
        } else {
            console.log("No item data");
        }
    }, [count, selectedItem]);

    if (!visible || !selectedItem) return null;

    const increment = () => {
        setCount(prevCount => prevCount + 1);
    };

    const decrement = () => {
        setCount(prevCount => {
            if (prevCount > 1) {
                return prevCount - 1;
            }
            return prevCount;
        });
    };

    // Payment validation functions
    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length === 0) {
            try {
                const response = await fetch('http://localhost:3030/tpp/pays', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        eventname: selectedItem.eventname,
                        ticketPrice: selectedItem.ticketPrice,
                        count,
                        totalCost,
                        customerName,
                    }),
                });
                if (response.ok) {
                    // Payment successful
                    alert("Payment successful!");
                    // Refresh the page
                    window.location.reload();
                    // Close the PaymentModel component
                    onClose();
                } else {
                    // Handle other cases like server errors
                    alert("Payment unsuccessful. Please try again.");
                }
            } catch (error) {
                console.error("Error submitting payment:", error);
                alert("An error occurred. Please try again later.");
            }
        } else {
            setErrors(validationErrors);
            // Show unsuccessful payment alert
            alert("Payment unsuccessful. Please check your details.");
        }
    };

    const validateForm = () => {
        const errors = {};
        if (!customerName.trim()) {
            errors.customerName = '*Customer name is required';
        }
        if (!expireMonth || !expireYear || parseInt(expireMonth) > 12) {
            errors.expireDate = '*Invalid expiration date';
        }
        if (!cvv.trim() || cvv.length !== 3 || isNaN(cvv)) {
            errors.cvv = '*CVV must be 3 digits';
        }
        if (!cardNumber.trim() || cardNumber.replace(/\s/g, '').length !== 16 || isNaN(cardNumber.replace(/\s/g, ''))) {
            errors.cardNumber = '*Card number must be 16 digits';
        }
        return errors;
    };

    const formatCardNumber = (value) => {
        const formattedValue = value.replace(/\D/g, '');
        return formattedValue.replace(/(\d{4})/g, '$1 ').trim();
    };

    const handleCardNumberChange = (value) => {
        setCardNumber(value);
        const firstDigit = value.charAt(0);
        if (firstDigit === '4') {
            setCardImage(visaImage);
        } else if (firstDigit === '5' || firstDigit === '2') {
            setCardImage(mastercardImage);
        } else {
            setCardImage(null);
        }
    };

    return (
        <>
            <div
                id='container'
                onClick={handleOnClose02}
                className='fixed inset-0 bg-text bg-opacity-50 backdrop-blur-sm flex justify-center items-center'>

                <div className='bg-background h-[30rem] w-[50rem] rounded-xl flex justify-between items-center'>
                    {/* Data read from Mother Component */}
                    <div className='bg-accent rounded-xl h-[30rem] w-[50%]'>
                        <div className='mt-[4.5rem] mr-[2rem] ml-[2rem] mb-[2rem]'>
                            <img src={selectedItem.imageUrl} alt="" />
                        </div>
                        <div className='font-bold mt-[5rem] mr-[2rem] ml-[2rem] flex flex-col h-full'>
                            <div className="flex text-secondary items-center mb-2 text-2xl">
                                <p>{selectedItem.eventname}</p>
                            </div>
                            <div className="flex text-primary items-center mb-2 text-2xl">
                                <p>{selectedItem.ticketPrice} LKR</p>
                            </div>
                            <div className="flex text-primary justify-center mb-2 text-2xl">
                                <p>Quantity
                                    <div>
                                        <div className='flex justify-center'>
                                            <button onClick={decrement} className='flex items-center justify-center bg-primary bg-opacity-50 text-background h-[1.5rem] w-[2rem] rounded hover:scale-95 transition text-xl mr-1'>-</button>
                                            <div className='text-secondary text-xl mr-2.5 ml-2'>{count}</div>
                                            <button onClick={increment} className='flex items-center justify-center bg-primary bg-opacity-50 text-background h-[1.5rem] w-[2rem] rounded hover:scale-95 transition text-xl flex items-center'>+</button>
                                        </div>
                                    </div>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='bg-background rounded-xl h-[30rem] w-[50%]'>
                        <p className="text-accent font-bold text-base flex flex-col justify-center items-center mt-10">Total cost</p>
                        <p className="text-primary font-bold text-2xl flex flex-col justify-center items-center">{totalCost} LKR</p>
                        {/* Payment */}
                        <div className="flex justify-center items-center bg-background mt-[1rem]">
                            <form onSubmit={handleSubmit} className="bg-background rounded px-8 w-96">
                                <div className="mb-4">
                                    <label htmlFor="customerName" className="block text-primary text-sm font-bold mb-2">Customer Name</label>
                                    <input
                                        type="text"
                                        id="customerName"
                                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-accent leading-tight focus:outline-none focus:shadow-outline ${errors.customerName && 'border-primary'}`}
                                        placeholder="Enter Card Holder Name"
                                        value={customerName}
                                        onChange={(e) => setCustomerName(e.target.value)}
                                        required
                                    />                                   
                                </div>
                                {errors.customerName && <p className="text-accent text-sm mb-2">{errors.customerName}</p>}
                                <div className="mb-4 flex items-center">
                                    <label htmlFor="cardNumber" className="block text-primary text-sm font-bold mr-2">Card Number</label>
                                    <input
                                        type="text"
                                        id="cardNumber"
                                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-accent leading-tight focus:outline-none focus:shadow-outline ${errors.cardNumber && 'border-primary'}`}
                                        placeholder="Enter card number"
                                        value={formatCardNumber(cardNumber)}
                                        onChange={(e) => handleCardNumberChange(e.target.value)}
                                        maxLength={19}
                                        required
                                    />
                                    {cardImage && <img src={cardImage} alt="Card Type" className="w-10 h-6 ml-2" />}    
                                </div>
                                {errors.cardNumber && <p className="text-accent text-sm mb-2">{errors.cardNumber}</p>}
                                <div className="mb-4 flex items-center">
                                    <label htmlFor="expireMonth" className="block text-primary text-sm font-bold mr-2">Expiration Month</label>
                                    <input
                                        type="text"
                                        id="expireMonth"
                                        className={`shadow appearance-none border rounded w-16 py-2 px-3 text-accent leading-tight focus:outline-none focus:shadow-outline ${errors.expireDate && 'border-primary'}`}
                                        placeholder="MM"
                                        value={expireMonth}
                                        onChange={(e) => setExpireMonth(e.target.value)}
                                        maxLength={2}
                                        required
                                    />
                                    <span className="mx-2">/</span>
                                    <label htmlFor="expireYear" className="block text-primary text-sm font-bold mr-2">Expiration Year</label>
                                    <input
                                        type="text"
                                        id="expireYear"
                                        className={`shadow appearance-none border rounded w-16 py-2 px-3 text-accent leading-tight focus:outline-none focus:shadow-outline ${errors.expireDate && 'border-primary'}`}
                                        placeholder="YY"
                                        value={expireYear}
                                        onChange={(e) => setExpireYear(e.target.value)}
                                        maxLength={2}
                                        required
                                    />                                  
                                </div>
                                {errors.expireDate && <p className="text-accent text-sm mb-2">{errors.expireDate}</p>}
                                <div className="mb-4 flex items-center">
                                    <label htmlFor="cvv" className="block text-primary text-sm font-bold mr-2">CVV</label>
                                    <input
                                        type="text"
                                        id="cvv"
                                        className={`shadow appearance-none border rounded w-16 py-2 px-3 text-accent leading-tight focus:outline-none focus:shadow-outline ${errors.cvv && 'border-primary'}`}
                                        placeholder="CVV"
                                        value={cvv}
                                        onChange={(e) => setCvv(e.target.value)}
                                        maxLength={3}
                                        required
                                    />    
                                </div>
                                {errors.cvv && <p className="text-red text-sm">{errors.cvv}</p>}
                                <div className="flex flex-col justify-center items-center mt-[1.5rem]">
                                    <button
                                        type="submit"
                                        className="bg-primary hover:bg-blue-700 text-accent font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    >
                                        Proceed Payment
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {paymentSuccess && <PaymentConfirm onClose={handleOnClose06} visible={showMyModel06} />}
            </div>
        </>
    );
}
