
# @makozi/paystack-react-pay

**@makozi/paystack-react-pay** is a lightweight, fully-typed React library for seamless integration with the Paystack Payment Gateway. It supports three integration patterns: Hook, Button, and Consumer, making it easy to add secure payments to your React or Next.js applications.

---


## Demo

Below is a screenshot of the Paystack payment modal in test mode:



![Demo](https://i.imgur.com/O9J1MRq.png)

---


## Installation

```bash
npm install @makozi/paystack-react-pay
```

# or

```bash
yarn add @makozi/paystack-react-pay
```

---


## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Props](#props)
- [Styling](#styling)
- [Visualization](#visualization)
- [Contributing](#contributing)
- [License](#license)
- [Repository](#repository)
- [Homepage](#homepage)

---



## Features

- **Three integration styles:** Use as a Hook, Button, or Consumer for maximum flexibility.
- **TypeScript support:** Full type definitions for safety and autocompletion.
- **Lightweight:** Minimal dependencies and easy to integrate.
- **Paystack inline integration:** Secure, fast, and reliable payment experience.
- **Customizable:** Pass additional metadata, currency, and reference.
- **Easy callbacks:** Handle payment success and close events with simple functions.


---

## Installation

```bash
npm install @makozi/paystack-react-pay
```

# or

```bash
yarn add @makozi/paystack-react-pay
```

---



## Usage

### 1. Using the Hook

Integrate Paystack using the `usePaystack` hook for full control:

```tsx
import { usePaystack } from "@makozi/paystack-react-pay";

const HookExample = () => {
  const { initializePayment } = usePaystack({
    publicKey: "pk_test_xxxx",
    email: "test@example.com",
    amount: 500000, // Amount in kobo
    onSuccess: (res) => console.log(res),
    onClose: () => console.log("Closed")
  });

  return <button onClick={initializePayment}>Pay with Hook</button>;
};
```

### 2. Using the Button

Use the `PaystackButton` component for a quick integration:

```tsx
import { PaystackButton } from "@makozi/paystack-react-pay";

const ButtonExample = () => (
  <PaystackButton
    publicKey="pk_test_xxxx"
    email="test@example.com"
    amount={500000}
    onSuccess={(res) => console.log(res)}
    onClose={() => console.log("Closed")}
    text="Pay with Button"
  />
);
```

### 3. Using the Consumer

Use the `PaystackConsumer` for advanced scenarios and render props:

```tsx
import { PaystackConsumer } from "@makozi/paystack-react-pay";

const ConsumerExample = () => (
  <PaystackConsumer
    config={{
      publicKey: "pk_test_xxxx",
      email: "test@example.com",
      amount: 500000,
      onSuccess: (res) => console.log(res),
      onClose: () => console.log("Closed")
    }}
  >
    {(initializePayment) => (
      <button onClick={initializePayment}>Pay with Consumer</button>
    )}
  </PaystackConsumer>
);
```


---



## Props

All integration styles accept the following props:

| Prop         | Type     | Required | Description                                 | Default   |
|--------------|----------|----------|---------------------------------------------|-----------|
| publicKey    | string   | Yes      | Paystack public key                         | —         |
| email        | string   | Yes      | Customer email                              | —         |
| amount       | number   | Yes      | Amount in kobo (e.g., 500000 for ₦5,000)    | —         |
| reference    | string   | No       | Optional transaction reference               | Auto-gen  |
| currency     | string   | No       | Currency code (e.g., NGN, USD, GHS)         | NGN       |
| metadata     | object   | No       | Additional data to pass to Paystack          | —         |
| onSuccess    | function | Yes      | Callback on successful payment               | —         |
| onClose      | function | No       | Callback when payment modal is closed        | —         |
| text         | string   | No       | Button text (for Button only)                | Pay Now   |

### Callback Details

- `onSuccess(response)`: Invoked with the Paystack transaction response on successful payment.
- `onClose()`: Invoked when the payment modal is closed without completing payment.


---


## Styling

The package is UI-agnostic and does not include styles. You can style your payment button or modal as needed in your application.

---


## Deployment

**Note:** Before deploying to a live/production environment, ensure you update your Paystack public key from the test key to your live key. Using a test key in production will block real transactions and may compromise your integration.

---





---

## Contributing

Contributions are welcome! Please open issues for bugs or feature requests, and submit pull requests for improvements. All contributions should follow the code of conduct and include clear documentation and tests where applicable.

---

## License

MIT © Makozi Marizu-Ibewiro


---

## Repository

[GitHub Repository](https://github.com/makozi/paystack-react-pay)


## Support & Connect

If you found this project helpful, please consider starring the repository on GitHub, it means a lot! Feel free to share the link on Twitter or any social platform to help others discover it.

Stay connected and follow me on Twitter: [@marizu_makozi](https://twitter.com/marizu_makozi)

Thank you for your support!

— Makozi Marizu-Ibewiro

 