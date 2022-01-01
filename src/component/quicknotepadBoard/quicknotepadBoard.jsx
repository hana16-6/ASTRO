import React, { useState } from "react";
import { Note } from "./note";
import { v4 as uuid } from "uuid";
import { Addnote } from "./addnote";
import "./not.css";
function QuicknotepadBoard() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notepd")) || []
  );

  const [searchtext] = useState("");

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: uuid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    localStorage.setItem("notepd", JSON.stringify(newNotes));
    setNotes(JSON.parse(localStorage.getItem("notepd")));
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);

    setNotes(newNotes);
    localStorage.setItem("notepd", JSON.stringify(newNotes));
  };
  return (
    <>
      <h3 className="text-center p-3 text-secondary"> NOTEPAD </h3>
      {/* <Search handleSearchtext={setsearchText}/> */}
      <div className="notes-list p-5">
        {notes.map((note) => (
          <Note
            id={note.id}
            text={note.text}
            date={note.date}
            handledeleteNote={deleteNote}
            notes={notes.filter((note) =>
              note.text.toLocaleLowerCase().includes(searchtext)
            )}
          />
        ))}
        <Addnote handleAddNote={addNote} />
      </div>
    </>
  );
}

export { QuicknotepadBoard };
