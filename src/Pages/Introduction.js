import { Suspense, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Preload, ScrollControls, Scroll, useScroll, Image } from '@react-three/drei'

import Me from "../Pics/Me.jpg"
import Front_End from "../Pics/Front_End.jpg"
import Back_End from "../Pics/Back_End.jpg"
import Data_Analyst from "../Pics/Data_Analyst.jpg"



const Scroll_Images = () => {
    const { width, height } = useThree((state) => state.viewport)
    const Scroll_Bar_Frame = useScroll()
    const group = useRef()
    useFrame(() => {
        group.current.children[0].material.zoom = 1 + Scroll_Bar_Frame.range(0, 1 / 5) / 3
        group.current.children[1].material.zoom = 1 + Scroll_Bar_Frame.range(0.9 / 3, 1 / 5) / 3
        group.current.children[2].material.zoom = 1 + Scroll_Bar_Frame.range(1.8 / 3, 1 / 5) / 3
        group.current.children[3].material.zoom = 1 + Scroll_Bar_Frame.range(2.7 / 3, 1 / 5) / 3
    })
    return (
        <group ref={group}>
            <Image position={[0, -1, 0]} scale={[height / 2, height / 2, 1]} url={Me} />
            <Image position={[-width / 3, -height * 1, 0]} scale={[height / 2, height / 2, 1]} url={Front_End} />
            <Image position={[width / 3, -height * 2, 0]} scale={[height / 2, height / 2, 1]} url={Back_End} />
            <Image position={[-width / 3, -height * 3, 0]} scale={[height / 2, height / 2, 1]} url={Data_Analyst} />
        </group>
    )
}

const Introduction = () => {

    return (
        <div className="Introduction">
            <Canvas gl={{ antialias: false }} dpr={[1, 1.5]}>
                <fog attach="fog" args={['#202020', 5, 20]} />
                <Suspense fallback={null}>
                    <ScrollControls damping={3} pages={4} useScroll={false} >
                        <Scroll>
                            <Scroll_Images />
                        </Scroll>
                        <Scroll html>

                            <h1 style={{
                                position: 'absolute',
                                top: '10vh',
                                width: '100vw',
                                justifyItems: "center",
                                textAlign: "center",
                                color: "white",
                                fontSize: "20px",
                                fontWeight: 500,
                                fontFamily: 'Lucida Sans',
                                backgroundColor: "none"
                            }}>
                                Hello, I am
                            </h1>


                            <h1 style={{
                                position: 'absolute',
                                top: '20vh',
                                width: '100vw',
                                justifyItems: "center",
                                textAlign: "center",
                                color: "white",
                                fontSize: "40px",
                                fontWeight: 900,
                                fontFamily: 'Lucida Sans Regular',
                                backgroundColor: "none"
                            }}>
                                Niket Chaudhari
                            </h1>


                            <h1 style={{
                                position: 'absolute',
                                top: '150vh',
                                left: '50vw',
                                width: '50vw',
                                justifyItems: "center",
                                textAlign: "left",
                                color: "white",
                                fontSize: "30px",
                                fontWeight: 900,
                                fontFamily: 'Lucida Sans Regular',
                                backgroundColor: "none"
                            }}>
                                Front-End Developer
                            </h1>


                            <h1 style={{
                                position: 'absolute',
                                top: '250vh',
                                width: '50vw',
                                justifyItems: "center",
                                textAlign: "right",
                                color: "white",
                                fontSize: "30px",
                                fontWeight: 900,
                                fontFamily: 'Lucida Sans Regular',
                                backgroundColor: "none"
                            }}>
                                Back-End Developer
                            </h1>


                            <h1 style={{
                                position: 'absolute',
                                top: '350vh',
                                left: '50vw',
                                width: '50vw',
                                justifyItems: "center",
                                textAlign: "left",
                                color: "white",
                                fontSize: "30px",
                                fontWeight: 900,
                                fontFamily: 'Lucida Sans Regular',
                                backgroundColor: "none"
                            }}>
                                Data-Analyst
                            </h1>

                        </Scroll>
                    </ScrollControls>
                    <Preload />
                </Suspense>
            </Canvas>
        </div>
    )
}


export default Introduction;