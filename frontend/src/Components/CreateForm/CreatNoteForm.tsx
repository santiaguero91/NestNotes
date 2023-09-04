import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { CREATE_NOTE, GET_NOTES, GET_NOTE_GENRES } from "../../Apollo";
import {
  FormMainDiv,
  GenresSelected,
  StyldFormButton,
  StyldTextField,
  StyldTypo,
} from "./CreatNoteFormStyle";
import { NoteGenre } from "../../Intefaces/NotesInterfaces";
import { Button, FormLabel, MenuItem, TextField } from "@mui/material";
import { GenreDiv, TypoDetail } from "../../Views/Details/DetailsStyle";

function CreatNoteForm() {
  const [genres, setGenres] = useState<string[]>([]);
  const [genresNames, setGenresNames] = useState<string[]>([]);
  const [createNote] = useMutation(CREATE_NOTE);

  const [input, setInput] = useState({
    name: "",
    description: "",
    category: "PENDING",
    genres: "",
  });

  const {
    loading,
    error,
    data,
  }: { loading: boolean; error?: any; data?: any } = useQuery(GET_NOTE_GENRES);
  if (loading) return "";
  if (error) return `Error! ${error.message}`;

  const handleChange = (e: any) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelect = (e: string) => {
    console.log(genres);
    setGenres([...genres, e]);
  };

  const handleCreateStudent = async () => {
    try {
      const { data } = await createNote({
        variables: {
          createNoteInput: {
            name: input.name,
            description: input.description,
            category: input.category,
            genres: genres,
          },
        },
        refetchQueries: [{ query: GET_NOTES }],
      });
      console.log(data?.createNote);
    } catch (error) {
      console.error(error);
    }
    setInput({
      name: "",
      description: "",
      category: "PENDING",
      genres: "",
    })
    setGenresNames([]);
  };

  const addgenre = (e: string) => {
    setGenresNames((prevGenresNames) => {
      if (!prevGenresNames.includes(e)) {
        return [...prevGenresNames, e];
      }
      return prevGenresNames;
    });
  };

  const clear = () => {
    setGenresNames([]);
    setGenres([]);
  };

  return (
    <FormMainDiv>
      <StyldTypo variant="h1">Create Note </StyldTypo>
      <FormLabel className="StyldFormLabel">
        <StyldTextField
          type="text"
          placeholder="Name"
          name="name"
          value={input.name}
          onChange={(e) => handleChange(e)}
        />
        <StyldTextField
          type="text"
          placeholder="description"
          name="description"
          multiline
          rows={6}
          value={input.description}
          onChange={(e) => handleChange(e)}
          InputProps={{
            style: { borderRadius: "25px" },
          }}
        />

        {genres.length ? <Button onClick={() => clear()}>Clear</Button>: ""}
      <GenresSelected>

        {genresNames.map((g: string) => {
          return (
            <GenreDiv key={g}>
              <TypoDetail variant="subtitle1">{g}</TypoDetail>
            </GenreDiv>
          );
        })}
        </GenresSelected>
        <TextField
          id="outlined-select-category"
          select
          value={input.genres}
          variant="standard"
          helperText="Please select a category"
          defaultValue=""
          onChange={(e) => handleSelect(e.target.value)}
        >
          {data.getNoteGenres.map((o: NoteGenre) => {
            return (
              <MenuItem
                key={o.id + o.name}
                value={o.id}
                onClick={() => addgenre(o.name)}
              >
                <p>{o.name}</p>
              </MenuItem>
            );
          })}
        </TextField>
      </FormLabel>
      <StyldFormButton onClick={handleCreateStudent}>Submit</StyldFormButton>
    </FormMainDiv>
  );
}

export default CreatNoteForm;
