import { useReactiveVar } from "@apollo/client";
import { CardType } from "../../Intefaces/NotesInterfaces";
import { CardMainDiv } from "./CardStyle";
import UpdateStatus from "./ChangeStatus/UpdateStatus";
import DeleteBtn from "./DeleteButtons/DeleteBtn";
import { detailInfo, detailOpen } from "../../Apollo/client";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CardsIcons from "./CardsIcons/CardsIcons";

function Card({ id, name, description, category, genres }: CardType) {
  const detailProps = useReactiveVar(detailInfo);
  const detailIsOpen = useReactiveVar(detailOpen);

  const loadDetailData = () => {
    detailInfo({ id, name, description, category, genres });
    detailOpen(1);
    console.log(detailProps, detailIsOpen);
  };

  return (
<CardMainDiv className={`card ${category=== "DONE" ? 'special' : ''}`}>
      <CardsIcons genres={genres} />
      <p>{name}</p>
      <DeleteBtn
        id={id}
        name={name}
        description={description}
        category={category}
        genres={genres}
      />

      <VisibilityIcon
        titleAccess="See Details"
        fontSize="medium"
        onClick={() => loadDetailData()}
        style={{ cursor: "pointer" }}
      />
      <UpdateStatus
        id={id}
        name={name}
        description={description}
        category={category}
        genres={genres}
      />
    </CardMainDiv>
  );
}

export default Card;
