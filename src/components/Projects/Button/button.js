import "./button.scss";
import { Github } from "styled-icons/boxicons-logos";

const Button = (props) => {
    return(
        <a href={props.link} target="_blank">
            <button className="github-button">
                <Github className="icon" size={30}/>
                <p>Github</p>
            </button>    
        </a>
    )
}

export default Button;