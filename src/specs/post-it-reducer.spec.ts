import { postItReducer, PostItState } from "../post-it-reducer"

test("ADD Note", ()=>{
    const postItState: PostItState = {
        note: "Welcome to the Show",
        notesList: ["Hello"]
    }

    const nextState = postItReducer(postItState, {type: "ADD_NOTE"});
    expect(nextState.notesList.length).toBe(2);
    console.log(postItState);
    console.log(nextState);
})
test("ADD SHORT Note", ()=>{
    const postItState: PostItState = {
        note: "Hi",
        notesList: ["Hello"]
    }

    const nextState = postItReducer(postItState, {type: "ADD_NOTE"});
    expect(nextState.notesList.length).toBe(1);
    expect(nextState.note).toBe("Hi");
    console.log(postItState);
    console.log(nextState);
})
test("CLEAR Notes", ()=>{
    const postItState: PostItState = {
        note: "Welcome to the Show",
        notesList: ["Hello", "Goodbye"]
    }

    const nextState = postItReducer(postItState, {type: "CLEAR_NOTES"});
    expect(nextState.notesList.length).toBe(0);
    console.log(postItState);
    console.log(nextState);
})
test("SET Note", ()=>{
    const postItState: PostItState = {
        note: "Goodbye",
        notesList: ["Hello"]
    }

    const nextState = postItReducer(postItState, {type: "SET_NOTE", payload: "Peace"});
    expect(nextState.note).toBe("Peace");
    expect(nextState.notesList.length).toBe(1);
    console.log(postItState);
    console.log(nextState);
})
test("DELETE Note", ()=>{
    const postItState: PostItState = {
        note: "Goodbye",
        notesList: ["Hello", "Peace"]
    }

    const nextState = postItReducer(postItState, {type: "DELETE_NOTE", payload: "Peace"});
    expect(nextState.notesList.length).toBe(1);
    console.log(postItState);
    console.log(nextState);
})