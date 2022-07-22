import "./projects.scss";
import Button from "./Button/button.js"
import finance from "../../assets/finance.png";

const Projects = () => {
    return(
        <div className="div_projects">
            <div className="projects_text">
                <h1 className="projects_title"><span>Projects</span> I have done recently</h1>
                <p>Here are some projects that I worked both professionally and personal projects.</p>
            </div>

            <div className="projects_container">
                <div className="card">
                    <h1>Project Melk</h1>
                    <img/>
                    <p>The Melk Project is my current work. It consists on a decentralized token (deployed at Polygon) that relates to a brazilian Learn-to-Earn system. The user read and learns with our missions at <a target="_blank" href="https://melk.gitbook.io/aprenda-e-ganhe/">gitbook</a> and sends proof of learning at our discord channel. Than the discord bot processes the proof, validate it and sends the reward for the user. More details on github.</p>
                    <Button link="https://github.com/w3b3d3v/melk-bot"/>
                </div>

                <div className="card">
                    <h1>Finance - Financial Manager</h1>
                    <img src={finance}/> 
                    <p>Financial manager where it is possible to control your personal finance by adding your investments and track your profit. For fixed investments, you can project your profit for the next month. It generates a report with real time information when you run it. Terminal based application that generates HTML page.</p>
                    <Button link="https://github.com/Lorenzobattistela/finance"/>
                </div>
                <div className="card">
                    <h1>Python Projects</h1>
                    <img/>
                    <p>Here are some projects that I have done with Python for practice. This repo includes a currency converter, email slicer, music player, password generator, snake game and rock paper scissors game. Those projects were done to practice fundamentals of python coding language.</p>
                    <Button link="https://github.com/Lorenzobattistela/python-projects"/>
                </div>
            </div>

            <div className="projects_container">
                <div className="card">
                    <h1>This Portfolio</h1>
                    <img/>
                    <p>This Portfolio was entirely developed by me. It consists on a React App combined with Sass for styling. The design is inspired in <a>this portfolio</a>. Project developed to share my qualifications and projects for possible recruiters.</p>
                    <Button link="https://github.com/Lorenzobattistela/portfolio-l"/>
                </div>
            </div>
        </div>
    )
}

export default Projects;