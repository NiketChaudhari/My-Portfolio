import React, { useEffect, useState } from "react"
import "../Pages_Style.css"

import { RiHome3Fill } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { FaMedal } from "react-icons/fa";
import { useNavigate } from "react-router-dom";



const Footer = () => {

    const [footCol, setFootCol_1] = useState(0)
    const navigate = useNavigate();

    const Introduction_Page = () => {
        navigate('/')
        setFootCol_1(1)
    }

    const About_Me_Page = () => {
        navigate('/About_Me')
        setFootCol_1(2)
    }


    const Projects_Page = () => {
        navigate('/Projects')
        setFootCol_1(3)
    }

    const Contact_Me_Page = () => {
        navigate('/Contact_Me')
        setFootCol_1(4)
    }

    // Introduction_Page()
    useEffect(() => {
        try {
            if (window.location.pathname === "/") {
                setFootCol_1(1)
            }
            else if (window.location.pathname === "/About_Me") {
                setFootCol_1(2)
            }
            else if (window.location.pathname === "/Projects") {
                setFootCol_1(3)
            }
            else if (window.location.pathname === "/Contact_Me") {
                setFootCol_1(4)
            }
            else {
                setFootCol_1(0)
            }
        }
        catch (err) {
            setFootCol_1(0)
        }
    }, [])


    return (
        <div className="footer">
            <RiHome3Fill className="footer_icons" style={{ color: (footCol === 1) ? "Blue" : "White" }} onClick={Introduction_Page} />
            <FaUserAlt className="footer_icons" style={{ color: (footCol === 2) ? "Blue" : "White" }} onClick={About_Me_Page} />
            <FaMedal className="footer_icons" style={{ color: (footCol === 3) ? "Blue" : "White" }} onClick={Projects_Page} />
            <BsFillTelephoneInboundFill className="footer_icons" style={{ color: (footCol === 4) ? "Blue" : "White" }} onClick={Contact_Me_Page} />
        </div>
    )
}

export default Footer;