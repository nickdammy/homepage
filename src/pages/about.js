import ProfilePic from "../images/profilepic.png";



function About() {
	return (
		<div style={{padding:"15px", minHeight: "100vh"}}>
		<h5 style={{ padding:"50px" }}>
			<div style={{display: 'flex', flexDirection: 'column-reverse'}}>
				<div style={{flex: '1'}}>
					<p style={{ fontSize: '20px', margin:"20px"}}>
					My name is Oluwadamilola Ajayi. I have a Master's degree in Software Engineering from the University of Texas at Arlington and a Bachelor's degree in Computer Science from Minnesota State University Moorhead.
						I have over 5 years of experience in web and software development.
						I am a full stack developer with experience in Java, Python, C#, and JavaScript. I have worked on various projects that include web development, mobile development, and software development.
						I am passionate about learning new technologies, and I am always looking for opportunities to work on new projects. Currently, I am seeking a full-time position in software development.
            		</p>
					
				</div>
				<div style={{flex: '0 0 auto', marginRight: '10px',textAlign:'center'}}>
					<img src={ProfilePic} alt="Profile" style={{width: '200px', height: '200px', borderRadius: '50%'}} />
				</div>
			</div>
		</h5>
		<h5 style={{color: "blue"}}> I am skilled in the following technologies: </h5>
			<div className="d-flex flex-wrap" style={{padding:"10px"}}>
				<div className="p-2" style={{ border: "1px solid blue", borderRadius: "5px", margin:"5px", fontWeight: "bold" }}>Java</div>
				<div className="p-2" style={{ border: "1px solid black", borderRadius: "5px", margin:"5px", fontWeight: "bold" }}>Python</div>
				<div className="p-2" style={{ border: "1px solid red", borderRadius: "5px", margin:"5px", fontWeight: "bold" }}>C#</div>
				<div className="p-2" style={{ border: "1px solid green", borderRadius: "5px", margin:"5px", fontWeight: "bold" }}>JavaScript</div>
				<div className="p-2" style={{ border: "1px solid blue", borderRadius: "5px", margin:"5px", fontWeight: "bold" }}>React</div>
				<div className="p-2" style={{ border: "1px solid black", borderRadius: "5px", margin:"5px", fontWeight: "bold" }}>Angular</div>
				<div className="p-2" style={{ border: "1px solid red", borderRadius: "5px", margin:"5px", fontWeight: "bold" }}>Node.js</div>
				<div className="p-2" style={{ border: "1px solid green", borderRadius: "5px", margin:"5px", fontWeight: "bold" }}>Express</div>
				<div className="p-2" style={{ border: "1px solid blue", borderRadius: "5px", margin:"5px", fontWeight: "bold" }}>SQL</div>
				<div className="p-2" style={{ border: "1px solid black", borderRadius: "5px", margin:"5px", fontWeight: "bold" }}>MongoDB</div>
				<div className="p-2" style={{ border: "1px solid red", borderRadius: "5px", margin:"5px", fontWeight: "bold" }}>HTML</div>
				<div className="p-2" style={{ border: "1px solid green", borderRadius: "5px", margin:"5px", fontWeight: "bold" }}>CSS</div>
				<div className="p-2" style={{ border: "1px solid blue", borderRadius: "5px", margin:"5px", fontWeight: "bold" }}>Bootstrap</div>
				<div className="p-2" style={{ border: "1px solid black", borderRadius: "5px", margin:"5px", fontWeight: "bold" }}>jQuery</div>
				<div className="p-2" style={{ border: "1px solid red", borderRadius: "5px", margin:"5px", fontWeight: "bold" }}>Git</div>
				<div className="p-2" style={{ border: "1px solid green", borderRadius: "5px", margin:"5px", fontWeight: "bold" }}>Docker</div>
				<div className="p-2" style={{ border: "1px solid blue", borderRadius: "5px", margin:"5px", fontWeight: "bold" }}>Azure</div>
				<div className="p-2" style={{ border: "1px solid black", borderRadius: "5px", margin:"5px", fontWeight: "bold" }}>Android Studio</div>
				<div className="p-2" style={{ border: "1px solid red", borderRadius: "5px", margin:"5px", fontWeight: "bold" }}>Visual Studio</div>
				<div className="p-2" style={{ border: "1px solid green", borderRadius: "5px", margin:"5px", fontWeight: "bold" }}>IntelliJ</div>
				<div className="p-2" style={{ border: "1px solid blue", borderRadius: "5px", margin:"5px", fontWeight: "bold" }}>Eclipse</div>
				<div className="p-2" style={{ border: "1px solid black", borderRadius: "5px", margin:"5px", fontWeight: "bold" }}>VS Code</div>
				<div className="p-2" style={{ border: "1px solid red", borderRadius: "5px", margin:"5px", fontWeight: "bold" }}>Jira</div>
				<div className="p-2" style={{ border: "1px solid green", borderRadius: "5px", margin:"5px", fontWeight: "bold" }}>Postman</div>
				<div className="p-2" style={{ border: "1px solid black", borderRadius: "5px", margin:"5px", fontWeight: "bold" }}>RESTful APIs</div>
				<div className="p-2" style={{ border: "1px solid red", borderRadius: "5px", margin:"5px", fontWeight: "bold" }}>SOAP</div>
				<div className="p-2" style={{ border: "1px solid green", borderRadius: "5px", margin:"5px", fontWeight: "bold" }}>Agile</div>
				<div className="p-2" style={{ border: "1px solid blue", borderRadius: "5px", margin:"5px", fontWeight: "bold" }}>Scrum</div>

			</div>
			
			



        

		</div>
		
	);
}

export default About;