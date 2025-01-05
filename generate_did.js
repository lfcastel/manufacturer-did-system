const { v4: uuidv4 } = require('uuid'); // import uuid library

function generateProductDid() {
    // Generate a random GUID
    const guid = uuidv4();

    // Construct the did
    const did = `did:prod:${guid}`;
    console.log('Generated product DID:', did);

    return {
        did,
        guid // pass the GUID to use in service endpoints
    };
}

function generateBatchDid() {
    const guid = uuidv4();
    const did = 'did:batch:{guid}';
    console.log('Generated batch DID:', did);

    return{
        did,
        guid,
    }
}

// Generate a Product Type DID
function generateProductTypeDid(type) {
    const did = `did:prodtype:${type}`;
    console.log('Generated Product Type DID:', did);

    return {
        did,
        type, // Include the type (e.g., "A", "B", "C")
    };
}

function generateProductDidDocument(did) {
    return { 
        "@context": "https://www.w3.org/ns/did/v1",
        id: did,
        service: [
            {
                id: `${did}#productInfoService`,
                type: "ProductInfoService",
                serviceEndpoint: "`http://localhost:3000/productinfoservice/${guid}`;",
            }
        ],
    };
}

function generateProductTypeDidDocument(did) {
    return { 
        "@context": "https://www.w3.org/ns/did/v1",
        id: did,
        service: [
            {
                id: `${did}#productTypeInfoService`,
                type: "ProductTypeInfoService",
                serviceEndpoint: "`http://localhost:3000/producttypeinfoservice/${guid}`;",
            }
        ],
    };
}

function generateBatchDidDocument(did) {
    return { 
        "@context": "https://www.w3.org/ns/did/v1",
        id: did,
        service: [
            {
                id: `${did}#batchInfoService`,
                type: "BatchInfoService",
                serviceEndpoint: "`http://localhost:3000/batchinfoservice/${guid}`;",
            }
        ],
    metadata: {
        createdDate: new Date().toISOString(),
    },
};
}

module.exports = {
    generateProductDid,
    generateBatchDid,
    generateProductTypeDid,
    generateProductDidDocument,
    generateProductTypeDidDocument,
    generateBatchDidDocument,
};