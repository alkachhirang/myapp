import './App.css';
import './components/IconImg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Catagerysection from './components/Catagerysection';
import Experiencesection from './components/Experiencesection';
import Popularsection from './components/Popularsection';
import Topsection from './components/Topsection';
import Customersection from './components/Customersection';
import Newslettersection from './components/Newslattersection';
import Footersection from './components/Footersection';


function App() {
  return (
    <div>
      <Header />
      <Catagerysection />
      <Experiencesection />
      <Popularsection />
      <Topsection />
      <Customersection />
      <Newslettersection />
      <Footersection/>

    </div>
  );
}





export default App;
