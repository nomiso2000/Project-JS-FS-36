import './styles.css';
import { navigationModule } from './Components/header/navigation/navigation';
import { api_services } from './api_services';
import searchAPI from '../src/Components/header/search/search_api';

import { info, getProps } from './helpers';

import './Components/mainPage/mainPage';
import './Components/library/queue';

// Oloesia

import './Components/lib_buttons/process';

// import './Components/header/logo/';
const array = ['Home', 'Library'];

navigationModule(array);
