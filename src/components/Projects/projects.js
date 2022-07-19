import "./projects.scss";
import Button from "./Button/button.js"

const Projects = () => {
    return(
        <div className="div_projects">
            <div className="projects_text">
                <h1 className="projects_title"><span>Projects</span> I have done recently</h1>
                <p>Here are some projects that I worked both professionally and personal projects.</p>
            </div>

            <div className="projects_container">
                <div className="card">
                    <h1>card</h1>
                    <img src=""/> 
                    <Button/>
                </div>
                <div className="card"><h1>card</h1></div>
                <div className="card"><h1>card</h1></div>
            </div>

            <div className="projects_container">
                <div className="card"><h1>card</h1></div>
                <div className="card"><h1>card</h1></div>
                <div className="card"><h1>card</h1></div>
            </div>
        </div>
    )
}

export default Projects;