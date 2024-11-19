import React, { useState, useRef, useEffect } from 'react';
import './otpinput.scss';

const OtpInput = ({
  length = 6,
  onChangeOtp,
  secure = false,
  className,
  width,
  height,
  size
}: any) => {
  const [otp, setOtp] = useState(new Array(length).fill(''));
  const [hiddenOtp, setHiddenOtp] = useState(new Array(length).fill('')); // Array to store the masked input
  const inputRefs: any = useRef([]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus(); // Auto-focus on the first input field
    }
  }, []);

  const handleChange = (element: any, index: number) => {
    const value = element.value.trim();
    if (isNaN(element.value)) return;

    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    // Mask the inputted number after a small delay if hidden is true
    if (secure) {
      const newHiddenOtp = [...hiddenOtp];
      newHiddenOtp[index] = '•'; // Mask the input immediately
      setHiddenOtp(newHiddenOtp);
    } else {
      const newHiddenOtp = [...hiddenOtp];
      newHiddenOtp[index] = value; // Show the input immediately
      setHiddenOtp(newHiddenOtp);
    }

    if (value && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }

    // Pass OTP to parent component
    onChangeOtp(newOtp.join(''));
  };

  // const handleKeyDown = (e: any, index: any) => {
  //   if (e.key === 'Backspace' && !otp[index] && index !== 0) {
  //     inputRefs.current[index - 1].focus();
  //   }
  // };

  const handleKeyDown = (e: any, index: number) => {
    // Handle backspace to delete value and move focus to previous input
    if (e.key === 'Backspace') {
      const newOtp = [...otp];
      const newHiddenOtp = [...hiddenOtp];

      newOtp[index] = ''; // Clear the current OTP value
      newHiddenOtp[index] = ''; // Clear the masked value
      setOtp(newOtp);
      setHiddenOtp(newHiddenOtp);

      // Move to the previous input if not the first one
      if (index > 0 && !newOtp[index]) {
        inputRefs.current[index - 1].focus();
      }

      // Pass the updated OTP to the parent component
      onChangeOtp(newOtp.join(''));
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData('Text').slice(0, length);

    if (/^\d+$/.test(pasteData) && pasteData.length === length) {
      const newOtp = pasteData.split('');
      setOtp(newOtp);

      // Set hiddenOtp with masked characters
      if (secure) {
        const newHiddenOtp = newOtp.map(() => '•');
        setHiddenOtp(newHiddenOtp);
      } else {
        // Set otp with pasted characters
        setHiddenOtp(newOtp);
      }

      newOtp.forEach((value, idx) => {
        if (inputRefs.current[idx]) {
          if (secure) {
            inputRefs.current[idx]!.value = '•'; // Set masked value for each input
          } else {
            inputRefs.current[idx]!.value = value; // Set value for each input
          }
        }
      });

      onChangeOtp(pasteData);

      // Move the cursor to the last input
      const lastInputIndex = pasteData.length - 1;
      if (inputRefs.current[lastInputIndex]) {
        inputRefs.current[lastInputIndex]?.focus();
      }
    }
  };

  return (
    <div
      className="otpinput"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        margin: 'auto'
      }}
    >
      {otp.map((data, index) => (
        <input
          className={className}
          ref={(el:any) => (inputRefs.current[index] = el)} // Assign ref to each input
          key={index}
          type="tel" // Keep the keyboard numeric
          inputMode="numeric" // Hint for browsers to show numeric keyboard
          pattern="\d*" // Ensure only digits are entered
          name="otp"
          maxLength={1}
          value={hiddenOtp[index]} // Show the hidden (masked) value
          onChange={(e:any) => handleChange(e.target, index)}
          onKeyDown={(e: any) => handleKeyDown(e, index)}
          onPaste={index === 0 ? handlePaste : undefined} // Only attach to the first input
          style={{
            textAlign: 'center',
            width: width || 60,
            height: height || 60,
            fontSize: size || 25,
            outline: 'none'
          }}
        />
      ))}
    </div>
  );
};

export default OtpInput;
