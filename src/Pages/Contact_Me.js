import React, { useRef, useState, Suspense } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { TextureLoader } from 'three/src/loaders/TextureLoader'

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { BsTelephoneInboundFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";

import Texture_1 from "../Pics/Texture_1.jpg"
import Texture_2 from "../Pics/Texture_2.jpg"

const Box = (props) => {
    const mesh = useRef()
    const color_Map_1 = useLoader(TextureLoader, Texture_1)
    const color_Map_2 = useLoader(TextureLoader, Texture_2)
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    return (
        <mesh
            {...props}
            ref={mesh}
            scale={active ? 1.2 : 1}
            onClick={(event) => setActive(!active)}
            onPointerOver={(event) => setHover(true)}
            onPointerOut={(event) => setHover(false)}
        >
            <sphereGeometry args={[2, 16, 16]} />
            <meshStandardMaterial map={hovered ? color_Map_1 : color_Map_2} />
        </mesh>
    )
}



const Contact_Me = () => {
    return (
        <div className="Contact_Me">
            <Canvas>
                <Suspense fallback={null}>
                    <ambientLight />
                    <Box position={[0, 0, 0]} />
                    <OrbitControls autoRotate />
                </Suspense>
            </Canvas>

            <div className="Contact_Me_text Contact_Me_text_one">
                <BsTelephoneInboundFill />&nbsp; +91 7972343352
            </div>

            <div className="Contact_Me_text Contact_Me_text_two">
                <IoMdMail />&nbsp; niket3081@gmail.com
            </div>

            <div className="Contact_Me_text Contact_Me_text_three">
                <FaLinkedin />&nbsp; <a style={{ color: "black" }} href="https://www.linkedin.com/in/niket-chaudhari-a073671a7/">https://www.linkedin.com/in/niket-chaudhari-a073671a7/</a>
            </div>

            <div className="Contact_Me_text Contact_Me_text_four">
                <FaGithub />&nbsp; <a style={{ color: "black" }} href="https://github.com/NiketChaudhari">https://github.com/NiketChaudhari</a>
            </div>

            <div className="Contact_Me_text Contact_Me_text_five">
                <BsFacebook />&nbsp; <a style={{ color: "black" }} href="https://www.facebook.com/niket.chaudhari.9">https://www.facebook.com/niket.chaudhari.9</a>
            </div>

            <div className="Contact_Me_text Contact_Me_text_six">
                <AiFillInstagram />&nbsp; <a style={{ color: "black" }} href="https://www.instagram.com/mr.yash.32">https://www.instagram.com/mr.yash.32</a>
            </div>

        </div>
    )
}

export default Contact_Me;