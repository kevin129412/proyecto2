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
  const card = document.createElement('div');
  card.classList.add('card');
  const img = document.createElement('img');
  img.classList.add('card-img-top');
  img.src = tarjeta.img;
  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');
  const title = document.createElement('h5');
  title.classList.add('card-title');
  h5 = tarjeta.name;
  const text = document.createElement('p');
  text.classList.add('card-text');
  p = tarjeta.price;
  const butom = document.add('a');
  butom.classList.add('btn-btn-primary');

  card.appendChild(img);
  card.appendChild(cardBody);
  card.appendChild(butom);
  card.appendChild(text);
  card.appendChild(title);
  tarjetasHTML.appendChild(card);
});
