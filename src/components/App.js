import React, {useState} from "react";
import Nav from "./Nav";
import HogList from "./HogList";
import HogFilter from "./HogFilter"
import HogForm from "./HogForm"

import hogs from "../porkers_data";

function App() {
	const [hogData, setHogData] = useState(hogs)
	const [greased, setGreased] = useState(false)
	const [sortValue, setSortValue] = useState("Unsorted")
	
	console.log(hogData)
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
	
	let sortedHogs = sortValue === 'Unsorted' ? 
	filteredHogs
	: 
	filteredHogs.sort((hog1, hog2) => {
		if(sortValue === 'Weight'){
			return parseFloat(hog1.weight) - parseFloat(hog2.weight)
		}else if(sortValue === 'A-Z'){
			if(hog1.name.toUpperCase() < hog2.name.toUpperCase()){
				return -1
			}else if(hog1.name.toUpperCase() > hog2.name.toUpperCase()){
				return 1
			}else if(hog1.name.toUpperCase() === hog2.name.toUpperCase()){
				return 0
			}
		}
	})

	function handleSort(event){
		console.log(event.target.value)
		setSortValue(event.target.value)
	}
	
	return (
		<div className="App">
			<Nav />
			<HogForm hogData={hogData} setHogData={setHogData}/>
			<HogFilter 
				greased={greased} 
				setGreased={setGreased}
				handleSort={handleSort}/>
				<br></br>
			<HogList hogData={sortedHogs}/>
		</div>
	);
}

export default App;
