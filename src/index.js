import ReactDOM from 'react-dom'
import React from 'react'
import Quiz from './Components/Quiz'

function App() {
    return (
        <div>
           <Quiz></Quiz>
        </div>
    )
}

export default App
const rootElement = document.getElementById('root')
ReactDOM.render(<App></App>, rootElement)