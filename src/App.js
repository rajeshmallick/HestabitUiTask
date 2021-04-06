import Header from '../src/components/header'
import Bestapp from '../src/components/bestapp'
import Trustedcompany from '../src/components/trustedcompany'
import Footer from '../src//components/footer'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='custom_padding'>
    <Header/>
    <Bestapp/>
    <Trustedcompany/>
    </div>
    <Footer/> 
    </div>
  );
}

export default App;
