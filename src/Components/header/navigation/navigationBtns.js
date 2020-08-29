export const addedMarkup = () => {};

export const libFunc = arr => {
  const itemMarkupBtns = item => {
    return `
          <li data-link=${item} class="navigationListBtn" >
          <button>${item.toUpperCase()}</button>
          </li>
          `;
  };

  const listMarkuBtns = arr => {
    const result = arr.reduce((acc, item) => {
      acc += itemMarkupBtns(item);
      return acc;
    }, '');
    return `<ul class="navigationListBtns">${result}</ul>`;
  };

  const library = document.querySelector('.js-library');
  console.log('library', library);
  library.insertAdjacentElement('afterbegin', listMarkuBtns());
};
