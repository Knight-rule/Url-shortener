<h1 align="center">🔗 URL Shortener</h1>

<p align="center">
  <em>Full-stack URL shortening service with analytics, QR codes, and click tracking</em>
</p>

<p align="center">
  <a href="https://knight-rule.github.io/url-shortener"><img src="https://img.shields.io/badge/demo-live-brightgreen" alt="Live Demo"></a>
  <img src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white" alt="Express">
  <img src="https://img.shields.io/badge/nanoid-3.3-blue" alt="nanoid">
  <img src="https://img.shields.io/badge/Chart.js-FF6384?style=flat&logo=chart.js&logoColor=white" alt="Chart.js">
</p>

---

## ✨ Features

- [x] **URL Shortening** — Generate short, unique URLs with nanoid
- [x] **Click Analytics** — Track every click with timestamps and referrer data
- [x] **QR Code Generation** — Instantly create QR codes for any shortened URL
- [x] **7-Day Click Chart** — Visualize click trends over the past week
- [x] **Geo Data** — See where your clicks are coming from
- [x] **Rate Limiting** — Prevent abuse with configurable rate limits
- [x] **URL History** — Browse all previously shortened URLs
- [x] **JSON Persistence** — Data survives server restarts

## 📸 Screenshot

![screenshot](screenshot.png)

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| Node.js | Server runtime |
| Express | HTTP server and routing |
| nanoid | URL-safe unique ID generation |
| Chart.js | Analytics data visualization |

## 🚀 Installation

```bash
# Clone the repository
git clone https://github.com/knight-rule/url-shortener.git

# Navigate to the project
cd url-shortener

# Install dependencies
npm install

# Start the server
npm start
```

The server will start at `http://localhost:3000`

## 📖 Usage

1. **Shorten a URL** — Paste any long URL into the input field and click "Shorten"
2. **Copy the short link** — Click the copy button to grab your new short URL
3. **View QR Code** — Click the QR icon to generate a scannable code
4. **Check Analytics** — Click "Stats" to see click count, geo data, and trends
5. **Browse History** — View all shortened URLs in the history panel

```bash
# API Usage
POST /api/shorten
Body: { "url": "https://example.com/very/long/path" }

GET /:shortId          # Redirect to original URL
GET /api/stats/:shortId # Get click analytics
```

## ⚙️ How It Works

```
┌──────────────────┐
│   Original URL   │
└────────┬─────────┘
         ▼
┌──────────────────┐    ┌──────────────────┐
│  nanoid generates │───▶│  Stored in JSON  │
│  unique short ID  │    │  with metadata   │
└──────────────────┘    └────────┬─────────┘
                                 ▼
┌──────────────────┐    ┌──────────────────┐
│  Short URL       │◀───│  Redirect on     │
│  returned to     │    │  visit + log     │
│  user            │    │  analytics       │
└──────────────────┘    └──────────────────┘
```

When a user visits the short URL, the server looks up the original URL, logs the click event (timestamp, referrer, geo), and issues a 301 redirect.

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Prashant** — [@knight-rule](https://github.com/knight-rule)

<p align="center">
  Made with ❤️ for developers who love clean URLs
</p>
