const express = require('express');
const router = express.Router();
const verify = require('../utils/verifyToken');

// Importa o controller
const produtoController = require('../controllers/produtoController');

router.get('/', produtoController.produtosList);
router.get('/:id', produtoController.produtosRead);
router.post('/', verify, produtoController.produtosCreate);
router.put('/:id', verify, produtoController.produtosUpdate);
router.delete('/:id', verify, produtoController.produtosDelete);

module.exports = router;
