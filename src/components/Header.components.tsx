import { NavLink,Navigator } from "react-router-dom"
import { Menu } from "../const/menu"
import logo from '../assets/images/timer.png'
import { useState } from "react"
const Header = () => {
    const [click, setClick] = useState(false)
    return (
        <div className="home_header">

            <div className="checkbtn" onClick={() => setClick(!click)}>
                <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
            </div>
            <div className="home_header_title">
                
                <NavLink
                    key="acc"
                    to=""

                >
                    <img src={logo} />
                </NavLink>

            </div>
            <div className={click ? "home_header_nav_active home_header_nav" : "home_header_nav"}>
                {
                    Menu.map((m) =>
                        <NavLink
                            key={m.name}
                            to={m.href}
                            className={({ isActive }) => isActive ? " active" : "btn"}
                            onClick={() => setClick(!click)}
                        >
                            {m.name}
                        </NavLink>
                    )
                }
            </div>
        </div>
    )
}

export default Header