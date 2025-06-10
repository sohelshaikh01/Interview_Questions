import { useState, useEffect, useLayoutEffect } from "react";

function EffectComparison() {

	const [effectValue, setEffectValue] = useState("initial");
	const [layoutEffectValue, setLayoutEffectValue] = useState("initial");

	useEffect(() => {
		console.log("useEffect");
		setEffectValue("updated");
	}, []); // Runs after the first render

	useLayoutEffect(() => {
		console.log("useLayoutEffect");
		setLayoutEffectValue("updated");
	}, []); // Runs after the first render but before browser paints

	return (
		<div>
			<p>useEffect Value: {effectValue} </p>
			<p>useLayoutEffect Value: {layoutEffectValue}</p>
		</div>
	);

}


export default EffectComparison;