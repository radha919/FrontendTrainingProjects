import './App.css';
import Menubar from './menu';
import AddMovie from './components/addmovies';
import AddBooking from './components/addbooking';
function App() {
  return (
    <div>
      <Menubar></Menubar>  
      <AddMovie></AddMovie>     
      <AddBooking></AddBooking>                   
    </div>
  );
}

export default App;
