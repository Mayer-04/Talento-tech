import { codigoRegExp, direccionRegExp } from "./constantes.js";

export const validationHouse = (res, body) => {
  if (!direccionRegExp.test(body.address)) {
    return res.status(400).json({
      message: "Dirección inválida",
    });
  }

  if (!codigoRegExp.test(body.code)) {
    return res.status(400).json({
      message: "Código inválido",
    });
  }
};

// "address": "Calle 10E #10-14",
//     "city": "Manizales",
//     "state": "Caldas",
//     "size": 56,
//     "type": "apartment",
//     "zip_code": "1700004",
//     "rooms": 3,
//     "bathrooms": 2,
//     "parking": false,
//     "price": 190000000,
//     "code": "ABCD7855",
//     "image": "uploads\\1708391419588-descarga.jpeg"
