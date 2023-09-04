import { useMutation, useQuery, useReactiveVar } from "@apollo/client";
import { detailInfo, detailOpen } from "../../../Apollo/client";
import { Note, NoteGenre } from "../../../Intefaces/NotesInterfaces";
import {
  BackgroundDiv,
  BtnsDiv,
  CategoriesDiv,
  CloseBtn,
  DescriptionBox,
  DetailsMainDiv,
  EditDiv,
  MainDiv,
} from "../DetailsStyle";
import { useState } from "react";
import { MultStyldTextFld, StyldTextField } from "./EditDetailStyle";
import { GET_NOTES, GET_NOTE_GENRES, UPDATE_NOTE } from "../../../Apollo";
import GenreButton from "./GenreButton/GenreButton";

function EditDetail() {
  const detailIsOpen = useReactiveVar<number>(detailOpen);
  const detailProps = useReactiveVar<Note>(detailInfo);
  const [updateNote] = useMutation(UPDATE_NOTE);

  const close = () => {
    console.log(detailIsOpen);
    detailOpen(0);
  };
  const saveEdit = () => {
    handleUpdateStudent();
    detailOpen(0);
  };

  const {
    loading,
    error,
    data,
  }: { loading: boolean; error?: any; data?: any } = useQuery(GET_NOTE_GENRES);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  const [input, setInput] = useState({
    id: detailProps.id,
    name: detailProps.name,
    description: detailProps.description,
    category: detailProps.category,
    genres: detailProps.genres,
  });

  const handleChange = (e: any) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdateStudent = async () => {
    try {
      const { data } = await updateNote({
        variables: {
          updateNoteInput: {
            name: input.name,
            description: input.description,
            category: input.category,
            id: input.id,
            genres: genresId,
          },
        },
        refetchQueries: [{ query: GET_NOTES }],
      });
      console.log(data?.createNote);
    } catch (error) {
      console.error(error);
    }
  };

  let genresId: string[] = detailProps.genres.map((obj: any) => obj.id) as any[];

  const addOrRemoveGenre = (id: string) => {
    if (genresId.includes(id)) {
      genresId = genresId.filter(g => g !== id);
    } else {
      genresId.push(id);
    }
  };


  return (
    <MainDiv>
      <BackgroundDiv onClick={() => close()}></BackgroundDiv>
      <DetailsMainDiv>
        <BtnsDiv>
          <CloseBtn onClick={() => close()}>X</CloseBtn>
          <EditDiv onClick={() => saveEdit()}>Save Edit</EditDiv>
        </BtnsDiv>
        <StyldTextField
          type="text"
          placeholder="Name"
          name="name"
          aria-placeholder={input.name}
          value={input.name}
          onChange={(e) => handleChange(e)}
        />
        <p>Status :{detailProps.category}</p>

        <CategoriesDiv>
          {data.getNoteGenres.map((g: NoteGenre) => {
            return (
              <div key={g.id}>
               <GenreButton 
               {...g}
               addOrRemoveGenre={addOrRemoveGenre}
               genresId={genresId}
                />
              </div>
            );
          })}
        </CategoriesDiv>
        <DescriptionBox>
          <MultStyldTextFld
            type="text"
            multiline
            maxRows={30}
            placeholder="description"
            name="description"
            aria-placeholder={input.description}
            value={input.description}
            onChange={(e) => handleChange(e)}
          />
        </DescriptionBox>
      </DetailsMainDiv>
    </MainDiv>
  );
}

export default EditDetail;
