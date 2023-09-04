import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";
import { Note } from "../Intefaces/NotesInterfaces";


export const testVar = makeVar([1,2,3])
export const filterVar = makeVar("All")
export const genresVar = makeVar("All")
export const detailOpen = makeVar(0)
export const detailInfo = makeVar<Note>({
 id:"1",
 category: "PENDING",
 description:"1",
 name: "1",
 genres: []
})

/* 
https://nestaschool.onrender.com/graphql

uri: 'http://localhost:3001/graphql', 
*/

export const client = new ApolloClient({
    uri: 'https://nestaschool.onrender.com/graphql',
    cache: new InMemoryCache({
        typePolicies:{
            Notes:{
                keyFields:["id","name","description","category"]
            }
        }
    }),
  });