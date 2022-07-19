import "./button.scss";
import { Github } from "styled-icons/boxicons-logos";

const Button = () => {
    return(
        <a href="" target="_blank">
            <button className="github-button">
            <Github class="icon"/>
            Github
            </button>    
        </a>
    )
}

export default Button;