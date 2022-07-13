const { response } = require('express');
const { Producto } = require('../models/producto');

const crearProducto = async (req, res = response) => {
  const producto = new Producto(req.body);

  try {
    const productoDB = await producto.save();
    res.json({
      ok: true,
     productoDB,
    });
  }
  catch (error) {
    res.status(500).json({
      ok: false,
      msg: 'Error inesperado',
    });
  }
};

const getProductos = async (req, res = response) => {
  const productos = await Producto.find();
  res.json({
    ok: true,
   productos,
  });
};

const deleteProducto = async (req, res = response) => {
  const { id } = req.params;

  try {
    const producto = await Producto.findById(id);

    if (!producto) {
      return res.status(400).json({
        ok: false,
        msg: 'El producto no existe',
      });
    }

    await Producto.findByIdAndDelete(id);

    res.json({
      ok: true,
      msg: 'El producto ha sido eliminado',
    });
  }
  catch (error) {
    res.status(500).json({
      ok: false,
      msg: 'Error inesperado',
    });
  }
};

module.exports = {
  crearProducto,
  getProductos,
  deleteProducto,
};
