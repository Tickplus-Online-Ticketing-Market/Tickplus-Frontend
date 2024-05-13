import React, { useState } from 'react';
import visaImage from '../../../Assets/TicketPurchase/visa.png.png';
import mastercardImage from '../../../Assets/TicketPurchase/mastercard.jpg.jpg';

export default function PaymentGateway() {
  const [customerName, setCustomerName] = useState('');
  const [cardType, setCardType] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expireMonth, setExpireMonth] = useState('');
  const [expireYear, setExpireYear] = useState('');
  const [cvv, setCvv] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      console.log({
        customerName,
        cardType,
        cardNumber,
        expireDate: `${expireMonth}/${expireYear}`,
        cvv
      });
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!customerName.trim()) {
      errors.customerName = 'Customer name is required';
    }
    if (!cardType.trim()) {
      errors.cardType = 'Card type is required';
    }
    if (!cardNumber.trim() || cardNumber.replace(/ /g, '').length !== 16 || isNaN(cardNumber)) {
      errors.cardNumber = 'Card number must be 16 digits';
    }
    if (!expireMonth || !expireYear) {
      errors.expireDate = 'Expiration date is required';
    }
    if (!cvv.trim() || cvv.length !== 3 || isNaN(cvv)) {
      errors.cvv = 'CVV must be 3 digits';
    }
    return errors;
  };

  const formatCardNumber = (value) => {
    // Remove non-digit characters
    const formattedValue = value.replace(/\D/g, '');
    // Insert a space after every 4 characters
    return formattedValue.replace(/(\d{4})/g, '$1 ').trim();
  };

  return (
    <div className="flex justify-center items-center bg-background">
      <form onSubmit={handleSubmit} className="bg-background shadow-md rounded px-8 w-96">
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
          {errors.customerName && <p className="text-primary text-sm">{errors.customerName}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="cardType" className="block text-primary text-sm font-bold mb-2">Choose Card Type</label>
          <select
            id="cardType"
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-accent leading-tight focus:outline-none focus:shadow-outline ${errors.cardType && 'border-primary'}`}
            value={cardType}
            onChange={(e) => setCardType(e.target.value)}
            required
          >
            <option value="">Select Card Type</option>
            <option value="visa">Visa</option>
            <option value="mastercard">Mastercard</option>
          </select>
          {errors.cardType && <p className="text-primary text-sm">{errors.cardType}</p>}
        </div>
        <div className="mb-4 flex items-center">
          <label htmlFor="cardNumber" className="block text-primary text-sm font-bold mr-2">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-accent leading-tight focus:outline-none focus:shadow-outline ${errors.cardNumber && 'border-primary'}`}
            placeholder="Enter card number"
            value={formatCardNumber(cardNumber)}
            onChange={(e) => setCardNumber(e.target.value)}
            maxLength={19}
            required
          />
          {cardType === 'visa' && <img src={visaImage} alt="Visa" className="w-10 h-6 ml-2" />}
          {cardType === 'mastercard' && <img src={mastercardImage} alt="Mastercard" className="w-10 h-6 ml-2" />}
          {errors.cardNumber && <p className="text-primary text-sm">{errors.cardNumber}</p>}
        </div>
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
          {errors.expireDate && <p className="text-primary text-sm">{errors.expireDate}</p>}
        </div>
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
          {errors.cvv && <p className="text-primary text-sm">{errors.cvv}</p>}
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-primary hover:bg-blue-700 text-accent font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Pay Now
          </button>
        </div>
      </form>
    </div>
  );
}
