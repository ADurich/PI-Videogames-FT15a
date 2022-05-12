import React from "react";
import {Link} from "react-router-dom";

export default function LandingPage(){ 


	return( 

		<div className="backgroun">
			<h1>Videogames app</h1>
			<header className="container">
				<div className="row">
					<div className="col-sm-2 my-4">
						<img src="https://www.pngkey.com/png/full/772-7728171_game-logo-purple-gaming-logo-transparent.png" className="logo" alt="" />
					</div>
					<div className="col-sm-11">
						<img src="https://raw.githubusercontent.com/FaztWeb/bootstrap4-landing01/master/img/right-laptop.png" className="img-fluid" alt="" />
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

  