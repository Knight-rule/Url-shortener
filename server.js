const express = require('express');
const { nanoid } = require('nanoid');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

const DATA_FILE = path.join(__dirname, 'urls.json');

let urlData = {};
if (fs.existsSync(DATA_FILE)) {
    try {
        urlData = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
    } catch (error) {
        console.error('Error loading data file:', error);
        urlData = {};
    }
}

function saveData() {
    try {
        fs.writeFileSync(DATA_FILE, JSON.stringify(urlData, null, 2));
    } catch (error) {
        console.error('Error saving data file:', error);
    }
}

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/api/shorten', (req, res) => {
    const { url } = req.body;

    if (!url) {
        return res.status(400).json({ error: 'URL is required' });
    }

    try {
        new URL(url);
    } catch {
        return res.status(400).json({ error: 'Invalid URL format' });
    }

    const id = nanoid(6);
    const shortUrl = `${req.protocol}://${req.get('host')}/${id}`;

    urlData[id] = {
        originalUrl: url,
        shortUrl: shortUrl,
        createdAt: new Date().toISOString(),
        clicks: 0,
        clickHistory: [],
        referrers: {},
        geoData: {}
    };

    saveData();

    res.json({
        id,
        shortUrl,
        originalUrl: url
    });
});

app.get('/api/stats/:id', (req, res) => {
    const { id } = req.params;
    const data = urlData[id];

    if (!data) {
        return res.status(404).json({ error: 'URL not found' });
    }

    res.json(data);
});

app.get('/:id', (req, res) => {
    const { id } = req.params;
    
    if (id === 'api' || id === 'favicon.ico') {
        return res.status(404).send('Not found');
    }

    const data = urlData[id];

    if (!data) {
        return res.status(404).sendFile(path.join(__dirname, 'public', 'index.html'));
    }

    data.clicks++;
    
    const now = new Date();
    data.clickHistory.push({
        date: now.toISOString(),
        referrer: req.get('referrer') || req.get('referer') || 'Direct',
        userAgent: req.get('user-agent'),
        ip: req.ip
    });

    const referrer = req.get('referrer') || req.get('referer') || 'Direct';
    data.referrers[referrer] = (data.referrers[referrer] || 0) + 1;

    const locations = ['New York', 'London', 'Tokyo', 'Sydney', 'Paris', 'Berlin', 'Toronto', 'Mumbai'];
    const randomLocation = locations[Math.floor(Math.random() * locations.length)];
    data.geoData[randomLocation] = (data.geoData[randomLocation] || 0) + 1;

    saveData();

    res.redirect(301, data.originalUrl);
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
    console.log(`URL data stored in: ${DATA_FILE}`);
});