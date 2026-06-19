# LinkSnip - URL Shortener with Analytics

A modern, beautiful URL shortener with built-in analytics dashboard. Create short links, track clicks, and analyze your traffic with an intuitive interface.

## Features

- **Instant URL Shortening** - Paste any URL and get a short link in seconds
- **QR Code Generation** - Automatic QR code for each shortened URL
- **Analytics Dashboard** - Track total clicks, daily trends, referrers, and geographic data
- **Click History** - Detailed logs of every click with timestamps
- **Copy to Clipboard** - One-click copying of shortened URLs
- **Rate Limiting** - Built-in protection against abuse
- **Responsive Design** - Works perfectly on desktop and mobile
- **Local Storage** - Data persists in your browser (no external database needed)

## Tech Stack

- **Frontend**: HTML5, CSS3 (Gradient Design), Vanilla JavaScript
- **Backend**: Node.js, Express.js
- **Storage**: JSON file storage (server-side) + LocalStorage (client-side)
- **Charts**: Chart.js for analytics visualization
- **QR Codes**: Canvas-based QR generation

## Installation

1. Clone or download this project
2. Navigate to the project directory:
   ```bash
   cd 02-url-shortener
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the server:
   ```bash
   npm start
   ```
5. Open your browser and visit `http://localhost:3000`

## API Endpoints

- `POST /api/shorten` - Create a new shortened URL
  - Body: `{ "url": "https://example.com/very/long/url" }`
  - Response: `{ "id": "abc123", "shortUrl": "http://localhost:3000/abc123", "originalUrl": "..." }`

- `GET /api/stats/:id` - Get analytics for a shortened URL
  - Response: Click count, click history, referrers, and geographic data

- `GET /:id` - Redirect to the original URL

## Project Structure

```
02-url-shortener/
├── public/
│   └── index.html          # Frontend UI
├── server.js               # Express backend
├── package.json            # Dependencies
├── urls.json               # Stored URL data (auto-generated)
└── README.md               # This file
```

## How It Works

1. Paste a long URL in the input field
2. Click "Shorten URL" to generate a short link
3. Copy the short URL or scan the QR code
4. View analytics in the dashboard below
5. Track clicks, referrers, and geographic data in real-time

## Browser Compatibility

- Chrome 60+
- Firefox 55+
- Safari 11+
- Edge 79+

## License

MIT License - feel free to use and modify for your projects.

## Author

Created as a portfolio project demonstrating full-stack development skills.