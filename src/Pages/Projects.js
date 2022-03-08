import React, { Suspense, useState } from 'react'
import "../Pages_Style.css"
import { FaGithub } from "react-icons/fa";
import * as THREE from 'three'
import { Canvas, useLoader } from '@react-three/fiber'
import { Html, Preload, OrbitControls } from '@react-three/drei'
import { Modal, Button } from 'antd';
import 'antd/dist/antd.css'

import { TextureLoader } from 'three/src/loaders/TextureLoader'
import Project_360 from "../Pics/Project_360.jpg"



const gitHub_Project_List = [
    {
        position: [10, 0, -15],
        url: Project_360,
        link: 1,
        project_name: "CONNECT",
        project_description: "A simple file explorer with basic functionalities and is used to exchange data in a local area network environment.",
        project_path: "https://github.com/NiketChaudhari/CONNECT"
    },
    {
        position: [-10, 0, 15],
        url: Project_360,
        link: 2,
        project_name: "Spam SMS Classifier",
        project_description: "Spam Classifier is used to detect unsolicited and unwanted email or sms.",
        project_path: "https://github.com/NiketChaudhari/Spam-SMS-Classifier"
    },
    {
        position: [10, 10, -15],
        url: Project_360,
        link: 3,
        project_name: "Text Translator",
        project_description: "Using this app, you can translate text between any of the supported languages.",
        project_path: "https://github.com/NiketChaudhari/text-translator"
    },
    {
        position: [-20, -5, 45],
        url: Project_360,
        link: 4,
        project_name: "Bengaluru House Price Prediction",
        project_description: "Bengaluru House Price Prediction.",
        project_path: "https://github.com/NiketChaudhari/Bengaluru_House_Price_Prediction"
    },
    {
        position: [10, 0, 5],
        url: Project_360,
        link: 5,
        project_name: "Tic Tac Toe Game",
        project_description: "Tic-Tac-Toe is a game in which two players alternately put Xs and Os in compartments of a figure formed by two vertical lines crossing two horizontal lines and each tries to get a row of three Xs or three Os before the opponent does.",
        project_path: "https://github.com/NiketChaudhari/tic-tac-toe-game"
    },
    {
        position: [10, 0, -15],
        url: Project_360,
        link: 6,
        project_name: "React Random Quote Generator",
        project_description: "It's a simple little web app that shows you a nice quote from famous people every time you press the button.",
        project_path: "https://github.com/NiketChaudhari/react-random-quote-generator"
    },
    {
        position: [-10, 0, 15],
        url: Project_360,
        link: 7,
        project_name: "React To Do App",
        project_description: "It’s a list of tasks you need to complete, or things that you want to do.",
        project_path: "https://github.com/NiketChaudhari/react-to-do-app"
    },
    {
        position: [10, 10, -15],
        url: Project_360,
        link: 8,
        project_name: "Heart Disease Prediction",
        project_description: "Heart-Disease-Prediction.",
        project_path: "https://github.com/NiketChaudhari/Heart-Disease-Prediction"
    },
    {
        position: [-20, -5, 45],
        url: Project_360,
        link: 9,
        project_name: "DSP Project",
        project_description: "This project gives an overview of the attrition analysis for a consulting firm and allows you to understand and identify factors that help in retaining employees.",
        project_path: "https://github.com/NiketChaudhari/DSP-Project"
    }
]



const Dome = ({ project_name, project_description, project_path, position, texture, onClick, onClose }) => {

    const [visible, setVisible] = useState(false);

    const color_Map_4 = useLoader(TextureLoader, Project_360)

    const onClick_Next = () => {
        setVisible(false)
        onClick()
    }

    const onClick_Previous = () => {
        setVisible(false)
        onClose()
    }

    return (
        <group>
            <mesh>
                <sphereBufferGeometry args={[500, 60, 40]} />
                <meshBasicMaterial map={color_Map_4} side={THREE.BackSide} />
            </mesh>


            <mesh position={position}>
                <Html center>

                    <Button ghost type="dashed" onClick={() => setVisible(true)} hidden={visible} >
                        {project_name}
                    </Button>

                    <Modal
                        title={project_name}
                        centered
                        visible={visible}
                        onCancel={() => setVisible(false)}
                        width={1000}
                        footer={[
                            <Button key="Previous" type="primary" onClick={onClick_Previous}>
                                Previous
                            </Button>,
                            <Button key="Next" type="primary" onClick={onClick_Next}>
                                Next
                            </Button>
                        ]}
                    >
                        <p><strong>{project_description}</strong></p>
                        <strong><a href={project_path}><FaGithub />&nbsp;{project_path}</a></strong>
                    </Modal>
                </Html>
            </mesh>
        </group>
    )
}



const Portals = () => {
    const [which, set] = useState(0)
    const { link, ...props } = gitHub_Project_List[which]

    const setLinkClick = () => {
        try {
            if (link < 9) {
                set(link)
            }
            else {
                set(0)
            }
        }
        catch (err) {
            set(0)
        }
    }

    const setLinkClose = () => {
        try {
            if (link >= 2) {
                set(link - 2)
            }
            else {
                set(0)
            }
        }
        catch (err) {
            set(0)
        }
    }


    const maps = useLoader(THREE.TextureLoader, gitHub_Project_List.map((entry) => entry.url))
    return <Dome onClick={setLinkClick}
        onClose={setLinkClose}
        {...props} texture={maps[which]} />
}


const Projects = () => {

    return (
        <div className="Projects">
            <Canvas frameloop="demand" camera={{ position: [0, 0, 0.1] }}>
                <OrbitControls enableZoom={false} enablePan={false} enableDamping dampingFactor={0.2} autoRotate={false} rotateSpeed={-0.5} />
                <Suspense fallback={null}>
                    <Preload all />
                    <Portals />
                </Suspense>
            </Canvas>

            <div className='Projects_text'>
                Projects
            </div>
        </div>
    )
}

export default Projects;





// #######################################

