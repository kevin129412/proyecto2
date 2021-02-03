const app = document.getElementById('app');
app.innerHTML = '<h1>Hola</h1>';

const lista = ['Kevin', 'Kbza', 'Kikin'];

const htmlList = document.createElement('ul');
htmlList.classList.add('list-group', 'mb-4');

const h2Element = document.createElement('h2');
h2Element.innerText = '';

const handleClick = (item) => {
  h2Element.innerText = item;
};

lista.forEach((item) => {
  const listItem = document.createElement('li');
  listItem.classList.add('list-group-item', 'list-group-item-action');
  listItem.innerText = item;

  listItem.addEventListener('click', () => {
    handleClick(item);
  });

  htmlList.appendChild(listItem);
});

app.append(htmlList);
app.append(h2Element);
