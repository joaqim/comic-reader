import React, { useContext, useState } from 'react'
import ScrollLock, { TouchScrollable } from 'react-scrolllock'

import ComicsDropdown from './ComicsDropdown'

import './App.css'

import database from './comics_test_hq_6.json'
const comic_name = "One Piece - Digital Colored Comics"
const comic = database[comic_name]

const TestContext = React.createContext()
function Display() {
    const value = useContext(TestContext)
    return <p>Test, {value}</p>
}

function App() {
    let [comic_nr, setComicNr] = useState(0)

    return (
            <div className="App">
            <header className="App-header">

            <TestContext.Provider value={'Value'}>
            <Display/>
            </TestContext.Provider>

            </header>
            </div>
    );
}

export default App;
