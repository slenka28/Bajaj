const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// POST endpoint to process data
app.post('/bfhl', (req, res) => {
    const { data } = req.body;

    const user_id = "Swaraj_Lenka_28_01_2002"; 
    const email = "swaraj.lenka2021@vitbhopal.ac.in";
    const roll_number = "21BCE10892"; 

    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));
    const lowercaseAlphabets = alphabets.filter(char => char === char.toLowerCase()); 

    const highestLowercaseAlphabet = lowercaseAlphabets.length > 0 ? 
        [lowercaseAlphabets.sort().reverse()[0]] : [];

    res.json({
        is_success: true,
        user_id: user_id,
        email: email,
        roll_number: roll_number,
        numbers: numbers,
        alphabets: alphabets,
        highest_lowercase_alphabet: highestLowercaseAlphabet
    });
});

// GET endpoint to return operation code
app.get('/bfhl', (req, res) => {
    res.status(200).json({
        operation_code: 1
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
