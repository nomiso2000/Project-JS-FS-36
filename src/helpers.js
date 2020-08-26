export const APIhelpers = {
  baseURL: 'https://api.themoviedb.org',
  urlForIMG: 'https://image.tmdb.org',
  imgParams: '/t/p/w500/',
  page: 1,
  api_key: '249034089965cfc778893cbdb0f537e5',
  query: '',
};

export const info = {
  watched: [],
  queue: [],
  isMobile: false,
  isTablet: false,
  isDesktop: false,
};

export const getProps = () => {
  const width = window.screen.width;

  if (localStorage.getItem('watched')) {
    info.watched = [
      ...info.watched,
      ...JSON.parse(localStorage.getItem('watched')),
    ];
  }
  if (localStorage.getItem('queue')) {
    info.queue = [...info.queue, ...JSON.parse(localStorage.getItem('queue'))];
  }

  if (width > 320 && width < 768) {
    info.isMobile = true;
  }

  if (width > 768 && width < 1024) {
    info.isTablet = true;
  }

  if (width > 1024) {
    info.isDesktop = true;
  }
};
