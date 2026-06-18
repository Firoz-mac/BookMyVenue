import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());

app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
    })
);

app.get('/', (req, res) =>{
    res.send("Book My Venue API");
});

export default app;