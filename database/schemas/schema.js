import { model, Schema } from "mongoose";

const schema = new Schema({
    id: { type: String, required: true },
    title: { type: String, required: true },
    evaluation: { type: Number, required: true },
    details: { type: String, required: true }, 
    image: {type: String, required: true },
    url: { type: String, required: true },
    information: { type: String, required: true },
});


export const Model = model("colection-movies", schema);
