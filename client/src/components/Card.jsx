import React from "react";

export default function Card({ name, image, id}) {

  return (
    <div id="cardcard" className="card text-center bg-dark animate__animated animate__fadeInUp">
      <div className="card-body text-light">
        <h3 className="card-title">{name}</h3>
      </div>      
      {image?
      <div className="overflow">
        <img src={image} alt="img not found" width="200px" height="200px" className="card-img-top" />
      </div>:
      <div className="overflow">
        <img src="https://www.publicdomainpictures.net/pictures/280000/nahled/not-found-image-15383864787lu.jpg" alt="img not found" width="200px" height="200px" className="card-img-top" />
      </div>}
    </div>
  );
}

<img src="" alt="img not found" width="200px" height="250px" />
