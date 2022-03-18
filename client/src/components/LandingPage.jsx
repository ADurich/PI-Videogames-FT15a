import React from "react";
import "./css/landing.css"
import {Link} from "react-router-dom";

export default function LandingPage(){ 

let url="hola"
	  console.log((url.match(/\.(jpg|jpeg|gif|png)$/) != null));

	return( 

		<div className="backgroun">
			<h1>Henry Videogames</h1>
			<header className="container">
				<div className="row">
					<div className="col-sm-2 my-4">
						<img src="https://www.pngkey.com/png/full/772-7728171_game-logo-purple-gaming-logo-transparent.png" className="logo"/>
					</div>
					<div className="col-sm-11">
						<img src="https://raw.githubusercontent.com/FaztWeb/bootstrap4-landing01/master/img/right-laptop.png" className="img-fluid"/>
					</div>
					<div className="col-sm-12 my-4">
						<Link to ="/home">
							<button className="btn btn-light rounded-0">Ingresar</button>
						</Link>
					</div>
				</div>
			</header>	

		</div>
		)
}

  