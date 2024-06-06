import React, { useState } from 'react';
import Logo from './assets/react.svg';
import './App.css';

const CaesarCipher = () => {
  const [message, setMessage] = useState('');
  const [encodedMessage, setEncodedMessage] = useState('');
  const [shift, setShift] = useState(3);

  const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  const encodeMessage = (msg, shift) => {
    let result = '';
    for (let i = 0; i < msg.length; i++) {
      let char = msg[i].toUpperCase();
      let index = alphabets.indexOf(char);
      if (index !== -1) {
        let shiftedIndex = (index + shift) % 26;
        result += alphabets[shiftedIndex];
      } else {
        result += msg[i];
      }
    }
    return result;
  };

  const handleShiftChange = e => {
    const shiftValue = parseInt(e.target.value, 10);
    setShift(shiftValue);
    setEncodedMessage(encodeMessage(message, shiftValue));
  };

  const handleMessageChange = e => {
    const msg = e.target.value;
    setMessage(msg);
    setEncodedMessage(encodeMessage(msg, shift));
  };

  return (
    <div id='main'>
      <h1>Caesar Cipher Encoder</h1>
      <div id='shift'>
        <span>Shift</span>
        <input
          required
          type='number'
          value={shift}
          onChange={handleShiftChange}
        />
      </div>
      <br />
      <h3>Your Message</h3>
      <textarea
        value={message}
        onChange={handleMessageChange}
        placeholder='Your message...'
      ></textarea>
      <h3>Encrypted Message</h3>
      <p>{encodedMessage}</p>
      <footer>
        Made with ❤️ And{' '}
        <img
          width='18'
          src={Logo}
          alt='react'
        />
        {' '}by Deepak Thapa
      </footer>
    </div>
  );
};

export default CaesarCipher;
