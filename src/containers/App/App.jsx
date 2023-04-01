import { getApiResource } from '../../utils/network';
import PeoplePage from '../PeoplePage/PeoplePage';

getApiResource();

const App = () => {
  return(
    <PeoplePage></PeoplePage>
  )
}

export default App;
