const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 6000;

// dbuser2
// HV34OE3pk0Ol0TKT

//Middleware
app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://dbuser2:HV34OE3pk0Ol0TKT@cluster1.qecjojb.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

const run = async () => {
    try {
        const userCollection = client.db('userdb2').collection('module65users');

        app.get('/users',async(req,res)=>{
            const query = {};
            const cursor = userCollection.find(query);
            const users = await cursor.toArray();
            res.send(users);
        })

        app.post('/users',async(req,res)=>{
            const user = req.body;
            const result = await userCollection.insertOne(user);
            console.log(`Inserted with the _id: ${result.insertedId}`);
            // console.log(user);
            res.send(result);
        })

        app.delete('/users/:id', async(req,res)=>{
            const id = req.params.id;
            const query = {_id:ObjectId(id)};
            const result = await userCollection.deleteOne(query);
            console.log(result);
            res.send(result);
        })

        app.get('/update/:id', async(req,res)=>{
            const id = req.params.id;
            const query = {_id:ObjectId(id)};
            const result = await userCollection.findOne(query);
            res.send(result);
        })

        app.put('/update/:id',async(req,res)=>{
            const id = req.params.id;
            const user = req.body;
            const filter = {_id:ObjectId(id)};
            const options = { upsert: true };
            const updateDoc = {
                $set: {
                  name:user.name,
                  email:user.email,
                  address:user.address
                },
              };
            const result = await userCollection.updateOne(filter,updateDoc,options);
            console.log(
                `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`,
              );
            // console.log(user);
            res.send(result);
        })

    } finally {

    }
}

run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})