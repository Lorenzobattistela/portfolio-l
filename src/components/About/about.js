import './about.scss';
import dev from '../../assets/dev.svg';
import { Python, ReactLogo, Javascript, Sass, Git, Nodejs, Css3, } from 'styled-icons/boxicons-logos';
import { Solidity } from 'styled-icons/simple-icons';

const About = () => {
    return(
        <div className='about_container'>
            <h1>Know who <span>I am</span></h1>
            <div className='about_content'>
                <div className='about_text'>
                    <p>Hello, I am <span>Lorenzo Battistela</span> from <span>Erechim, Brazil.</span> I am a junior aiming to pursue Computer Science at Inteli - SP. </p>
                    <p>Apart from coding and studying, there are some other activities that I enjoy doing:</p>

                    <ul>
                        <li>Playing games</li>
                        <li>Traveling</li>
                        <li>Reading</li>
                        <li>Tech blogging</li>
                        <li>Workout</li>
                    </ul>
                </div>
                <div className='about_img'>
                    <img src={dev}/>
                </div>
            </div>

            <div className='skillset_content'>
                <h1>Professional <span>Skillset</span></h1>
                <div className='skills_list'>
                    <div className='skills_item'>
                        <Python className='icon'/>
                        <h2>Python</h2>
                    </div>

                    <div className='skills_item'>
                        <ReactLogo className='icon' />
                        <h2>React</h2>
                    </div>

                    <div className='skills_item'>
                        <Solidity className='icon' />
                        <h2>Solidity</h2>
                    </div>

                    <div className='skills_item'>
                        <Javascript className='icon' />
                        <h2>Javascript</h2>
                    </div>

                    <div className='skills_item'>
                        <Sass className='icon' />
                        <h2>Sass</h2>
                    </div>

                    <div className='skills_item'>
                        <Git className='icon' />
                        <h2>Git</h2>
                    </div>

                    <div className='skills_item'>
                        <Nodejs className='icon' />
                        <h2>Nodejs</h2>
                    </div>

                    <div className='skills_item'>
                        <Css3 className='icon' />
                        <h2>Css3</h2>
                    </div>

                    
                </div>
            </div>
        </div>
    )
}

export default About;
