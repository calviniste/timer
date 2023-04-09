import '../styles/home.styles.css'
import HItemi from "../components/HItemi.component";
import { HItems } from "../const/homeitem";
import "../components/navigation"
import Header from '../components/Header.components';
import Footer from '../components/Footer.components';
import { Outlet } from 'react-router-dom';
const Site = () => {
 
    return (
        <div className="App">
              <Header/>
<Outlet/>
              <Footer/>
        </div>
        
        
    )

    
}

export default Site;