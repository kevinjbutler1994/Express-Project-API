import mongoose from 'mongoose'

const Schema = mongoose.Schema


let CharacterSchema = new Schema ({

    // "_id": {type: String},
    "name": {type: String},
    "hair color": {type: String},
    "eye color": {type: String},
    "gender": {type: String},
    "hair_color": {type: String},
    "eye_color": {type: String},
    "homeworld": {type: String}, 
    "films": [String],
    "species": [String], 
    "vehicles": [String],
    "starships": [String],
    "created": {type: String}, 
    "edited": {type: String}, 
    "url": {type: String}
})

export default mongoose.model("characters", CharacterSchema)


