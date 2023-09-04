import { useQuery, useReactiveVar } from "@apollo/client";
import { Note, NoteGenre } from "../../Intefaces/NotesInterfaces";
import { GET_NOTES } from "../../Apollo";
import Card from "./Card";
import { filterVar, genresVar } from "../../Apollo/client";
import { CardsMainDiv } from "./CardsStyle";


function Cards() {
  const filter = useReactiveVar(filterVar);
  const genreFilter = useReactiveVar(genresVar);

  const {
    loading,
    error,
    data,
  }: { loading: boolean; error?: any; data?: any } = useQuery(GET_NOTES);
  if (loading) return "Loading... Wakingup server";
  if (error) return `Error! ${error.message}`;
  
  const filteredData = 
  filter==="All" ? data.getAllNotes : 
  data.getAllNotes.filter((note:Note)=>note.category === filter)
  
  
  const filtereByGenre = 
  genreFilter==="All" ? filteredData : filteredData.filter((note:Note)=>note.genres.find((e:NoteGenre)=>genreFilter.includes(e.name)))

  return (
    <CardsMainDiv>
      {filtereByGenre.map((note: Note) => {
        return (
          <div key={note.id}>
            <Card {...note} />
          </div>
        );
      })}
    </CardsMainDiv>
  );
}

export default Cards;
