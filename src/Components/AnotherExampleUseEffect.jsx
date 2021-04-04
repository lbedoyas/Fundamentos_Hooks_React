import React, {useState, useEffect} from 'react'
import { Header } from './Header';

const AnotherExampleUseEffect = () => {

    const [num, setNum] = useState(0)
    const [word, setWord] = useState('word1')

    const addNum = () => setNum(num +1)

    const AlternateWord = () => {
        const nextWord = word === 'word1' ? 'es Igual' : 'No es igual al estado inicial'
        setWord(nextWord)
    }

    // Se pueden pasar n cantidad de estados y cada vez que el esta cambie se ejecuta el useEfect
    useEffect(() => {
        alert('uso de Use Effect')
    },[num])

    return (
        <div>
            <Header />
            <button onClick={addNum}>
                Add ({num})
            </button>
            <button onClick={AlternateWord}>
                Alternate Word
            </button>
            <h2>
                {word}
            </h2>
            
        </div>
    )
}

export default AnotherExampleUseEffect
