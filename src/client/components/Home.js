import React from 'react'

const Home = () => {
    return (
        <div>
            <div onClick>I'm the Best home component</div>
            <button onClick={() => console.log('Button is clicked!')} > Click me </button>
        </div>
    
    )
}

export default Home