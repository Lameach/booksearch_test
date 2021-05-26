import './App.css';
import { Provider } from 'react-redux'
import store from '../store/store'
import SearchFieldWrapped from '../dumb/SearchFieldWrapped';
import SnippetListWrapped from './SnippetListWrapped';
import Modal from '../dumb/Modal';

function App() {
  return (
    <div id="app">
      <Provider store={store}>
        <SearchFieldWrapped/>
        <SnippetListWrapped/>
      </Provider>
    </div>
  );
}

export default App;