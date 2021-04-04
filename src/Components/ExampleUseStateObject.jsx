import React, {useState} from 'react'
import { Header } from './Header';

const ExampleUseStateObject = () => {

    const [state, setState] = useState({
        clicks: 0,
        title: ''
    })

    const addClick = () => {
        setState({
            ...state,
            clicks: state.clicks + 1 
        })
    }

    const handleInput = (e) => {
        console.log(e.target.value);
        const title = e.target.value
        setState({
            ...state,
            title
        })
    }

    return (
        <div>
            <Header/>
            <input type="text" onChange={handleInput} value={state.value} />
            <button onClick={addClick}>
                click {state.clicks}
            </button>
            <h3>{state.title}</h3>
            
        </div>
    )
}

export default ExampleUseStateObject
