import React, { useReducer } from "react"
import { postItReducer, PostItState } from "./post-it-reducer"


const initialPostItState: PostItState = {
    note: "",
    notesList: []
}

export function PostItSetup() {

    const [postItState, dispatch] = useReducer(postItReducer, initialPostItState);

    function handleNoteAdder(event: React.ChangeEvent<HTMLInputElement>){
        dispatch({type:"SET_NOTE", payload: event.target.value});
    }

    return <>
    
    <h1>Post-It Notes</h1>
    
    <label htmlFor="notesId">Note to Add</label>
    <input id="notesId" type="text" placeholder="Something..." onInput={handleNoteAdder}/>
    <button onClick={()=>dispatch({type:"ADD_NOTE"})}>Add Note</button>
    <hr />
    <button onClick={()=>dispatch({type:"CLEAR_NOTES"})}>Clear Notes</button>
    <hr />
    

    <h4>Notes:</h4>
    <ul>
        {postItState.notesList.map(n => <li>{n} <button onClick={()=>dispatch({type:"DELETE_NOTE", payload:n })}> Delete Note</button> </li>)}
        
    </ul>


    </>


}
