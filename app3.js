const personas = [
  { name: 'Kbzaa', age: 20 },
  { name: 'Kevin', age: 22 },
  { name: 'Pachi', age: 30 },
  { name: 'Chona', age: 34 },
];

const body = document.getElementsByTagName('body');

const mainDiv = document.createElement('div');
mainDiv.id = 'container';

body[0].append(mainDiv);

const container = document.getElementById('container');
container.classList.add('container');

const laLista = document.createElement('ul');
laLista.classList.add('list-group');

personas.forEach((persona) => {
  const liElement = document.createElement('li');
  liElement.classList.add('list-group-item');
  liElement.innerText =`${persona.name}, ${persona.age}`
  if (persona.age >=30) {
      liElement.classList.add('text-danger')
    }
    laLista.append(liElement);
});
container.append(laLista);
