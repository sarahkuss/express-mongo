import { MongoClient } from "mongodb";
import { mongoUri } from "../secrets.js";

const client = new MongoClient(mongoUri)

export const db = client.db('my-garden')

