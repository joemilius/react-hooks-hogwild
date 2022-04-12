import React from "react";
import HogCard from "./HogCard";

function HogList({hogData}){
    
    let eachHog = hogData.map(hog => {
        return( 
            <HogCard key={hog.id} hog={hog}/>
        )
    })
    return(
        <div>
            {eachHog}
        </div>
    )

}

export default HogList