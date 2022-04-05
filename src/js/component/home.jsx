import React, { useState } from "react";

const Home = () => {
	const [selectedColor, setSelectedColor] = useState(null);

	return (
		<div className="position-absolute top-50 start-50 translate-middle">
			<div className="traffic-light">
				<div
					onClick={() => setSelectedColor("red")}
					className={
						"light red" + (selectedColor == "red" ? " shine" : "")
					}></div>
				<div
					onClick={() => setSelectedColor("yellow")}
					className={
						"light yellow" +
						(selectedColor == "yellow" ? " shine" : "")
					}></div>
				<div
					onClick={() => setSelectedColor("green")}
					className={
						"light green" +
						(selectedColor == "green" ? " shine" : "")
					}></div>
			</div>
		</div>
	);
};

export default Home;
