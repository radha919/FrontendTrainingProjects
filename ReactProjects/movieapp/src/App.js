import logo from './logo.svg';
import './App.css';
import Menubar from './menu';
import AddMovie from './components/addmovies';
function App() {
  return (
    <div>
      <Menubar></Menubar>  
      <AddMovie></AddMovie>                         
    </div>
  );
}

export default App;
