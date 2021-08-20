import React from "react";
import "../index.css";
import {Link} from "react-router-dom";

export default function LandingPage(){ 
	return(
		<div>
			<div><img src="https://steamuserimages-a.akamaihd.net/ugc/916918214160222409/D648CE0F94C05BEAEB961F6DAD79D059D7A3670D/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false" className="imgStyle"/></div>
			<Link to ="/home">
			<button className="border">Ingresar</button>
			</Link>
		</div>
		)
}