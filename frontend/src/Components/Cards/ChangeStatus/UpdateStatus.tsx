import { GET_NOTES, UPDATE_NOTE } from "../../../Apollo";
import { CardType } from "../../../Intefaces/NotesInterfaces";
import { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import DoneAllIcon from "@mui/icons-material/DoneAll";
function UpdateStatus({ id, name, description, category, genres }: CardType) {
  const [idToUpdate, _setIdToUpdate] = useState(id);
  const [nameToUpdate, _setNameToUpdate] = useState(name);
  const [descriptionToUpdate, _setDescriptionToUpdate] = useState(description);
  const [categoryToUpdate, setCategoryToUpdate] = useState(category);
  const [updateNote] = useMutation(UPDATE_NOTE);
  const [count, setCount] = useState(true);

  useEffect(() => {
    categoryToUpdate === "PENDING"
      ? setCategoryToUpdate("DONE")
      : setCategoryToUpdate("PENDING");
  }, [count]);

  let genresId: string[] = genres.map((obj: any) => obj.id) as any[];

  const handleUpdateNote = async () => {
    try {
      const { data } = await updateNote({
        variables: {
          updateNoteInput: {
            id: idToUpdate,
            name: nameToUpdate,
            description: descriptionToUpdate,
            category: categoryToUpdate,
            genres: genresId,
          },
        },
        refetchQueries: [{ query: GET_NOTES }],
      });
      console.log(data.updateNote);
      setCount(!count);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div onClick={handleUpdateNote}>
        {categoryToUpdate === "DONE" ? (
          <PendingActionsIcon
            titleAccess="Pending"
            fontSize="medium"
            style={{ cursor: "pointer" }}
          />
        ) : (
          <DoneAllIcon
            titleAccess="Done"
            fontSize="medium"
            style={{ cursor: "pointer" }}
          />
        )}
      </div>
    </div>
  );
}

export default UpdateStatus;
