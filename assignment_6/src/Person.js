import { useEffect, useState } from "react";
import Title from './Title';
import ImageFor from './ImagesFor';

export function Person({name, known_for_department, doShow, known_for}){

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


export function PersonSimple({person}){ 
    
    return (
        <div>
            <p>{person?.name}'s is known for department: {person?.known_for_department}</p>
            <ImageFor id={person?.id}/>

            <h3>Known for titles:</h3>
            {/* <p>{person?.id}</p> */}
            
            {person?.known_for.map((t) => 
                <Title known_for={t}/>
               
            )}
        </div>
    )
}
