import mongooseDateFormat from "mongoose-date-format";

export default (mongoose) => {
  const pokemonSchema = mongoose.Schema({
    Pokemon: {
      type: String,
      required: true,
    },
    GIF: {
      type: String,
      required: true,
    },
    HP: {
      type: Number,
      required: true,
    },
    Attack: {
      type: Number,
      required: true,
    },
    Defense: {
      type: Number,
      required: true,
    },
    Speed: {
      type: Number,
      required: true,
    },
    Description: {
      type: Number,
      required: true,
    },
    lastModified: {
      type: Date,
      default: Date.now(),
    },
  });

  const pokemonModel = mongoose.model("pokemon", pokemonSchema, "pokemon"); //para criar student no singular
  pokemonSchema.plugin(mongooseDateFormat);
  return pokemonModel;
};
