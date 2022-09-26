import './App.css';
import Main from "../Main/Main";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import ItemModal from '../ItemModal/ItemModal';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
      <ModalWithForm title="New Garment" />
      <ItemModal />
    </div>
  );
}

export default App;