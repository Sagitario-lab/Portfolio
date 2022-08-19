import './Css/Solo.css';
import './Css/Description.css';
import './Css/Experiences.css';
import './Css/Skills.css';
import './Css/Footer.css';

import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";


import {Footer} from './Componentes/Footer.jsx'
import { Experiences } from './Componentes/Experiences';
import {Description} from './Componentes/Description.jsx';
import {Skills} from './Componentes/Skills';
import {Solo} from './Componentes/Solo.jsx';
function App() {
  return (
    <>
      
      <Solo/>
      <Description/>
      <Experiences/>
      <Skills/>
      <Footer/>

    </>
  );
}

export default App;
