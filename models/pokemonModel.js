import mongooseDateFormat from "mongoose-date-format";

export default (mongoose) => {
  const pokemonSchema = mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    hp: {
      type: Number,
      required: true,
      min:0,
    },
    attack: {
      type: Number,
      required: true,
      min:0,
    },
    defense: {
      type: Number,
      required: true,
      min:0,
    },
    speed: {
      type: Number,
      required: true,
      min:0
    },
    active: {
      type: Boolean,
    },
    lastModified: {
      type: Date,
      default: Date.now(),
    },
  });

  const pokemonModel = mongoose.model("pokemon", pokemonSchema, "pokemon"); //para criar pokemon no singular
  pokemonSchema.plugin(mongooseDateFormat);
  return pokemonModel;
};
