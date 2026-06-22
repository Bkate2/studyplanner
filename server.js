const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const DATA_FILE = path.join(__dirname, 'data.json');

app.use(express.json());

// Serve static frontend files
app.use(express.static(__dirname));

// Seed data to initialize database if empty
const seedData = {
    tasks: [
        { id: '1', subject: 'PAMT', name: 'Week 5: Walter Benjamin', status: 'In Progress', deadline: '2026-06-20', notes: '' },
        { id: '2', subject: 'PAMT', name: 'Week 7: Modernism', status: 'Not Started', deadline: '2026-06-20', notes: '' },
        { id: '3', subject: 'PAMT', name: 'Week 8: Cybernetics, Technofeminism, Surveillance', status: 'Not Started', deadline: '2026-06-20', notes: '' },
        { id: '4', subject: 'PAMT', name: 'Essay PAMT', status: 'Not Started', deadline: '2026-06-24', notes: '' },
        { id: '5', subject: 'Numerieke Wiskunde', name: 'Herhalen stof H1-H7', status: 'Completed', deadline: '2026-06-25', notes: 'https://www.youtube.com/watch?v=QBeNXHrAYnU' },
        { id: '6', subject: 'Numerieke Wiskunde', name: 'L8', status: 'Completed', deadline: '2026-06-25', notes: '' },
        { id: '7', subject: 'Numerieke Wiskunde', name: 'L9', status: 'Completed', deadline: '2026-06-25', notes: '' },
        { id: '8', subject: 'Numerieke Wiskunde', name: 'L10', status: 'In Progress', deadline: '2026-06-25', notes: '' },
        { id: '9', subject: 'Numerieke Wiskunde', name: 'L11', status: 'Not Started', deadline: '2026-06-25', notes: '' },
        { id: '10', subject: 'Numerieke Wiskunde', name: 'L12', status: 'Not Started', deadline: '2026-06-25', notes: '' },
        { id: '11', subject: 'Numerieke Wiskunde', name: 'Formuleblad 1 kantje schrijven dmv gem', status: 'In Progress', deadline: '2026-06-25', notes: '' },
        { id: '12', subject: 'Numerieke Wiskunde', name: 'Oefententamen 2025 juli', status: 'Not Started', deadline: '2026-06-25', notes: '' },
        { id: '13', subject: 'Numerieke Wiskunde', name: 'Feebackloop', status: 'Not Started', deadline: '2026-06-25', notes: '' },
        { id: '14', subject: 'Numerieke Wiskunde', name: 'Oefententamen 2025 juni', status: 'Not Started', deadline: '2026-06-25', notes: '' },
        { id: '15', subject: 'Numerieke Wiskunde', name: 'Feebackloop', status: 'Not Started', deadline: '2026-06-25', notes: '' },
        { id: '16', subject: 'Numerieke Wiskunde', name: 'Oefententamen 2024 juli', status: 'Not Started', deadline: '2026-06-25', notes: '' },
        { id: '17', subject: 'Numerieke Wiskunde', name: 'Feebackloop', status: 'Not Started', deadline: '2026-06-25', notes: '' },
        { id: '18', subject: 'Numerieke Wiskunde', name: 'Oefententamen 2024 juni', status: 'Not Started', deadline: '2026-06-25', notes: '' },
        { id: '19', subject: 'Numerieke Wiskunde', name: 'Feebackloop', status: 'Not Started', deadline: '2026-06-25', notes: '' },
        { id: '20', subject: 'PAMT', name: 'Herschrijven CRR1 in eigenwoorden zelfde idee', status: 'In Progress', deadline: '2026-07-24', notes: '' },
        { id: '21', subject: 'Work', name: 'working', status: 'In Progress', deadline: '2026-06-22', notes: '' },
        { id: '22', subject: 'Hydrologie', name: 'Hydrologie Deeltentamen 2', status: 'Completed', deadline: '2026-06-12', notes: '' },
        { id: '23', subject: 'Waterbouwkunde', name: 'Waterbouwkunde Exam', status: 'Completed', deadline: '2026-06-19', notes: '' },
        { id: '24', subject: 'Hydrologie', name: 'Introductie Hydrologie doorlezen', status: 'Completed', deadline: '2026-06-08', notes: '' }
    ],
    dayLogs: [
        { date: '2026-06-05', focus: 'creating planning', extra: 'hydrology' },
        { date: '2026-06-06', focus: '--', extra: '' },
        { date: '2026-06-07', focus: '--', extra: '' },
        { date: '2026-06-08', focus: 'Numerical math Ch 1 u/t 7 + practical', extra: 'Hydrology' },
        { date: '2026-06-09', focus: 'Werken', extra: '' },
        { date: '2026-06-10', focus: 'Hydrologie', extra: '' },
        { date: '2026-06-11', focus: 'Werken', extra: '' },
        { date: '2026-06-12', focus: '--', extra: '' },
        { date: '2026-06-13', focus: '--', extra: '' },
        { date: '2026-06-14', focus: '--', extra: '' },
        { date: '2026-06-15', focus: 'Werken', extra: 'Filosofie week 5/7?' },
        { date: '2026-06-16', focus: 'Alle waterbouw colleges kijken(5.5 lecuters)', extra: '' },
        { date: '2026-06-17', focus: 'Starten met oefententamens maken', extra: 'na lunch formule blad maken' },
        { date: '2026-06-18', focus: 'Oefententamens maken met focus op knelpunten dagen ervoor', extra: '' },
        { date: '2026-06-19', focus: 'Preperation exam Waterbouwkunde', extra: 'Inlezen PAMT' },
        { date: '2026-06-20', focus: '--', extra: '' },
        { date: '2026-06-21', focus: '--', extra: '' },
        { date: '2026-06-22', focus: 'Werken', extra: '' },
        { date: '2026-06-23', focus: '--', extra: '' },
        { date: '2026-06-24', focus: '--', extra: '' },
        { date: '2026-06-25', focus: '--', extra: '' },
        { date: '2026-06-26', focus: '--', extra: '' },
        { date: '2026-06-27', focus: '--', extra: '' },
        { date: '2026-06-28', focus: '--', extra: '' },
        { date: '2026-06-29', focus: '--', extra: '' },
        { date: '2026-06-30', focus: '--', extra: '' }
    ]
};

// Helper: Read database file
function readData() {
    try {
        if (!fs.existsSync(DATA_FILE)) {
            // Write seed data if file doesn't exist
            fs.writeFileSync(DATA_FILE, JSON.stringify(seedData, null, 2), 'utf8');
            return seedData;
        }
        const fileContent = fs.readFileSync(DATA_FILE, 'utf8');
        return JSON.parse(fileContent);
    } catch (error) {
        console.error('Error reading data file, using seed data:', error);
        return seedData;
    }
}

// Helper: Write database file
function writeData(data) {
    try {
        fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf8');
        return true;
    } catch (error) {
        console.error('Error writing to data file:', error);
        return false;
    }
}

// API: Get all tasks and day logs
app.get('/api/data', (req, res) => {
    const data = readData();
    res.json(data);
});

// API: Update tasks and day logs
app.post('/api/data', (req, res) => {
    const { tasks, dayLogs } = req.body;
    
    if (!Array.isArray(tasks) || !Array.isArray(dayLogs)) {
        return res.status(400).json({ error: 'Invalid data format. Tasks and dayLogs must be arrays.' });
    }

    const success = writeData({ tasks, dayLogs });
    if (success) {
        res.json({ message: 'Data saved successfully.' });
    } else {
        res.status(500).json({ error: 'Failed to save data on server.' });
    }
});

// Default path redirects to index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start Server
app.listen(PORT, () => {
    console.log(`Study Planner Server is running on port ${PORT}`);
    console.log(`Local address: http://localhost:${PORT}`);
});
