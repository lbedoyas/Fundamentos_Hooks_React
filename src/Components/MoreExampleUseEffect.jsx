import React, {useState, useEffect} from 'react'
import { Header } from './Header';

const MoreExampleUseEffect = () => {

    const [mouseX, setMouseX] = useState(0)
    const [mouseY, setMouseY] = useState(0)

    const handleMove = (e) => {
        setMouseX(e.clientX)
        setMouseY(e.clientY)

    }

    useEffect(() => {
        window.addEventListener('mousemove', handleMove)
        return () => {
            window.removeEventListener('mousemove', handleMove)
        }
    })

    return (
        <div>
            <Header />
            <h1>
                x: {mouseX} y: {mouseY}
            </h1>
            
        </div>
    )
}

export default MoreExampleUseEffect
