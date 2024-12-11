import React from 'react'
import './hero.css'


//Assets
import hero_image from '../../assets/hero_image.png'
const observer = new IntersectionObserver(entries => {
    console.log(entries);
})
function Hero() {
    return (
        <>
            <div className='hero section-padding' id='home'>
                <div className='hero-content'>
                    <h1 className='gradient-text'>I'm Srinivas B</h1>
                    <div>
                        <h2>UI/UX Designer</h2>
                    </div>
                    <p>I’m a UI/UX Designer with around 6 years of experience crafting intuitive, user-friendly designs for websites and applications.
                        I specialize in creating clean, visually appealing interfaces that prioritize ease of use and seamless interaction. My focus is on delivering complete digital experiences that not only look great but also function flawlessly, ensuring a smooth and engaging user journey.</p>
                    <a href='#works' className='explore-btn'>Check out my Portfolio</a>

                </div>
            </div>

        </>
    )
}

export default Hero
