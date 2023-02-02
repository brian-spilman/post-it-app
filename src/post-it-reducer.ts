
export type PostItState = {
    note: string,
    notesList: string[]
}

type AddNoteAction = {type: "ADD_NOTE"};
type ClearNotesAction = {type: "CLEAR_NOTES"};
type SetNoteAction = {type: "SET_NOTE", payload: string};
type DeleteNoteAction = {type: "DELETE_NOTE", payload: string};
type PostItAction = AddNoteAction | ClearNotesAction | SetNoteAction | DeleteNoteAction;

export function postItReducer(state: PostItState, action: PostItAction): PostItState {
    let newState: PostItState = JSON.parse(JSON.stringify(state));

    switch (action.type) {
        case "ADD_NOTE": {
            if(newState.note.length < 3){
                return newState;
            }
            newState.notesList.push(newState.note);
            return newState;
        }
        case "CLEAR_NOTES": {
            newState.notesList = [];
            return newState;
        }
        case "SET_NOTE": {
            newState.note = action.payload;
            return newState;
        }
        case "DELETE_NOTE": {
            const index = newState.notesList.indexOf(action.payload);
            newState.notesList.splice(index, 1);
            return newState;
        }
    }
}
