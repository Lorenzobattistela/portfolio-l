import "./resume.scss";
import { Download } from "@styled-icons/bootstrap";
import ResumePdf from "../../assets/resume.pdf";
import ResumeImg from "../../assets/resume_img.png";

const Resume = () => {
    return(
        <div className="resume_div">
            <div className="download_button">
                <a href={ResumePdf} download={ResumePdf}>
                    <button>
                        <Download className="icon"/>
                        Download CV
                    </button>
                </a>
            </div>
            
            <div className="resume_img">
                <img src={ResumeImg}/>
            </div>
        </div>
    )
}

export default Resume;