import React, {useState} from "react";
import Nav from "./Nav";
import HogList from "./HogList";
import HogFilter from "./HogFilter"

import hogs from "../porkers_data";

function App() {
	const [hogData, setHogData] = useState(hogs)
	const [greased, setGreased] = useState(false)
	const [alphaSort, setAlphaSort] = useState(false)
	const [weightSort, setWeightSort] = useState(false)
	
	// function handleGreasedChange(){
	// 	setGreased(!greased)
	// }
	let filteredHogs = hogData.filter(hog => {
		if(greased === false){
			return true 
		}else {
			return hog.greased
		}
	})

	function handleSort(event){
		console.log(event.target.value)
		if(event.target.value === 'A-Z'){
			filteredHogs = filteredHogs.sort((a, b) => {
				if(a.name.toUpperCase() < b.name.toUpperCase()){
					return -1
				}else if(a.name.toUpperCase() > b.name.toUpperCase()){
					return 1
				}else if(a.name.toUpperCase() === b.name.toUpperCase()){
					return 0
				}
			})
		}

	}
	
	return (
		<div className="App">
			<Nav />
			<HogFilter 
				greased={greased} 
				setGreased={setGreased}
				handleSort={handleSort}/>
			<HogList hogData={filteredHogs}/>
		</div>
	);
}

export default App;
