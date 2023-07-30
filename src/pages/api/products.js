
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://pc-builder:VZq0GDUUupIolsto@cluster0.iohfkju.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run(req, res) {
    try {
        await client.connect();
        const productsCollection = client.db("pc-builder").collection('products');


        if (req.method == "GET") {
            const products = await productsCollection.find({}).toArray();
            res.send({ message: "success", status: 200, data: products });
        }
    } finally {
    }
}
export default run;
