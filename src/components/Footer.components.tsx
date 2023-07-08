
import { NavLink } from 'react-router-dom'
import '../styles/footer.styles.css'
const Footer = () => {

    return (
        <div className="footer">
            <div className="footer_name">
                <span>timer</span>
                <ul>
                    <li>
                        maroua djarengol
                    </li>

                </ul>
            </div>
            <div className="footer_service">
                <span>nos services</span>
                <ul>
                    <li>
                        developpement des applications mobiles
                    </li>
                    <li>
                        developpement des applications webs
                    </li>
                    <li>
                        design ux
                    </li>
                    <li>
                        audits
                    </li>
                </ul>
            </div>
            <div className="footer_link">
                <span>liens</span>
                <ul>
                    <li>
                        <NavLink
                            to="/"
                            className="footer_link_a">
                            accueil
                        </NavLink>

                    </li>
                    <li>
                    <NavLink
                            to="/services"
                            className="footer_link_a">
                             services
                        </NavLink>
                       
                    </li>
                    <li>
                    <NavLink
                            to="/formations"
                            className="footer_link_a">
                             formations
                        </NavLink>
                       
                    </li>
                    <li>
                    <NavLink
                            to="/projets"
                            className="footer_link_a">
                             projets
                        </NavLink>
                    </li>
                   
                </ul>
            </div>
            <div className="footer_contact">
                <span>contactez-nous</span>
                <ul>
                    <li>
                        (+237) 690123456
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Footer