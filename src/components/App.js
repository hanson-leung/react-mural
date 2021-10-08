import './App.css';

// import components
import Header from './Header/Header';

import Cards from './Cards/Cards';

import Modal from 'react-modal'

const App = () => {
  return (
    <div className="App">
      
      <div className="container">

        <Header />

        <Cards />

      </div>

    </div>
  );
}

Modal.setAppElement('#root');

export default App;
