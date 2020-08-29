export function saveToLocalStorage(e, data) {
  const currentButton = e.target.dataset.action;
  const id = Number.parseInt(e.target.dataset.id);
  let targetArray = '';
  switch (currentButton) {
    case 'watched-films':
      targetArray = 'watched';
      break;
    case 'queue-films':
      targetArray = 'queue';
      break;
    default:
      break;
  }
  let currentArray = [];
  const jsonSet = localStorage.getItem(targetArray);
  if (jsonSet) {
    currentArray = JSON.parse(jsonSet);
  }

  if (currentArray.length) {
    if (currentArray.some(film => film.id === id)) {
      return;
    }
  }
  localStorage.setItem(targetArray, JSON.stringify([...currentArray, data]));
}
