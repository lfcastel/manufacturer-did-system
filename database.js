const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database("database.db"); //

// Initialize tables
db.serialize(() => {
    // Product Types
    // Product Types
    db.run(`
        CREATE TABLE IF NOT EXISTS product_types (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            type TEXT,
            did TEXT
        )
    `);
    
    // Batches
    db.run(`
         CREATE TABLE IF NOT EXISTS batches (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        batchDid Text,
        productTypeDid TEXT
        )
    `);

    // Products
    db.run(`
         CREATE TABLE IF NOT EXISTS products (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            productDid TEXT,
            color TEXT,
            weight TEXT,
            batchDid TEXT,
            productTypeDid TEXT
        )
    `);

})