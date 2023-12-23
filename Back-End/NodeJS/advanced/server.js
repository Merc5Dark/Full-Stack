const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Data for testing
let data = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
];

// Get all the items
app.get('/items', (req, res) => {
    res,json(data);
});

// Get an item by ID
app.get('/items:id', (res, req) => {
    const id = parseInt(req.params.id);
    const item = data.find((item) => item.id === id);

    if (item) {
        res.json(item);
    } else {
        res.status(404).json({ message: 'Item not available' });
    }
});

// Create new item
app.post('/items', (req, res) => {
    const newItem = req.body;
    data.push(newItem);
    res.status(201).json(newItem);
});

// Update item bia ID
app.put('/items/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updateItem = req.body;

    data = data.map((item) => (item.id === id ? updateItem : item));

    res.json(updateItem);
});

// Deleting the item by ID
app.delete('/items/:id', (req, res) => {
    const id = parseInt(req.params.id);
    data = data.filter((item) => item.id !== id);
});

// Start the server
app.listen(port, () => {
    console.log('Server is running on http://localhost:${port}');
});