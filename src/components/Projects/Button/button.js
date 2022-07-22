import "./button.scss";
import { Github } from "styled-icons/boxicons-logos";

<<<<<<< HEAD
const Button = (props) => {
    return(
        <a href={props.link} target="_blank">
            <button className="github-button">
                <Github className="icon" size={30}/>
                <p>Github</p>
=======
const Button = () => {
    return(
        <a href="" target="_blank">
            <button className="github-button">
            <Github class="icon"/>
            Github
>>>>>>> c96e58041355322d4081fdaccf32ec4284a3ad4e
            </button>    
        </a>
    )
}

export default Button;