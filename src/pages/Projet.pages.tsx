import { NavLink } from "react-router-dom"
import "../styles/formaton.styles.css"
import github from "../assets/images/github-logo.png"
const Projet = () => {
    return (
        <div className="projet">
            <NavLink
                to="https://github.com/orgs/TimerDigitech/repositories">
                <img src={github} />
            </NavLink>
        </div>
    )
}

export default Projet