import mongoose from 'mongoose';
import pokemonModel from "../models/pokemonModel.js"

const db = {};
db.mongoose = mongoose;
db.url = process.env.MONGODB;
db.pokemon = pokemonModel(mongoose) 

export { db };
