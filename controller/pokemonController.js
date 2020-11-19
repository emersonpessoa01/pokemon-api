import { db } from "../models/index.js";

const Pokemon = db.pokemon;
const create = async (req, res) => {
  const pokemon = new Pokemon({
    Pokemon: req.body.Pokemon,
    GIF: req.body.GIF,
    HP: req.body.HP,
    Attack: req.body.Attack,
    Defense: req.body.Defense,
    Speed: req.body.Speed,
    Description: req.body.Description,
  });

  try {
    await pokemon.save();
    res.send({
      message: "Pokemon inserido com sucesso",
    });
  } catch (error) {
    res
      .status(500)
      .send({ message: error.message || "Algum erro ocorreu ao salvar" });
  }
};

const findAll = async (req, res) => {
  const name = req.query.Pokemon;

  var condition = name
    ? { name: { $regex: new RegExp(name), $options: "i" } }
    : {};

  try {
    const data = await Pokemon.find(condition);
    if (data.length < 1) {
      res.status(404).send({
        message: "Pokemon nao encontrado",
      });
    } else {
      res.send(data);
    }
  } catch (error) {
    res
      .status(500)
      .send({ message: error.message || "Erro ao listar todos os documentos" });
  }
};

const findOne = async (req, res) => {
  const id = req.params.id;

  try {
    const data = await Pokemon.findById({ _id: id });
    if (data.length < 1) {
      res.status(404).send({
        message: `Pokemon id:${id} nao encontrado`,
      });
    } else {
      res.send(data);
    }
  } catch (error) {
    res.status(500).send({ message: "Erro ao buscar o Documento id: " + id });
  }
};

const update = async (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Dados para atualizacao vazio",
    });
  }

  const id = req.params.id;

  try {
    const data = await Pokemon.findByIdUpdate({ _id: id }, req.body, {
      new: true,
    });

    if (data.length < 1) {
      res.status(404).send({
        message: "Pokemon nao encontrado para atualizacao",
      });
    } else {
      res.send(data);
    }
  } catch (error) {
    res.status(500).send({ message: "Erro ao atualizar o Pokemon id: " + id });
  }
};

const remove = async (req, res) => {
  const id = req.params.id;

  try {
    const data = await Pokemon.findByIdRemove({ _id: id });
    if (data.length < 1) {
      res.send({
        message: "Pokemon excluido com sucesso",
      });
    } else {
      res.send(data);
    }
  } catch (error) {
    res
      .status(500)
      .send({ message: "Nao foi possivel deletar o Pokemon id: " + id });
  }
};

const removeAll = async (req, res) => {
  try {
    const data = await Pokemon.deleteMany();
    if (data.length < 1) {
      res.status(404).send({
        message: "Nenhum Pokemon encontrado para exclusao",
      });
    } else {
      res.send({
        message: "Pokemon excluidos com sucesso",
      });
    }
  } catch (error) {
    res.status(500).send({ message: "Erro ao excluir todos os Pokemons" });
  }
};

export default { create, findAll, findOne, update, remove, removeAll };
