//app.js can be used for structing or it can be used  for code for better structuring we can gave
import './App.css';
import Navbar from './Components/navbar/navbar'
import './Components/navbar/navbar.css'
import Count
 from './Components/navbar/Count';
 import Crud from './Components/navbar/Crud_app/crud'
function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
      {/* <Navbar/> */}
      <Crud/>
    </div>
  );
}

// this is a  module saying i imported 
export default App;
