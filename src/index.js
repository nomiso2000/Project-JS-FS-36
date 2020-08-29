import './styles.css';
import './Components/pagination/pagination.css';
import { navigationModule } from './Components/header/navigation/navigation';
import { api_services } from './api_services';
import searchAPI from '../src/Components/header/search/search_api';

import { info, getProps } from './helpers';
import { pagination } from './Components/pagination/pagination.js';
import './Components/mainPage/mainPage';

import './Components/header/lib_buttons/process';

const array = ['Home', 'Library'];

navigationModule(array);
