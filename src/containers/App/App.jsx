import cn from 'classnames'; 
import styles from './App.module.css';
import { getApiResource } from '../../utils/network';

getApiResource();

const App = () => {
  return(
    <div className={cn(styles.header, styles.text)}>App</div>
  )
}

export default App;
