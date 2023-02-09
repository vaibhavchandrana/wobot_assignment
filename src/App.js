import './App.css';
import logo from './logo.png'
import Form from './component/Form';
import Footer from './component/Footer';

function App() {
  return (
    <div className='body'>
    <div className="App">
       <div className="logo">
        <img src={logo} alt=" wobot logo "/>
       </div>
       <Form />
    </div>
     <Footer/>
    </div>
  );
}

export default App;
