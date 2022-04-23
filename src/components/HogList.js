import React from "react";
import HogCard from "./HogCard";

function HogList({hogData}){
    
    let eachHog = hogData.map(hog => {
        return( 
            <HogCard key={hog.id} hog={hog}/>
        )
    })
    return(
        <div className="ui grid container">
            {eachHog}
        </div>
    )

}

export default HogList