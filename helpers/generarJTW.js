const jtw = require('jsonwebtoken');

const generarJWT = (uid) => {
  return new Promise((resolve, reject) => {
    const payload = {
      uid,
    };
    jtw.sign(
      payload,
      process.env.JWT_SECRET,
      {
        expiresIn: '2h',
      },
      (err, token) => {
        if (err) {
          reject('Error al generar el token');
        } else {
          resolve(token);
        }
      },
    );
  });
};

module.exports = generarJWT;