import ProfileCard from "./ProfileCard";
//import ProfilePic from "../images/profilepic.png";
import UtaPic from "../images/uta.png";
import UtsystemPic from "../images/utsystem.png";
import EonePic from "../images/eOne.png";


function Experience(){
    return (
        <div style={{padding:"15px", height: "100vh"}}>
            <h1 style={{textAlign:"center"}}>Experiences </h1>
            <br></br>

            
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-3 d-flex justify-content-center">
                        <ProfileCard title="UTA" handle="@uta" text="Web Developer" image={UtaPic}/>
                    </div>
                    <div className="col-sm-3 d-flex justify-content-center">
                        <ProfileCard title="UT System" handle="@utsystem" text="Web Developer" image={UtsystemPic}/>
                    </div>
                    <div className="col-sm-3 d-flex justify-content-center">
                        <ProfileCard title="eOne Solutions" handle="@eOne" text="Software Developer" image={EonePic}/>
                    </div>
                </div>
            </div>

            <style>
            {`
            @media (max-width: 576px) {
                .col-sm-3 {
                    margin-bottom: 15px;
                }
            }
            `}
            </style>
            
        </div>
        
    );
}

export default Experience;