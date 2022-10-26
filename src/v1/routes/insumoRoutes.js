const express = require('express');
const router = express.Router();
const insumoController = require('../../controllers/insumoController');

router
.get('/', insumoController.getAllInsumos)
.get('/:insumoId', insumoController.getOneInsumo)
.post('/', insumoController.createNewInsumo)
.patch('/:insumoId', insumoController.updateOneInsumo)
.delete('/:insumoId', insumoController.deleteOneInsumo);

module.exports = router;