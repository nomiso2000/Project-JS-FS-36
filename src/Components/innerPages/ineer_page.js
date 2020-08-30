// export function saveToLocalStorage(e, data) {
//   const currentButton = e.target.dataset.action;
//   const id = Number.parseInt(e.target.dataset.id);
//   let targetArray = '';
//   switch (currentButton) {
//     case 'watched-films':
//       targetArray = 'watched';
//       break;
//     case 'queue-films':
//       targetArray = 'queue';
//       break;
//     default:
//       break;
//   }
//   let currentArray = [];
//   const jsonSet = localStorage.getItem(targetArray);
//   if (jsonSet) {
//     currentArray = JSON.parse(jsonSet);
//   }

//   if (currentArray.length) {
//     if (currentArray.some(film => film.id === id)) {
//       return;
//     }
//   }
//   localStorage.setItem(targetArray, JSON.stringify([...currentArray, data]));
// }
export function saveToLocalStorage(e, data) {
  const button = e.target;
  const buttonAction = e.target.dataset.action;
  const id = Number.parseInt(e.target.dataset.id);
  let targetArray = '';
  switch (buttonAction) {
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
  if (button.classList.contains('item-exist')) {
    localStorage.setItem(
      targetArray,
      JSON.stringify(currentArray.filter(film => film.id !== id)),
    );
    button.classList.remove('item-exist');
    button.textContent = `Add to ${targetArray}`;
  } else {
    if (currentArray.length) {
      if (currentArray.some(film => film.id === id)) {
        return;
      }
    }
    localStorage.setItem(targetArray, JSON.stringify([...currentArray, data]));
    button.classList.add('item-exist');
    button.textContent = `Remove from ${targetArray}`;
  }
}
