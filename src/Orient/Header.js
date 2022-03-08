import React from "react"
import "../Pages_Style.css"

import { GiTeleport } from "react-icons/gi";

const Header = () => {
    return (
        <div className="header">
            <GiTeleport className="header_icons" />

            <div className="header_text">
                Niket Chaudhari
            </div>
        </div>
    )
}

export default Header;