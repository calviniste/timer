import '../styles/home.styles.css'
import HItemi from "../components/HItemi.component";
import { HItems } from "../const/homeitem";
import "../components/navigation"
import { NavLink } from 'react-router-dom';
const Home = () => {

    return (
        <div className="home">
            <div className="banner">

                <div className="home_desc">
                    <h1>
                        nous developpons des applications web et mobile sur mesure qui vous aident a accroitre vos performances</h1>

                    <NavLink
                        key="service"
                        to="/services"
                        className="servicebtn"
                    >
                        decouvrez nos services
                    </NavLink>
                </div>
            </div>
            <div className="home_item">
                {
                    HItems.map((hi: any) =>
                        <HItemi title={hi.title} img={hi.img} desc={hi.desc} position={hi.position} sh={hi.sh} desc1={hi.desc1} desc2={hi.desc2} desc3={hi.desc3}/>
                    )
                }

            </div>

        </div>


    )


}

export default Home;