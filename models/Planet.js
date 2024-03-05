import mongoose from 'mongoose'

const Schema = mongoose.Schema


let PlanetSchema = new Schema ({
    // _id: { type: String },
    name: { type: String },
    rotation_period: { type: String },
    diameter: { type: String },
    climate: { type: String },
    gravity: { type: String },
    terrain: { type: String },
    surface_water: { type: String },
    population: { type: String },
    residents: [{type: String}],
    films: [{type: String}],
    url: {type: String}
  });

export default mongoose.model("planets", PlanetSchema)

