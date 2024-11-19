import './App.css';
import React from 'react';
import { Footer, Works, Hero, Resume, SocialMedias } from './containers'
import { Navbar } from './components'

function App() {
    return (
        <div className='App'>
            <div className='gradient-bg'>
                <Navbar />
                <Hero />
            </div>
            <Resume />
            <Works />
            <Footer />
        </div>
    )
}

export default App;
