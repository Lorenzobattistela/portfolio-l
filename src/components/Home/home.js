import "./home.scss";
import React, { useState, useEffect } from "react"
import Person from "../../assets/person.png"
import Myself from "../../assets/me.png"
import { Github, Linkedin, Instagram } from "styled-icons/boxicons-logos";
import { Email } from "styled-icons/entypo";

const Home = () => {
    const [text, setText] = useState("")
    const texts = ["JavaScript Developer.", "Open Source Contributor.", "Python Developer.", "Blockchain."]
    const [fullText, setFullText] = useState(texts[0])
    const [index, setIndex] = useState(0)
    const [textIndex, setTextIndex] = useState(1)
    
    useEffect(() => {
        if (index < fullText.length) {
          setTimeout(() => {
            setText(text + fullText[index])
            setIndex(index + 1)
          }, 100)
        }
        if(index === fullText.length){
            setTimeout(()=> {
                setIndex(0);
                setText("")
                setFullText(texts[textIndex]);
                
                if(textIndex < texts.length - 1){
                    setTextIndex(textIndex + 1)
                }
                else {
                    setTextIndex(0);
                }
            }, 1000)
        }
      }, [index])

    return(
        <div className="container">
            <div className="home_container">
                <div className="text_div">
                    <h1>Hi there! </h1>
                    <h1>I am <span>Lorenzo Battistela</span></h1>
                    <h2>{text}<span className="input-cursor"></span></h2>
                </div>
                <div className="img_div">
                    <img className="person_img" src={Person}/>
                </div>
            </div>
            <div className="introduction">
                <div className="text_container">
                    <h1>LET ME <span>INTRODUCE</span> MYSELF</h1>
                    <p>I am into programming since 2019 when I accidentally downloaded a programming app and started to learn HTML and CSS.</p>

                    <p>I have coding habilities in languages like <span>C, JavaScript, Python and Solidity.</span></p>

                    <p>I have a passion for open source and I am always looking for new technologies to learn.</p>

                    <p>My field of interests is building new <span>products and technologies</span> that contribute to tech evolution. I am also interested in areas related to <span>Machine Learning</span> and <span>Blockchain development.</span></p>

                    <p>I am a <span>self-taught</span> and <span>self-driven</span> person. I am always looking for new challenges and new opportunities.</p>
                </div>
                <div className="me_container">
                    <img src={Myself}/>
                </div>
            </div>

            <div className="reach_container">
                <div className="text">
                    <h1>REACH ME AT</h1>
                    <p>Feel free to <span>connect</span> with me</p>
                </div>
                <div className="social_container">
                    <a target="_blank" href="https://github.com/Lorenzobattistela"><Github className="icons"/></a>
                    <a target="_blank" href="https://www.linkedin.com/in/lorenzo-battistela/" ><Linkedin className="icons" /></a>
                    <a target="_blank" href="https://www.instagram.com/lorenzo_wb/" ><Instagram className="icons" /></a>
                    <a href="mailto:lorenzowbdev@gmail.com?body=Send your message!"><Email className="icons" /></a>
                </div>
            </div>
        </div>
    )
}

export default Home;