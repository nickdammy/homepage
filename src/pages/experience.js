import ProfileCard from "./ProfileCard";
import ProfilePic from "../images/profilepic.png";


function Experience(){
    return (
        <div>
            <h1 style={{textAlign:"center"}}>Experiences </h1>
            <br></br>

            
            <div className="container-fluid">
            <div className="row">
                <div className="col-sm-3 d-flex justify-content-center">
                        
                    <ProfileCard title="UTA" handle="@uta" text="Web Developer" image={ProfilePic}/>
                </div>
                <div className="col-sm-3 d-flex justify-content-center">
                    <ProfileCard title="UT System" handle="@utsystem" text="Web Developer" image={ProfilePic}/>
                </div>
                <div className="col-sm-3 d-flex justify-content-center">
                    <ProfileCard title="eOne Solutions" handle="@eOne" text="Software Developer" image={ProfilePic}/>
                </div>
            </div>
            </div>
            
        </div>
        
    );
}

export default Experience;