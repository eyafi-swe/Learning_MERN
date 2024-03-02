const express = require('express');
const app = express();
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 5000;
var cors = require('cors');
app.use(cors());
app.use(express.json());
// const users = [
//     {id:1,name:"Eyafi",email:"eyafineo@gmail.com"},
//     {id:2,name:"Neo",email:"eyo@gmail.com"},
//     {id:3,name:"Sarwar",email:"neo@gmail.com"},
//     {id:4,name:"Eyo",email:"eyafi@gmail.com"},
// ]


const uri = "mongodb+srv://simple-nodedb:ue6sfmmw6tqwNRLZ@cluster1.qecjojb.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

const run = async ()=>{
    try{
        const userCollection = client.db("simple-node").collection("users");
        // const user = {name:"Lady Mama",email:"lady@gaga.com"};
        // const result = await userCollection.insertOne(user);
        // console.log(`User inserted with the _id: ${result.insertedId}`);

        app.get('/users',async(req,res) =>{
            const cursor = userCollection.find({});
            const users = await cursor.toArray(); 
            res.send(users);
        })

        app.post('/users',async (req,res) =>{
            const user = req.body;
            // user.id = users.length + 1;
            const result = await userCollection.insertOne(user);
            console.log(`User inserted with the _id: ${result.insertedId}`)            
            res.send(user);
        })
    }
    finally{

    }
}

run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('Server running');
})

// app.get('/users',(req,res) =>{
//     if(req.query.email){
//         const search = req.query.email;
//         const filtered = users.filter(user => user.email.toLocaleLowerCase().includes(search));
//         res.send(filtered);
//     }
//     res.send(users);
// })

// app.post('/users',(req,res) =>{
//     const user = req.body;
//     user.id = users.length + 1;
//     users.push(user);
//     res.send(user);
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})