const { response } = require('express');
const Usuario = require('../models/usuario');
const bcrypt = require('bcryptjs');
const generarJWT = require('../helpers/generarJTW');

const login = async (req, res = response) => {
  const { email, password } = req.body;

  try {
    const usuario = await Usuario.findOne({ email });

    if (!usuario) {
      return res.status(400).json({
        ok: false,
        msg: 'El usuario no existe',
      });
    }

    //validar password
    const validPassword = bcrypt.compareSync(
      password,
      usuario.password,
    );

    if (!validPassword) {
      return res.status(400).json({
        ok: false,
        msg: 'Password incorrecto',
      });
    }

    //generar token
    const token = await generarJWT(usuario.id);

    return res.json({
      ok: true,
      token,
      uid: usuario.id,
      name: usuario.nombre,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Error inesperado',
    });
  }
};

const register = async (req, res = response) => {
  const { email, password } = req.body;

  let usuario = await Usuario.findOne({ email });

  if (usuario) {
    return res.status(400).json({
      ok: false,
      msg: 'El usuario ya existe',
    });
  }

  usuario = new Usuario(req.body);

  //encriptar password
  const salt = bcrypt.genSaltSync();
  usuario.password = bcrypt.hashSync(password, salt);

  try {
    await usuario.save();
    console.log(usuario);
    const token = await generarJWT(usuario.id);
    return res.json({
      ok: true,
      token,
      uid: usuario.id,
      name: usuario.nombre,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Error inesperado',
    });
  }
};

module.exports = {
  login,
  register,
};
