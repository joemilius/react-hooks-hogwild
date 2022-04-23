import React, {useState} from "react";

function HogForm({hogData, setHogData}){
    const [newHog, setNewHog] = useState({
        name: '',
        specialty: '',
        weight: '',
        image: '',
        ['highest medal achieved']: '',
        greased: ''
    })
    console.log(newHog)
    function handleChange(event){
        console.log(event.target.value)
        if(event.target.value === 'true' || event.target.value === 'false'){
            setNewHog({...newHog,
                [event.target.name]: event.target.value === 'true' ? true : false
            })
        }else{
            setNewHog({...newHog,
                [event.target.name]: event.target.value
        })
        }
    }
    function handleSubmit(event){
        event.preventDefault()
        setHogData([...hogData, newHog])
        setNewHog({
            name: '',
            specialty: '',
            weight: '',
            image: '',
            ['highest medal achieved']: '',
            greased: ''
        })
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' name='name' placeholder='Enter Name' value={newHog.name} onChange={handleChange}/>
                <input type='text' name='specialty' placeholder='Enter Specialty' value={newHog.specialty} onChange={handleChange}/>
                <input type='text' name='weight' placeholder='Enter Weight' value={newHog.weight} onChange={handleChange}/>
                <input type='text' name='image' placeholder='Enter Image URL' value={newHog.image} onChange={handleChange}/>
                <select name='highest medal achieved' onChange={handleChange}>
                    <option default>Highest Medal Achieved</option>
                    <option value='platinum'>Platinum</option>
                    <option value='gold'>Gold</option>
                    <option value='silver'>Silver</option>
                    <option value='bronze'>Bronze</option>
                    <option value='wood'>Wood</option>
                </select>
                <select name='greased' onChange={handleChange}>
                    <option>Greased?</option>
                    <option value={true}>True</option>
                    <option value={false}>False</option>
                </select>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )

}

export default HogForm