import mongoose from "mongoose";
const { Schema } = mongoose;

const addExperiencia = new Schema({
  experiencia: {
    type: String,
    required: true,
  },
});
const Experiencia = mongoose.model('Experiencia', addExperiencia);

export default Experiencia