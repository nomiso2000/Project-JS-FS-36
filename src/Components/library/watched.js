import '../innerPages/single-film';
import { singlePage } from '../innerPages/single-film';

const searchBtn = async () => {
  const data = await singlePage;

  data.innerHTML = watchedBtn.addEventListener(
    'submit',
    console.log('clicked'),
  );
};
