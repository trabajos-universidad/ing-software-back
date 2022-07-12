const { Router } = require('express');
const { getProductos, crearProducto, deleteProdcuto } = require('../controller/productos');
const router = Router();

router.get('/', getProductos)

router.post('/auth', crearProducto)

router.delete('/auth', deleteProducto);
