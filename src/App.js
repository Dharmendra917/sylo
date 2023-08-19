
import './App.css';
import SearchBar from './Components/Search/SearchBar';
import Occasion from './Components/Occasion/occ';
import Venue from './Components/Venues/venue';
import Select from './Components/Select/select';
import Customers from './Components/Customers/customers';
import Navbar from './Components/Footer/footer';
import ImageCarousel from './carousel';

function App() {
  return (
    <>
      <SearchBar/>   
      <ImageCarousel/>
      <Occasion/>  
      <Venue/> 
      <Select/>
      <Customers/>
      <Navbar/>
     </>
  );
}
export default App;
