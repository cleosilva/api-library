import mongoose from "mongoose";

mongoose.connect('mongodb+srv://admin:94awtu9qbZdKWYE0@cluster0.ba50e7i.mongodb.net/?retryWrites=true&w=majority');

let db = mongoose.connection;

export default db;
