import express from 'express';
import "dotenv/config";


const app = express();
const port = process.env.port || 8080;

app.listen(port, () => {
    console.log(`Server listening on ${port}`)
})

