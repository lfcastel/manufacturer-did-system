const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:'); // Use in-memory DB for simplicity

// Initialize tables
db.serialize(() => {
    // Product Types
    // Product Types
    db.run(`
        CREATE TABLE product_types (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            type TEXT,
            did TEXT
        )
    `);
    
    // Batches
    db.run(`
        CREATE TABLE batches (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        batchDid Text,
        productTypeDid TEXT
        )
    `);

    // Products
    db.run(`
        CREATE TABLE products (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            productDid TEXT,
            color TEXT,
            weight TEXT,
            batchDid TEXT,
            productTypeDid TEXT
        )
    `);

})