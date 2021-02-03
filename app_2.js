// Respuesta de un API
const tarjetasList = [
  {
    name: 'RTX 3080 10GB ASUS TUF',
    price: 36.59,
    img: 'https://i.imgur.com/yX1wOhp.jpg',
  },
  {
    name: 'RTX 3080 10GB MSI Trio RGB',
    price: 39.305,
    img: 'https://i.imgur.com/yjLKqgb.png',
  },
];

const tarjetasHTML = document.getElementById('tarjetas');

tarjetasList.forEach((tarjeta) => {
  console.log(tarjeta);
});
