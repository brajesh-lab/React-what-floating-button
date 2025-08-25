# React WhatsApp Floating

A customizable WhatsApp chat widget for React applications that allows users to initiate WhatsApp conversations directly from your website.

## Features

- 🎨 Fully customizable appearance
- 📱 Mobile and desktop responsive
- 🌍 Automatic device detection (mobile app vs web WhatsApp)
- ⚡ Lightweight and performant
- 🔧 TypeScript support
- 🎯 Easy to integrate

## Installation

```bash
npm install react-whatsapp-floating
```

or

```bash
yarn add react-whatsapp-floating
```

## Basic Usage

```jsx
import { WhatsAppWidget } from 'react-whatsapp-widget';

function App() {
  return (
    <div>
      <WhatsAppWidget 
        phoneNumber="+1234567890"
        companyName="Your Company"
      />
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `phoneNumber` | `string` | **Required** | WhatsApp phone number (with country code) |
| `companyName` | `string` | `"Support Team"` | Company/person name displayed in chat header |
| `companyLogo` | `string` | `undefined` | URL to company logo image |
| `message` | `string` | `"Hi there! 👋 How can I help you?"` | Welcome message shown in chat |
| `replyTime` | `string` | `"Typically replies within 5 minutes"` | Response time text |
| `position` | `"left" \| "right"` | `"right"` | Widget position on screen |
| `buttonSize` | `number` | `60` | Size of the floating button in pixels |
| `buttonColor` | `string` | `"#25D366"` | Background color of the floating button |
| `headerColor` | `string` | `"#075E54"` | Background color of the chat header |
| `textColor` | `string` | `"#fff"` | Text color in the header |
| `placeholder` | `string` | `"Type a message..."` | Input field placeholder text |
| `zIndex` | `number` | `1000` | CSS z-index for the widget |

## Advanced Example

```jsx
import { WhatsAppWidget } from 'react-whatsapp-widget';

function App() {
  return (
    <div>
      <WhatsAppWidget 
        phoneNumber="+971563946650"
        companyName="Company Name"
        companyLogo="/logo.png"
        message="Welcome to Company Name! How can we assist you today?"
        replyTime="Usually responds in a few minutes"
        position="left"
        buttonSize={70}
        buttonColor="#128C7E"
        headerColor="#075E54"
        placeholder="Ask us anything..."
      />
    </div>
  );
}
```

## Phone Number Format

The phone number should include the country code without the '+' sign or any special characters:

- ✅ Correct: `"971563946650"`
- ✅ Also correct: `"+971 563946650"` (will be automatically cleaned)
- ❌ Incorrect: `"563946650"` (missing country code)

## Styling

The widget is designed to be responsive and will automatically adapt to different screen sizes. You can customize colors, sizes, and positioning through the provided props.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile, etc.)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT © [Brajesh Kumar]

## Support

If you encounter any issues or have questions, please file an issue on GitHub.