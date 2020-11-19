export default (moongose) => {
  const schema = mongoose.Schema({
    Pokemon: {
      type: string,
      require: true,
    },
    GIF: {
      type: string,
      require: true,
    },
    HP: {
      type: Number,
      require: true,
      min: 0,
    },
    Attack: {
      type: Number,
      require: true,
      min: 0,
    },
    Defense: {
      type: Number,
      require: true,
      min: 0,
    },
    Speed: {
      type: Number,
      require: true,
      min: 0,
    },
    Description: {
      type: string,
      require: true,
    },
  });

  const Pokemon = mongoose.model("pokemon", schema, "pokemon");
  return Pokemon;
};
