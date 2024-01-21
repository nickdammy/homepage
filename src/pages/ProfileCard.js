function ProfileCard({title,handle,image,text}){
   
    return (
        <div className="card" style={{width:"18rem"}}>
            <img src={image} className="card-img-top"></img>
            <div className="card-body">
                 <h7 className="card-title"> Company: {title} </h7>
                 <p>{handle}</p>
                 <p className="card-text">Position: {text}</p>
                 
             </div>
        </div>
    );
}
export default ProfileCard;