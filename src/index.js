import './styles.css';
import './Components/pagination/pagination.css'
import { navigationModule } from './Components/header/navigation/navigation';
import { api_services } from './api_services';

import { info, getProps } from './helpers';

import {pagination} from './Components/pagination/pagination.js'

const array = ['Home', 'Library'];

navigationModule(array);

// console.log(pagination.makingOfLine())