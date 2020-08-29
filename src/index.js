import './styles.css';
import { navigationModule } from './Components/header/navigation/navigation';
import { api_services } from './api_services';
import searchAPI from '../src/Components/header/search/search_api';

import { info, getProps } from './helpers';

import './Components/mainPage/mainPage';
import './Components/library/queue';
// import './Components/header/logo/';
const array = ['Home', 'Library'];

import '../src/Components/header/navigation/returnByLogo';
navigationModule(array);
