import "./home.scss";
import React, { useState, useEffect } from "react"
import Laptop from "../../assets/person.png"

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
        if(index == fullText.length){
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
        <div className="home_container">
            <div className="text_div">
                <h1>Hi there! </h1>
                <h1>I am <span>Lorenzo Battistela</span></h1>
                <h2>{text}<span className="input-cursor"></span></h2>
            </div>
            <div className="img_div">
                <img className="spin_laptop" src={Laptop}/>
            </div>
        </div>
    )
}

export default Home;