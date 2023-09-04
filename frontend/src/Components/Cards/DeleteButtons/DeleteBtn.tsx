import { useMutation } from "@apollo/client";
import { DELETE_NOTE, GET_NOTES } from "../../../Apollo";
import { CardType } from "../../../Intefaces/NotesInterfaces";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { CloseMainDiv } from "./DeleteBtnStyle";

function DeleteBtn({ id }: CardType) {
  const [deleteNote] = useMutation(DELETE_NOTE);
  const [idToDelete, _setIdToDelete] = useState(id);

  const handleDeleteNote = async () => {
    try {
      const { data } = await deleteNote({ variables: { id: idToDelete }, refetchQueries:[{query: GET_NOTES }] });
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <CloseMainDiv onSubmit={handleDeleteNote}>
      <CloseIcon
        fontSize="medium"
        onClick={handleDeleteNote}
        aria-label="CloseIcon"
        color="inherit"
        titleAccess="Delete Card"
        style={{ cursor: 'pointer'}}
      />
    </CloseMainDiv>
  );
}

export default DeleteBtn;
