const express = require('express');
const app = express();
const port = process.env.port || 3000;

// Addition
app.get('/add', (req, res) => {
    const { num1, num2 } = req.query;

    
    if (!num1 || !num2 || isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: 'Please provide valid numbers for num1 and num2' });
    }

    const result = parseFloat(num1) + parseFloat(num2);
    res.json({ result });
});

// Subtraction
app.get('/subtract', (req, res) => {
    const { num1, num2 } = req.query;

    
    if (!num1 || !num2 || isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: 'Please provide valid numbers for num1 and num2' });
    }

    
    const result = parseFloat(num1) - parseFloat(num2);
    res.json({ result });
});

// Multiplication
app.get('/multiply', (req, res) => {
    const { num1, num2 } = req.query;

    
    if (!num1 || !num2 || isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: 'Please provide valid numbers for num1 and num2' });
    }

    
    const result = parseFloat(num1) * parseFloat(num2);
    res.json({ result });
});

// Division
app.get('/divide', (req, res) => {
    const { num1, num2 } = req.query;

    if (!num1 || !num2 || isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: 'Please provide valid numbers for num1 and num2' });
    }

    if (parseFloat(num2) === 0) {
        return res.status(400).json({ error: 'Cannot divide by zero' });
    }

    const result = parseFloat(num1) / parseFloat(num2);
    res.json({ result });
});


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(port, () => {
    console.log("hello i'm listening to port"+port);
});