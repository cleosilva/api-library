import mongoose from "mongoose";
import * as dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.MONGOOSE_CONNECT);

let db = mongoose.connection;

export default db;
