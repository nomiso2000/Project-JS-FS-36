import './styles.css';
import { navigationModule } from './Components/header/navigation/navigation';
import { api_services } from './api_services';
import searchAPI from '../src/Components/header/navigation/search_api';

import { info, getProps } from './helpers';

import './Components/mainPage/mainPage';

const array = ['Home', 'Library'];

// console.log(navigationModule(array));
navigationModule(array);
