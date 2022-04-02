import React, { useState, useEffect } from "react";

const Home = () => {

	const [select, setSelect] = useState();

	return (
		<div>
			<div
				style={{ height: "3rem", width: "rem" }}
				className="bg-danger"
				onClick={() => {
					setSelect("red");
				}}></div>
			<div
				style={{ height: "3rem", width: "rem" }}
				className="bg-warning"
				onClick={() => {
					setSelect("yellow");
				}}></div>
			<div
				style={{ height: "3rem", width: "rem" }}
				className="bg-success"
				onClick={() => {
					setSelect("green");
				}}></div>
				{select == "red" ? <h1>{select}</h1> : <h1>X</h1>}

		</div>
	);
};

export default Home;
