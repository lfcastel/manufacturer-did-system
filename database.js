const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database("database.sqlite"); //

// Initialize tables
db.serialize(() => {
    // Product Types
    db.run(`
        CREATE TABLE IF NOT EXISTS product_types (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            type TEXT,
            did TEXT,
            did_document TEXT
        )
    `);
    
    // Batches
    db.run(`
         CREATE TABLE IF NOT EXISTS batches (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        batchDid Text,
        productTypeDid TEXT,
        did_document TEXT,
        FOREIGN KEY (productTypeDid) REFERENCES product_types(did),
        FOREIGN KEY (productDid) REFERENCES products(productDid)
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
            productTypeDid TEXT,
            did_document TEXT,
            FOREIGN KEY (batchDid) REFERENCES batches(batchDid),
            FOREIGN KEY (productTypeDid) REFERENCES product_types(did)
        )
    `);

})

module.exports = db;
