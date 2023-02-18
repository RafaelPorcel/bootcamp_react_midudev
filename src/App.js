import './App.css';
import Mensaje from './Mensaje';


function App() {
  return (
    <div className="App">
     <Mensaje color='red' message='Hola'></Mensaje>
     <Mensaje color='green' message='máquina'></Mensaje>
    </div>
  );
}

export default App;
