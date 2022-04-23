import React, {useState} from "react";





function HogFilter({greased, setGreased, handleSort}) {
	
	
	return (
		<div>
            <h3>Filters</h3>
			<input type='checkbox' name='greased' onChange={() => setGreased(!greased)}></input>
            <label htmlFor='greased'>Greased Hogs</label>
            <span> </span>
            <select onChange={handleSort}>
                <option value='Unsorted'>Unsorted</option>
                <option value='A-Z'>A-Z</option>
                <option value='Weight'>Weight</option>
            </select>
		</div>
	);
}

export default HogFilter;