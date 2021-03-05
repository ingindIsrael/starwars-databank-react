import React, { useState } from "react";
import dummy from "/workspace/react-hello-webapp/src/img/pic-dummy.png";

export const Characters = () => {
	const [icon, setIcon] = useState("far fa-heart");

	return (
		<div className="container-fluid">
			<div className="row flex-row flex-nowrap overflow-auto">
				<div className="col-3">
					<div id="tarjeta" className="card card-block" styles="width: 18rem;">
						<img className="card-img-top" src={dummy} alt="Card image cap" />
						<div className="card-body">
							<h5 className="card-title">Character name</h5>
							<p className="card-text">
								Gender: male <br />
								Hair-color: black <br />
								Eye-color: blue
							</p>
							<a href="#" className="btn btn-dark">
								Learn more!
							</a>
							<a href="#" className="btn btn-dark ml-5 mr-0 ">
								<i className={icon} onClick={() => setIcon("fas fa-heart")} />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
