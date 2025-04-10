const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Create public directory if it doesn't exist
if (!fs.existsSync('./public')) {
    fs.mkdirSync('./public', { recursive: true });
}

// Create public/img directory if it doesn't exist
if (!fs.existsSync('./public/img')) {
    fs.mkdirSync('./public/img', { recursive: true });
}

// List of files to move to public directory
const filesToMove = [
    'index.html',
    'cart.html',
    'checkout.html',
    'contact.html',
    'product-arte.html',
    'product-body-costillero.html',
    'product-body-espalda.html',
    'product-dance.html',
    'product-detail.html',
    'product-hoodie-arte.html',
    'product-hoodie-dance.html',
    'product-hoodie-mariposa.html',
    'product-mariposa.html',
    'styles.css',
    'logo.svg',
    'favicon.ico',
    'IMAGEN BANNER.png',
    'disenos-dibujados-mano-ilustracion-ropa-calle_23-2149863504.avif'
];

// Move files to public directory
filesToMove.forEach(file => {
    if (fs.existsSync(file)) {
        fs.copyFileSync(file, path.join('./public', file));
        console.log(`Moved ${file} to public directory`);
    }
});

// Move images from img directory to public/img
if (fs.existsSync('./img')) {
    const imgFiles = fs.readdirSync('./img');
    imgFiles.forEach(imgFile => {
        fs.copyFileSync(path.join('./img', imgFile), path.join('./public/img', imgFile));
        console.log(`Moved img/${imgFile} to public/img directory`);
    });
}

console.log('Files moved successfully!');
