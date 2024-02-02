function Homepage(){

    
    return (
        <div style={{padding:"15px"}}>
            <h2 style={{textAlign:'center' }}>
                <p>Welcome,</p> 
                <p> Today is {new Date().toLocaleDateString()} and the time is: {new Date().toLocaleTimeString()} </p>
            </h2>
            <p style={{textAlign:'center' }}>
                 This website is made using React, HTML, CSS, and Javascript. I am developing this website to showcase my skills and experiences.
                 I peridocially update this website with new features and components.
                 If there is a feature you would like to see, please let me know via <a href="mailto:nickdammy2@gmail.com">email</a>.

                 </p>
            <span style={{textAlign:'center' }}>
                <p> Feel free to navigate through the website to learn more about me and my experiences. </p>
            </span>
        </div>

    );
}

export default Homepage