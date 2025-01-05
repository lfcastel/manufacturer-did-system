const express = require('express');
const app = express();
const port = 3000;
const db = require('./database'); // connect to the datbase

const {
    generateProductDid,
    generateBatchDid,
    generateProductTypeDid,
    generateProductDidDocument,
    generateProductTypeDidDocument,
    generateBatchDidDocument,
} = require('./generate_did');

function getRandomProductType() {
    const types = ['A', 'B', 'C'];
    const randomIndex = Math.floor(Math.random() * types.length);
    return types[randomIndex];

}

app.get('/create_product', (req, res) => {
    db.serialize(() => {
        // Randomnly select a product type
        const productType = getRandomProductType();

        // Get the Product Type DID
        db.get(
            'SELECT * FROM product_types WHERE type = ?', 
            [productType]
            (err, typeRow) => {
                if (err) return res.status(500).json({ error: err.message });

                let productTypeDid;
                if (!typeRow) {
                    // If product type does not exist, create it
                    const {did} = generateProductTypeDid(productType);
                    productTypeDid = did;
                    const productTypeDidDocumet = generateProductDidDocument(productTypeDid, productType);
                } 
            }
        )
    }
)

app.get('/product_info/:did', (req, res) => {
    const {did} = req.params;
    
    const productInfo = {
        id: did,
        name: "Sample Product",
        description: "This is a sample product description.",
        // Add more product details as needed
    };
    res.json(productInfo)
})

app.listen(3000, () => {
    console.log('Manufacturer DID Service is running on port 3000');
});


