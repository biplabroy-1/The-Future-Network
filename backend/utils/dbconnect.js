import { connect } from "mongoose";

const dbConnect = connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("DataBase Connected")
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err.message);
        process.exit(1);
    });


export default dbConnect;