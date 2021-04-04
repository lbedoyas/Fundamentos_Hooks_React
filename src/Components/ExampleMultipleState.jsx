import React, {useState} from 'react'
import { Header } from './Header';

const ExampleMultipleState = () => {

    const [clicks, setclicks] = useState(0)
    const [title, setTitle] = useState('')

    const addClick = () => {
        setclicks(clicks + 1)
    }

    const handleInput = (e) => {
        console.log(e.target.value);
        const title = e.target.value
        setTitle(title)
    }

    return (
        <div>
            <Header/>
            <input type="text" onChange={handleInput} value={title} />
            <button onClick={addClick}>
                click {clicks}
            </button>
            <h3>{title}</h3>
            
        </div>
    )
}

export default ExampleMultipleState
