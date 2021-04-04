import React, {useState} from 'react'
import { Header } from './Header';

const ExampleUseStateBooleans = () => {
    const [isActive, setActive] = useState(false);
    const toggle = () => {
        setActive(!isActive)
    }
    return (
        <div>
            {isActive ? <Header /> : null} 
            <button onClick={toggle}>
                {isActive ? 'Desactivar' : 'Activar'}
            </button>
        </div>
    )
}

export default ExampleUseStateBooleans
