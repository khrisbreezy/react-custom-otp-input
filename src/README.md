# react-custom-otp

[![NPM](https://img.shields.io/npm/v/react-custom-otp-input.svg)](https://www.npmjs.com/package/react-custom-otp-input)

> A React component library for adding OTP (One-Time Password) functionality to your project.

## Install

```bash
npm install react-custom-otp-input
```
## Usage

```component.tsx
import React, { useState } from 'react';
import { OtpInput } from 'react-custom-otp-input';

const Example = () => {
 const [otp, setOtp] = useState('');

  return (
    <OtpInput
      length={6}
      onChangeOtp={(otp: any) => {
        setOtp(otp);
      }}
      secure={true}
    />
  );
}
```
## Props/Options



| Props           | Type                                           | Description                                                             | Default |
|-----------------|------------------------------------------------|-------------------------------------------------------------------------|----------|
| length          | number                                         | The number of OTP input fields to render. **Required**.                 |     6    |
| onChangeOtp     | Function                                       | A callback function to handle the entered OTP. **Required**.            |     -    |
| secure          | boolean                                        | Hids the entered input values                                           |   false  |
| className       | string                                         | Class for each input fields                                             |     -    |
| width           | number                                         | Width for each input fields                                             |     -    |
| height          | number                                         | Height for each input fields                                            |     -    |
| size            | number                                         | Font size for each input fields                                         |     -    |


## Full example
```component.tsx
import React, { useState } from 'react';
import { OtpInput } from 'react-custom-otp-input';

const Example = () => {
  const [otp, setOtp] = useState('');

  return (
    <OtpInput
      length={6}
      onChangeOtp={(otp: any) => {
        setOtp(otp);
      }}
      secure={true}
    />
  );
};
```
\
The react-custom-otp-input library is designed to simplify the process of adding OTP functionality to your React projects. It provides an OTP component that can be easily integrated into your codebase.

To install the library, use the provided npm command, as shown in the "Install" section. Make sure to import the necessary components.

Feel free to explore the library and customize it according to your needs!

## License

MIT © [Oyinlola Abolrin](https://github.com/khrisbreezy)
