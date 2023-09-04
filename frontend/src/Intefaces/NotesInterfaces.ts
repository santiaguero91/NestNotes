export interface Note {
    id: string;
    name: string;
    description: string;
    category: string;
    genres:[]
  }

  export interface NoteGenre {
    id: string;
    name: string;
  }

export type CardType = {
    id: string;
    name: string;
    description: string;
    category: string;
    genres:[]

  }

export interface CardInterface{
  key: string;
  id: string;
  name: string;
  description: string;
  category: string;
}