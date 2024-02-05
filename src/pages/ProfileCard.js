function ProfileCard({title,handle,image,text}){
   
    return (
        <div className="card" style={{width:"18rem"}}>
            <img src={image} alt="based on company" className="card-img-top"></img>
            <div className="card-body">
                 <h7 className="card-title"> Company: {title} </h7>
                 <p style={{margin:"0px"}}>{handle}</p>
                 <p className="card-text">Position: {text}</p>
                 
             </div>
        </div>
    );
}
export default ProfileCard;