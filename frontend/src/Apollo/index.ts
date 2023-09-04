import { gql } from "@apollo/client";

export const GET_NOTES = gql`
  query {
    getAllNotes {
      id
      name
      description
      category
      genres {
        id
        name
      }
    }
  }
`;

export const GET_NOTE_GENRES = gql`
query{
getNoteGenres{
  id
  name
}
}
`;

export const CREATE_NOTE = gql`
  mutation CreateNote($createNoteInput: CreateNoteInput!) {
    createNote(createNoteInput: $createNoteInput) {
      id
      name
      description
      category
    }
  }
`;

export const UPDATE_NOTE = gql`
  mutation UpdateNote($updateNoteInput: UpdateNoteInput!) {
    updateNote(updateNoteInput: $updateNoteInput) {
      id
      name
      description
      category
    }
  }
`;

export const DELETE_NOTE = gql`
  mutation DeleteNote($id: String!) {
    removeNote(id: $id) {
      name
    }
  }
`;
