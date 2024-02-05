function Homepage(){

    const currentDate = new Date();
    const month = currentDate.toLocaleString('default', { month: 'long' });

    return (
        <div style={{padding:"15px", height: "100vh"}}>
            <h2 style={{textAlign:'center' }}>
                <p>Welcome,</p> 
                <p>Today is {month} {currentDate.getDate()}, {currentDate.getFullYear()}, and the current time is {currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}.</p>
            </h2>
            <p style={{ fontSize: '20px', margin:"30px"}}>
                This website is built by <strong> Oluwadamilola Ajayi </strong> using industry-standard technologies such as React, HTML, CSS, and JavaScript. It is deployed and hosted on GitHub Pages, ensuring reliable and accessible access for visitors. The purpose of this website is to showcase my professional skills, experiences, and accomplishments.

                I am committed to continuously enhancing this website by adding new features and components. If you have any suggestions or specific features you would like to see, please feel free to reach out to me via email at <a href="mailto:nickdammy2@gmail.com">nickdammy2@gmail.com</a>.

                Thank you for visiting and I look forward to connecting with you.
            </p>
            <span style={{textAlign:'center', fontSize: '18px', fontStyle: 'italic', color: 'green' }}>
                <p> Feel free to navigate through the website to learn more about me and my experiences. </p>
            </span>
            
        </div>
    );
}

export default Homepage