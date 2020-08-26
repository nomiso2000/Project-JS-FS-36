import './styles.css';
import { navigationModule } from './Components/header/navigation/navigation';
import { api_services } from './api_services';

import { info, getProps } from './helpers';

import './Components/mainPage/mainPage';

const array = ['Home', 'Library'];

navigationModule(array);
