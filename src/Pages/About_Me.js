import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Physics, usePlane, useBox } from '@react-three/cannon'
import { Html, OrbitControls } from '@react-three/drei'
import { Modal, Rate } from 'antd';
import 'antd/dist/antd.css'

import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { GoDatabase } from "react-icons/go";
import { SiPowerbi } from "react-icons/si";
import { FaRProject } from "react-icons/fa";


const Plane = (props) => {
    const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }))
    return (
        <mesh receiveShadow ref={ref}>
            <planeGeometry args={[1000, 1000]} />
            <meshStandardMaterial color="#202020" />
        </mesh>
    )
}

const Profile_Cube = ({ ...props }) => {
    const [ref] = useBox(() => ({ mass: 1, ...props }))
    const [hovered, setHover] = useState(false)
    const [visible, setVisible] = useState(false);

    const onClick_on = () => {
        setVisible(true)
    }

    return (
        <mesh
            {...props}
            ref={ref}
            scale={[1, 1, 1]}
            onClick={onClick_on}
            onPointerOver={(e) => setHover(true)}
            onPointerOut={(e) => setHover(false)}>

            <boxGeometry />
            <meshStandardMaterial color={'green'} />

            <Html center>
                <div className='hover_me' hidden={!hovered}>
                    Profile
                </div>
                <Modal
                    title="Profile"
                    centered
                    visible={visible}
                    onCancel={() => setVisible(false)}
                    width={1000}
                    footer={[]}
                >
                    <>
                        <div style={{ display: "flex", width: "100%", flexDirection: "column", backgroundColor: "none", alignContent: "center", justifyContent: "center", marginTop: "10px", marginBottom: "15px" }}>
                            A motivated individual with good knowledge of Programming languages, Development tools, Machine Learning and Artificial Intelligence Techniques, seeking a position in a growth-oriented company where I can use my skills to the advantage of the company while having the scope to develop my own skills.
                        </div>
                    </>
                </Modal>
            </Html>
        </mesh>
    )
}

const Education_Cube = ({ ...props }) => {
    const [ref] = useBox(() => ({ mass: 1, ...props }))
    const [hovered, setHover] = useState(false)
    const [visible, setVisible] = useState(false);

    const onClick_on = () => {
        setVisible(true)
    }

    return (
        <mesh
            {...props}
            ref={ref}
            scale={[1, 1, 1]}
            onClick={onClick_on}
            onPointerOver={(e) => setHover(true)}
            onPointerOut={(e) => setHover(false)}>

            <boxGeometry />
            <meshStandardMaterial color={'blue'} />

            <Html center>
                <div className='hover_me' hidden={!hovered}>
                    Education
                </div>
                <Modal
                    title="Education"
                    centered
                    visible={visible}
                    onCancel={() => setVisible(false)}
                    width={1000}
                    footer={[]}
                >
                    <>
                        <div style={{ display: "flex", width: "100%", flexDirection: "row", height: "30px", backgroundColor: "none", alignContent: "center", justifyContent: "center", marginTop: "10px", marginBottom: "10px" }}>
                            <div style={{ display: "flex", width: "60%", fontSize: 20, alignContent: "center", justifyContent: "flex-start" }}>BACHELOR OF ENGINEERING</div>
                            <div style={{ display: "flex", width: "40%", fontSize: 15, alignItems: "center", justifyContent: "flex-end" }}>Aug 2013 – July 2017</div>
                        </div>

                        <div style={{ display: "flex", width: "100%", flexDirection: "row", height: "30px", backgroundColor: "none", alignContent: "center", justifyContent: "center", marginTop: "10px", marginBottom: "10px" }}>
                            <div style={{ display: "flex", width: "60%", fontSize: 20, alignContent: "center", justifyContent: "flex-start" }}>HSC</div>
                            <div style={{ display: "flex", width: "40%", fontSize: 15, alignItems: "center", justifyContent: "flex-end" }}>Aug 2011 – June 2013</div>
                        </div>
                    </>
                </Modal>
            </Html>
        </mesh>
    )
}

const Work_History_Cube = ({ ...props }) => {
    const [ref] = useBox(() => ({ mass: 1, ...props }))
    const [hovered, setHover] = useState(false)
    const [visible, setVisible] = useState(false);

    const onClick_on = () => {
        setVisible(true)
    }

    return (
        <mesh
            {...props}
            ref={ref}
            scale={[1, 1, 1]}
            onClick={onClick_on}
            onPointerOver={(e) => setHover(true)}
            onPointerOut={(e) => setHover(false)}>

            <boxGeometry />
            <meshStandardMaterial color={'red'} />

            <Html center>
                <div className='hover_me' hidden={!hovered}>
                    Work History
                </div>
                <Modal
                    title="Work History"
                    centered
                    visible={visible}
                    onCancel={() => setVisible(false)}
                    width={1000}
                    footer={[]}
                >
                    <>
                        <div style={{ display: "flex", width: "100%", flexDirection: "column", backgroundColor: "none", alignContent: "center", justifyContent: "center", marginTop: "10px", marginBottom: "15px" }}>
                            <div style={{ display: "flex", width: "100%", flexDirection: "row", height: "25px", backgroundColor: "none", alignContent: "center", justifyContent: "center" }}>
                                <div style={{ display: "flex", width: "60%", fontSize: 20, alignContent: "center", justifyContent: "flex-start" }}>SOFTWARE DEVELOPER</div>
                                <div style={{ display: "flex", width: "40%", fontSize: 15, alignItems: "center", justifyContent: "flex-end" }}>March 2021 - till date</div>
                            </div>
                            <div style={{ display: "flex", width: "100%", flexDirection: "row", height: "15px", backgroundColor: "none", alignContent: "center", justifyContent: "flex-start" }}>
                                Chrisel Technolab Private Limited, Vasai (Mumbai)
                            </div>
                        </div>


                        <div style={{ display: "flex", width: "100%", flexDirection: "column", backgroundColor: "none", alignContent: "center", justifyContent: "center", marginTop: "10px", marginBottom: "15px" }}>
                            <div style={{ display: "flex", width: "100%", flexDirection: "row", height: "25px", backgroundColor: "none", alignContent: "center", justifyContent: "center" }}>
                                <div style={{ display: "flex", width: "60%", fontSize: 20, alignContent: "center", justifyContent: "flex-start" }}>QUALITY ENGINEER</div>
                                <div style={{ display: "flex", width: "40%", fontSize: 15, alignItems: "center", justifyContent: "flex-end" }}>May 2018 - March 2021</div>
                            </div>
                            <div style={{ display: "flex", width: "100%", flexDirection: "row", height: "15px", backgroundColor: "none", alignContent: "center", justifyContent: "flex-start" }}>
                                Ansons Electro-Mechanical Works, Palghar (Mumbai)
                            </div>
                        </div>
                    </>
                </Modal>
            </Html>
        </mesh>
    )
}

const Technical_Skills_Cube = ({ ...props }) => {
    const [ref] = useBox(() => ({ mass: 1, ...props }))
    const [hovered, setHover] = useState(false)
    const [visible, setVisible] = useState(false);

    const onClick_on = () => {
        setVisible(true)
    }

    return (
        <mesh
            {...props}
            ref={ref}
            scale={[1, 1, 1]}
            onClick={onClick_on}
            onPointerOver={(e) => setHover(true)}
            onPointerOut={(e) => setHover(false)}>

            <boxGeometry />
            <meshStandardMaterial color={'white'} />

            <Html center>
                <div className='hover_me' hidden={!hovered}>
                    Technical Skills
                </div>
                <Modal
                    title="Technical Skills"
                    centered
                    visible={visible}
                    onCancel={() => setVisible(false)}
                    width={1000}
                    footer={[]}
                >
                    <>
                        <div style={{ display: "flex", width: "100%", flexDirection: "row", height: "30px", backgroundColor: "none", alignContent: "center", justifyContent: "center", marginTop: "10px", marginBottom: "10px" }}>
                            <div style={{ display: "inline-block", width: "50%", fontSize: 20, alignContent: "center", justifyContent: "flex-start" }}><FaReact /> &nbsp; React JS</div>
                            <div style={{ display: "flex", width: "50%", fontSize: 15, alignItems: "center", justifyContent: "flex-end" }}><Rate allowHalf disabled count={5} value={4} /></div>
                        </div>

                        <div style={{ display: "flex", width: "100%", flexDirection: "row", height: "30px", backgroundColor: "none", alignContent: "center", justifyContent: "center", marginTop: "10px", marginBottom: "10px" }}>
                            <div style={{ display: "inline-block", width: "50%", fontSize: 20, alignContent: "center", justifyContent: "flex-start" }}><FaReact /> &nbsp; React Native</div>
                            <div style={{ display: "flex", width: "50%", fontSize: 15, alignItems: "center", justifyContent: "flex-end" }}><Rate allowHalf disabled count={5} value={3} /></div>
                        </div>

                        <div style={{ display: "flex", width: "100%", flexDirection: "row", height: "30px", backgroundColor: "none", alignContent: "center", justifyContent: "center", marginTop: "10px", marginBottom: "10px" }}>
                            <div style={{ display: "inline-block", width: "50%", fontSize: 20, alignContent: "center", justifyContent: "flex-start" }}><FaNodeJs /> &nbsp; Node JS</div>
                            <div style={{ display: "flex", width: "50%", fontSize: 15, alignItems: "center", justifyContent: "flex-end" }}><Rate allowHalf disabled count={5} value={3} /></div>
                        </div>

                        <div style={{ display: "flex", width: "100%", flexDirection: "row", height: "30px", backgroundColor: "none", alignContent: "center", justifyContent: "center", marginTop: "10px", marginBottom: "10px" }}>
                            <div style={{ display: "inline-block", width: "50%", fontSize: 20, alignContent: "center", justifyContent: "flex-start" }}><FaPython /> &nbsp; Python</div>
                            <div style={{ display: "flex", width: "50%", fontSize: 15, alignItems: "center", justifyContent: "flex-end" }}><Rate allowHalf disabled count={5} value={4} /></div>
                        </div>

                        <div style={{ display: "flex", width: "100%", flexDirection: "row", height: "30px", backgroundColor: "none", alignContent: "center", justifyContent: "center", marginTop: "10px", marginBottom: "10px" }}>
                            <div style={{ display: "inline-block", width: "50%", fontSize: 20, alignContent: "center", justifyContent: "flex-start" }}><GoDatabase /> &nbsp; SQL</div>
                            <div style={{ display: "flex", width: "50%", fontSize: 15, alignItems: "center", justifyContent: "flex-end" }}><Rate allowHalf disabled count={5} value={4.5} /></div>
                        </div>

                        <div style={{ display: "flex", width: "100%", flexDirection: "row", height: "30px", backgroundColor: "none", alignContent: "center", justifyContent: "center", marginTop: "10px", marginBottom: "10px" }}>
                            <div style={{ display: "inline-block", width: "50%", fontSize: 20, alignContent: "center", justifyContent: "flex-start" }}><FaRProject /> &nbsp; R</div>
                            <div style={{ display: "flex", width: "50%", fontSize: 15, alignItems: "center", justifyContent: "flex-end" }}><Rate allowHalf disabled count={5} value={3.5} /></div>
                        </div>

                        <div style={{ display: "flex", width: "100%", flexDirection: "row", height: "30px", backgroundColor: "none", alignContent: "center", justifyContent: "center", marginTop: "10px", marginBottom: "10px" }}>
                            <div style={{ display: "inline-block", width: "50%", fontSize: 20, alignContent: "center", justifyContent: "flex-start" }}><SiPowerbi /> &nbsp; Power BI</div>
                            <div style={{ display: "flex", width: "50%", fontSize: 15, alignItems: "center", justifyContent: "flex-end" }}><Rate allowHalf disabled count={5} value={3.5} /></div>
                        </div>
                    </>
                </Modal>
            </Html>
        </mesh>
    )
}



const About_Me = () => {
    return (
        <div className="About_Me">
            <Canvas dpr={[1, 2]} shadows camera={{ position: [-5, 5, 5], fov: 50 }}>
                <ambientLight intensity={0.8} />
                <spotLight angle={0.25} penumbra={0.5} position={[10, 10, 5]} castShadow />
                <Physics>
                    <Plane />
                    <Profile_Cube position={[0, 5, 0]} />
                    <Education_Cube position={[0.45, 7, -0.25]} />
                    <Work_History_Cube position={[-0.45, 9, 0.25]} />
                    <Technical_Skills_Cube position={[0.15, 11, 0.35]} />
                </Physics>
                <OrbitControls autoRotate enableRotate={false} maxPolarAngle={(0, 0, 90)} maxDistance={50} minDistance={15} />
            </Canvas>
            <div className='About_Me_text'>
                About Me
            </div>
        </div>
    )
}


export default About_Me;