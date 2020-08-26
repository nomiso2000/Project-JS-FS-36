import './styles.css';
import { navigationModule } from './Components/header/navigation/navigation';
import { api_services } from './api_services';

import { info, getProps } from './helpers';

const array = ['Home', 'Library'];

navigationModule(array);
