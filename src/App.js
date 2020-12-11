import { BrowserRouter, Route } from 'react-router-dom'

import Home from './components/Home'
import Contact from './components/Contact'
import Projects from './components/Projects'
import ProjectDetails from './components/ProjectDetails'
import Navigation from './components/Navigation'

import './App.css'

function App() {
    const projectsList = [
        {
            id: 1,
            name: 'Matches and Patches',
            url: '/',
            description: 'Very painful'
        },
        {
            id: 2,
            name: 'Read This Next',
            url: '/',
            description: 'Absolutely awful'
        }
    ]
    
    
    return (
        <div className='App-header'>
            Portfolio
        </div>
    )
}

export default App