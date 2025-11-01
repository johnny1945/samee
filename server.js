const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const dataDirectory = path.join(__dirname, 'data');
const submissionsFile = path.join(dataDirectory, 'contact-submissions.txt');

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use(express.static(__dirname));

app.post('/api/contact', async (req, res) => {
    const {
        firstName = '',
        lastName = '',
        email = '',
        phone = '',
        subject = '',
        message = '',
        submittedAt
    } = req.body || {};

    const fields = [firstName, lastName, email, phone, subject, message].map((value) => String(value || '').trim());

    if (fields.some((value) => !value)) {
        return res.status(400).json({
            message: 'Please provide your name, email, phone, subject, and message.'
        });
    }

    const [safeFirstName, safeLastName, safeEmail, safePhone, safeSubject, safeMessage] = fields;
    const timestamp = new Date(submittedAt || Date.now());

    const entry = [
        '--- Contact submission ---',
        `Timestamp: ${timestamp.toISOString()}`,
        `Name: ${safeFirstName} ${safeLastName}`.trim(),
        `Email: ${safeEmail}`,
        `Phone: ${safePhone}`,
        `Subject: ${safeSubject}`,
        'Message:',
        safeMessage.replace(/\r?\n/g, ' '),
        '---------------------------------------------'
    ].join('\n');

    try {
        await fs.promises.mkdir(dataDirectory, { recursive: true });
        await fs.promises.appendFile(submissionsFile, `${entry}\n\n`, 'utf8');
        return res.json({ success: true });
    } catch (error) {
        console.error('Failed to persist contact submission', error);
        return res.status(500).json({
            message: 'We could not save your message right now. Please try again later or email hello@aithentic.co.'
        });
    }
});

app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api/')) {
        return next();
    }

    return res.sendFile(path.join(__dirname, 'index.html'));
});

function startServer() {
    app.listen(PORT, () => {
        console.log(`Aithentic server running at http://localhost:${PORT}`);
    });
}

fs.promises.mkdir(dataDirectory, { recursive: true })
    .then(() => fs.promises.access(submissionsFile).catch(() => fs.promises.writeFile(submissionsFile, '', 'utf8')))
    .then(() => startServer())
    .catch((error) => {
        console.error('Failed to prepare data directory', error);
        process.exit(1);
    });
