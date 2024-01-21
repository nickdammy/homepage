function Homepage(){

    
    return (
        <div style={{padding:"15px"}}>
            <h1 style={{textAlign:'center' }}>Welcome, the time is: {new Date().toLocaleTimeString()}</h1>
            

        </div>

    );
}

export default Homepage