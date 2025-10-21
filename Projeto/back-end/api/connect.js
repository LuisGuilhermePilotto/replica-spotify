// Js Assincrono
// await async
// full filled
import dotenv from "dotenv";
import { MongoClient } from "mongodb";

dotenv.config();

const URI = process.env.MONGO_URI;

const client = new MongoClient(URI);

export const db = client.db("spotify-project");
// const songCollection = await db.collection("songs").find({}).toArray();

// console.log(songCollection);
