import React, { useState } from 'react';

const CreditCardForm = () => {
const [cname, setCName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardType, setCardType] = useState(''); // State to track card type

  const handleCNameChange = (e) => {
    setCName(e.target.value);
  };

  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };

  const handleExpiryDateChange = (e) => {
    setExpiryDate(e.target.value);
  };

  const handleCvvChange = (e) => {
    setCvv(e.target.value);
  };

  const handleCardTypeChange = (e) => {
    setCardType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submission logic here, e.g., send payment information to server
    console.log('Card number:', cardNumber);
    console.log('Expiry date:', expiryDate);
    console.log('CVV:', cvv);
    console.log('Card type:', cardType);
  };

  return (
    <form onSubmit={handleSubmit}>
        
      <div>
      <span className='flex justify-center mb-5 text-accent text-xl'>View Payment Details</span>
        <label htmlFor="cardType"className='pl-[3rem]'>Card Type</label>
        <select id="cardType" value={cardType} onChange={handleCardTypeChange} required 
        className='text-xl text-text focus:outline-none active:outlines-none h-10 w-[20rem] border-2 border-primary rounded-lg ml-[3rem] pl-5 mb-5'>
          <option value="">Select Card Type</option>
          <option value="Mastercard">Mastercard</option>
          <option value="Visa">Visa</option>
          <option value="American Express">American Express</option>
        </select>
      </div>
      <div>
        <label htmlFor="cname" className='pl-[3rem]'>Card Holder Name</label>
        <div className=''>
        <input
          type="text"
          id="cname"
          value={cname}
          onChange={handleCNameChange}
          placeholder="Card Holder"
          maxLength="5"
          required
          className='text-xl text-text focus:outline-none active:outlines-none h-10 w-[20rem] border-2 border-primary rounded-lg ml-[3rem] pl-5 mb-5'
        /></div>
      </div>
      <div>
        <label htmlFor="cardNumber" className='pl-[3rem]'>Card Number</label>
        <input
          type="text"
          id="cardNumber"
          value={cardNumber}
          onChange={handleCardNumberChange}
          placeholder="1234 5678 9012 3456"
          maxLength="16"
          required
          className='text-xl text-text focus:outline-none active:outlines-none h-10 w-[20rem] border-2 border-primary rounded-lg ml-[3rem] pl-5 mb-5'
        />
      </div>
      <div>
        <label htmlFor="expiryDate" className='pl-[3rem]'>Expiry Date</label>
        <input
          type="text"
          id="expiryDate"
          value={expiryDate}
          onChange={handleExpiryDateChange}
          placeholder="MM/YY"
          maxLength="5"
          required
          className='text-xl text-text focus:outline-none active:outlines-none h-10 w-[6rem] border-2 border-primary rounded-lg ml-[3rem] pl-5 mb-5'
        />
      </div>
      <div>
        <label htmlFor="cvv" className='pl-[3rem]'>CVV</label>
        <input
          type="text"
          id="cvv"
          value={cvv}
          onChange={handleCvvChange}
          placeholder="123"
          maxLength="3"
          required
          className='text-xl text-text focus:outline-none active:outlines-none h-10 w-[5rem] border-2 border-primary rounded-lg ml-[3rem] pl-5 mb-5'
        />
      </div>
      <div className='mt-[2.5rem] flex justify-center'>
      <button type="submit" className="bg-primary text-background h-[3rem] w-[10rem] rounded hover:scale-95 transition text-xl mr-1">Submit Payment</button>
      </div>
    </form>
  );
};

export default CreditCardForm;
