export const hideSearch = () => {
  const searchInputs = document.querySelectorAll('.search');
  const searchButton = document.querySelectorAll('.search-button');
  searchButton.forEach(el => {
    el.classList.add('hideSearch');
  });
  searchInputs.forEach(el => {
    el.classList.add('hideSearch');
  });
};

export const showSearch = () => {
  const searchInputs = document.querySelectorAll('.search');
  const searchButton = document.querySelectorAll('.search-button');
  searchInputs.forEach(el => {
    el.classList.remove('hideSearch');
  });
  searchButton.forEach(el => {
    el.classList.remove('hideSearch');
  });
};

export const hideBtns = () => {
  const btn_library = document.querySelectorAll('.btn_library');
  btn_library.forEach(el => {
    el.classList.add('hideSearch');
  });
};

export const showBtns = () => {
  const btn_library = document.querySelectorAll('.btn_library');
  btn_library.forEach(el => {
    el.classList.remove('hideSearch');
  });
};
