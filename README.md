# Caesar Cipher Encoder

This is a simple Caesar Cipher encoder built with React. The app allows users to input a message and a shift value, and then it encodes the message using the Caesar Cipher algorithm. Default Shift is set 3. if Shift is 0 Then Encoding not Applied 

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)

## Installation

To get started with this project, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/caesar-cipher-encoder.git
    cd caesar-cipher-encoder
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Run the development server**:
    ```bash
    npm run dev
    ```

4. Open your browser and navigate to `http://localhost:5173`.

## Usage

1. Enter a message in the textarea provided.
2. Enter a shift value in the input field labeled "Shift".
3. The encoded message will be displayed below the textarea.

## Components

### `App.js`

This is the main component of the app. It handles the input for the message and the shift value, encodes the message, and displays the encoded message.

#### Code

```jsx
import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [message, setMessage] = useState('');
  const [encodedMessage, setEncodedMessage] = useState('');
  const [shift, setShift] = useState(0);

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
    <div>
      <h2>Caesar Cipher Encoder</h2>
      <div id="shift">
        <span>Shift</span>
        <input
          type="number"
          value={shift}
          onChange={handleShiftChange}
        />
      </div>
      <br />
      <textarea
        value={message}
        onChange={handleMessageChange}
        placeholder="Your message..."
      ></textarea>
      <h3>Encrypted Message</h3>
      <p>{encodedMessage}</p>
    </div>
  );
};

export default App;
