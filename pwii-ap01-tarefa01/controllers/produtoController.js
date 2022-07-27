const db = require('../config/db.config');
const Produto = db.produto;

// Listar todos os produtos
exports.produtosList = async(req, res) => {
  try {
    const produtos = await Produto.findAll();
    res.json({ produtos: produtos });
  } catch(err) {
    res.send({ message: err.message });
  }
};

// Detalhar um produto
exports.produtosRead = async(req, res) => {
  try {
    const produto = await Produto.findOne({
      where: {
        id: req.params.id
      }
    });
    res.json({ produto: produto });
  } catch(err) {
    res.send({ message: err.message });
  }
};

// Criar um produto
exports.produtosCreate = async(req, res) => {
  try {
    const produto = await Produto.create(req.body);
    res.status(201).json({ produto: produto });
  } catch(err) {
    res.send({ message: err.message });
  }
};

// Atualizar um produto
exports.produtosUpdate = async(req, res) => {
  try {
    const produto = await Produto.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    res.status(204).send();
  } catch(err) {
    res.send({ message: err.message });
  }
};

// Apagar um produto
exports.produtosDelete = async(req, res) => {
  try {
    const produto = await Produto.destroy({
      where: {
          id: req.params.id
      }
    });
    res.status(204).send();
  } catch(err) {
    res.send({ message: err.message });
  }
};

