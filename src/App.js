import './App.css';
import MarioCartContainer from './containers/MarioCartContainer'
// import SearchContainer from './containers/searchContainer';

function App() {
  return (
    <>
    <div class="container">
      <h1 class="containerHead">Mario Cart Drivers</h1>
      
      {/* <SearchContainer /> */}
      <MarioCartContainer/>
    </div>  
    </>
 
  );
}

export default App;
