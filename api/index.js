const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Menyajikan file statis dari folder public
app.use(express.static(path.join(__dirname, '../public')));

// Menangani semua rute dengan file `search.html`
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/search.html'));
});

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});

module.exports = app;
