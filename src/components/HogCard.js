import React, {useState} from "react";

function HogCard({hog}){
    const [hidden, setHidden] = useState(true)
    
    return (
        <div class='pigTile' onClick={() => (setHidden(!hidden))}>
            <h3>{hog.name}</h3>
            <img src={hog.image}/>
            {hidden ?
           null
            :
            <div>
                <p>Highest Medal Achieved: {hog[`highest medal achieved`]}</p>
                <p>Specialty: {hog.specialty}</p>
                <p>Weight: {hog.weight}</p>
                <p>Greased: {`${hog.greased}`}</p>
            </div>
            }
        </div>
    )

}

export default HogCard