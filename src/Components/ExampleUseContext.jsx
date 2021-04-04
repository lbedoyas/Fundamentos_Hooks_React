import React, {useState, useEffect, useContext} from 'react'
import { Header } from './Header';

const MyContext = React.createContext()

const Nieto = () => {
    const { num, addNum } = useContext(MyContext)
    
    return (
      <div>
        <p>Nieto {num}</p>
        <button onClick={addNum}>
          Nieto Dispatcher
        </button>
      </div>
    )
  }

const Hijo = () => (
    <div>
      <p>Hijo</p>
      <Nieto />
    </div>
  )

const ExampleUseContext = () => {
    const [ num, setNum ] = useState(0)

    const addNum = () => setNum(num + 1)

  return (
    <MyContext.Provider value={{
      num,
      addNum
    }}>
      <div>
        <Header />
        <button onClick={addNum}>
          App ( {num} )
        </button>
        <Hijo />
      </div>
    </MyContext.Provider>
  )
    
}

export default ExampleUseContext
