import React, {useState, useEffect} from 'react'
import { Header } from './Header';

const ExampleUseEfect = () => {
    const [clicks, setclicks] = useState(0)
    const [title, setTitle] = useState('')

    useEffect(()=> {
        // componentDidMount
        // componentDid Update
        console.log('Dentro de useEfect', clicks)
        console.log('%c-------------------', 'color: orange')
        return (()=> {
             // componentWillUnmount
            console.log('return de useEfect', clicks)
        })
    })
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
export default ExampleUseEfect;
