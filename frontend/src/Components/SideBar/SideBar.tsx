import { useReactiveVar } from "@apollo/client";
import { filterVar } from "../../Apollo/client";
import { SideBarDiv, StatusBtn, StatusBtnDiv } from "./SideBarStyle";
import FilterBtns from "./FilterBtns";

function SideBar() {

    const filter = useReactiveVar(filterVar);

    const handleFilterState = (e:string) => {
        filterVar(e);
      };

    return (
      <SideBarDiv>
        <StatusBtnDiv>
        <StatusBtn className={`${filter==="All" && "special"}`} onClick={()=>handleFilterState("All")} >All</StatusBtn>
        <StatusBtn className={`${filter==="DONE" && "special"}`} onClick={()=>handleFilterState("DONE")} >Done</StatusBtn>
        <StatusBtn className={`${filter==="PENDING" && "special"}`} onClick={()=>handleFilterState("PENDING")} >Pending</StatusBtn>
        </StatusBtnDiv>
        <FilterBtns/>
      </SideBarDiv>
    )
  }
  
  export default SideBar