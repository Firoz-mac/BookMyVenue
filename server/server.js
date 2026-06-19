import app from "./src/app.js";
import dotenv from 'dotenv';
import connectDB from "./src/config/db.js";

dotenv.config();
const PORT = process.env.PORT || 5000;

connectDB();

const server = app.listen(PORT, ()=>{
    console.log(`✅ Server running on port ${PORT}`);
    console.log(`📍 http://localhost:${PORT}`);
})

server.on('error', (error) =>{
    if(error.code === 'EADDRINUSE'){
        console.error(`❌ Port ${PORT} is already in use`);
        process.exit(1);
    }
})