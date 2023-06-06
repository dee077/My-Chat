const express = require('express');
const dotenv = require('dotenv');
const chats = require('./staticData/data');
const connectDB = require('./config/mongodb');
const userRoutes =  require('./routes/userRoutes');
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

const app = express();

dotenv.config();
connectDB();

app.use(express.json());

app.get('/', (req,res)=>{
    res.send("API is running");
});

app.use('/api/user',userRoutes);

// Error Handling for invalid API req
app.use(notFound);
app.use(errorHandler);

const PORT=process.env.PORT || 5000

app.listen(PORT, console.log(`Server started on port ${PORT}`));
