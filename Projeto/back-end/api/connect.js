// Js Assincrono
// await async
// full filled

import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://Guigu:0689@cluster0.erzp4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("spotify-project");
// const songCollection = await db.collection("songs").find({}).toArray();

// console.log(songCollection);
