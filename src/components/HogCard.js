import React, {useState} from "react";

function HogCard({hog}){
    const [hidden, setHidden] = useState(false)
    const [hiddenDetails, setHiddenDetails] = useState(true)
    
    return (
        <div className="ui eight wide column" >
            <div className="pigTile">
            {hidden ?
            <>
                <h3>{hog.name}</h3>
                <button onClick={() => (setHidden(!hidden))}>Show</button>
            </>
            :
            <>
                <h3>{hog.name}</h3>
                <button onClick={() => (setHidden(!hidden))}>Hide</button>
                <img className='pigImage' src={hog.image} onClick={() => (setHiddenDetails(!hiddenDetails))}/>
                {hiddenDetails ?
                null
                :
                <div>
                    <p>Highest Medal Achieved: {hog[`highest medal achieved`]}</p>
                    <p>Specialty: {hog.specialty}</p>
                    <p>Weight: {hog.weight}</p>
                    <p>Greased: {`${hog.greased}`}</p>
                </div>
                }
            </>
            }
            </div>
        </div>
    )

}

export default HogCard