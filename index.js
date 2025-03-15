import dotenv from "dotenv";
dotenv.config();
import {app} from "./app.js";
import db from "./src/db/connectionDB.js";
const { PORT} = process.env;


// Database Connection
(async () => {
    try {
        const connection = await db.getConnection();
        console.log("MySQL Database Connection Successful")
        connection.release();
    } catch (err) {
        console.error("Database Connection Failed:", err.message);
        process.exit(1);
    }
})();




app.listen(PORT ,()=>{
    console.log(`App listening on port ${PORT}` );
})