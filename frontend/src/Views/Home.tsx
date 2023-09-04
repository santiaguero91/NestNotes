import Cards from "../Components/Cards/Cards"
import { HomeLeftDiv, HomeMainDiv } from "./HomeStyle"
import SideBar from "../Components/SideBar/SideBar"
import { useReactiveVar } from "@apollo/client"
import { detailOpen } from "../Apollo/client"
import Details from "./Details/Details"
import EditDetail from "./Details/EditDetail/EditDetail"
import CreatNoteForm from "../Components/CreateForm/CreatNoteForm"

function Home() {
  const detailIsOpen = useReactiveVar(detailOpen);
  
  return (
    <HomeMainDiv>
        {detailIsOpen === 1 ? <Details/>:detailIsOpen === 2 ? <EditDetail/> : ""}
        <HomeLeftDiv>
        <SideBar/>
        <Cards/>
        </HomeLeftDiv>
        <CreatNoteForm/>
      </HomeMainDiv>
    )
  }
  
  export default Home