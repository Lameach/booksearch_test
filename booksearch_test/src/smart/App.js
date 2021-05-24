import './App.css';
import SearchField from '../dumb/SearchField';
import { Provider } from 'react-redux'
import Searcher from './Searcher'
import store from '../store/store'

function App() {
  return (
    <div id="app">
      <Provider store={store}>
        <SearchField/>
        <Searcher/>
      </Provider>
    </div>
  );
}

export default App;