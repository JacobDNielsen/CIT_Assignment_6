import { useEffect, useState } from "react";

function Person({name, known_for_department, doShow}){

    const [show, setShow] = useState(doShow);

    function Toggle(){
        setShow(!show);
    }

    useEffect (()=>{
        
    })

    function ShowPerson(){
        if(show){
            return(
                <div>
                    <p>{name}'s is known for department: {known_for_department}</p>
                </div>
            )
        } 
        return (
            <div>
                <p>not showing person</p>
            </div>
        )
    }  
    
    return (
        <div>
            {ShowPerson()}
            <button onClick={e => Toggle()}>{ show ? "hide": "show"}</button>
        </div>
    )
}

export default Person;