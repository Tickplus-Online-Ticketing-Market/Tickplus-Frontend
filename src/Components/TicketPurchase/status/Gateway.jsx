import React, { useState } from 'react';
import visaImage from './visa.png';
import mastercardImage from './mastercard.png';

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
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96">
        <div className="mb-4">
          <label htmlFor="customerName" className="block text-gray-700 text-sm font-bold mb-2">Customer Name</label>
          <input
            type="text"
            id="customerName"
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.customerName && 'border-red-500'}`}
            placeholder="Enter your name"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            required
          />
          {errors.customerName && <p className="text-red-500 text-xs italic">{errors.customerName}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="cardType" className="block text-gray-700 text-sm font-bold mb-2">Choose Card Type</label>
          <select
            id="cardType"
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.cardType && 'border-red-500'}`}
            value={cardType}
            onChange={(e) => setCardType(e.target.value)}
            required
          >
            <option value="">Select Card Type</option>
            <option value="visa">Visa</option>
            <option value="mastercard">Mastercard</option>
          </select>
          {errors.cardType && <p className="text-red-500 text-xs italic">{errors.cardType}</p>}
        </div>
        <div className="mb-4 flex items-center">
          <label htmlFor="cardNumber" className="block text-gray-700 text-sm font-bold mr-2">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.cardNumber && 'border-red-500'}`}
            placeholder="Enter card number"
            value={formatCardNumber(cardNumber)}
            onChange={(e) => setCardNumber(e.target.value)}
            maxLength={19}
            required
          />
          {cardType === 'visa' && <img src={visaImage} alt="Visa" className="w-10 h-6 ml-2" />}
          {cardType === 'mastercard' && <img src={mastercardImage} alt="Mastercard" className="w-10 h-6 ml-2" />}
          {errors.cardNumber && <p className="text-red-500 text-xs italic">{errors.cardNumber}</p>}
        </div>
        <div className="mb-4 flex items-center">
          <label htmlFor="expireDate" className="block text-gray-700 text-sm font-bold mr-2">Expiration Date</label>
          <select
            id="expireMonth"
            className="shadow appearance-none border rounded w-20 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={expireMonth}
            onChange={(e) => setExpireMonth(e.target.value)}
            required
          >
            <option value="">Month</option>
            {/* Add months here if needed */}
          </select>
          <span className="mx-1">/</span>
          <select
            id="expireYear"
            className="shadow appearance-none border rounded w-20 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={expireYear}
            onChange={(e) => setExpireYear(e.target.value)}
            required
          >
            <option value="">Year</option>
            {/* Add years here if needed */}
          </select>
          {errors.expireDate && <p className="text-red-500 text-xs italic">{errors.expireDate}</p>}
        </div>
        <div className="mb-4 flex items-center">
          <label htmlFor="cvv" className="block text-gray-700 text-sm font-bold mr-2">CVV</label>
          <input
            type="text"
            id="cvv"
            className={`shadow appearance-none border rounded w-16 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.cvv && 'border-red-500'}`}
            placeholder="CVV"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            maxLength={3}
            required
          />
          {errors.cvv && <p className="text-red-500 text-xs italic">{errors.cvv}</p>}
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Pay Now
          </button>
        </div>
      </form>
    </div>
  );
}
