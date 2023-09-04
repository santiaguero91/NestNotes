import { useReactiveVar } from "@apollo/client";
import {
  BackgroundDiv,
  BtnsDiv,
  CategoriesDiv,
  CloseBtn,
  DescriptionBox,
  DetailsMainDiv,
  EditDiv,
  GenreDiv,
  MainDiv,
  StatusDiv,
  TypoDetail,
} from "./DetailsStyle";
import { detailInfo, detailOpen } from "../../Apollo/client";
import { Note, NoteGenre } from "../../Intefaces/NotesInterfaces";

function Details() {
  const detailIsOpen = useReactiveVar<number>(detailOpen);
  const detailProps = useReactiveVar<Note>(detailInfo);

  const close = () => {
    console.log(detailIsOpen);
    detailOpen(0);
  };

  const openEdit = () => {
    detailOpen(2);
  };

  return (
    <MainDiv>
      <BackgroundDiv onClick={() => close()}></BackgroundDiv>
      <DetailsMainDiv>
        <BtnsDiv>
          <CloseBtn onClick={() => close()}>X</CloseBtn>
          <EditDiv onClick={() => openEdit()}>Edit</EditDiv>
        </BtnsDiv>
        <TypoDetail variant="h3">{detailProps.name}</TypoDetail>
        <StatusDiv>
          <TypoDetail variant="body1" fontWeight="bold">Status :</TypoDetail>
          <TypoDetail variant="body1">{detailProps.category}</TypoDetail>
        </StatusDiv>
        <CategoriesDiv>
          {detailProps.genres.map((g: NoteGenre) => {
            return (
              <GenreDiv key={g.id + g.name}>
                <TypoDetail variant="subtitle1">{g.name}</TypoDetail>
              </GenreDiv>
            );
          })}
        </CategoriesDiv>
        <DescriptionBox>
          <TypoDetail variant="body1">{detailProps.description}</TypoDetail>
        </DescriptionBox>
      </DetailsMainDiv>
    </MainDiv>
  );
}

export default Details;
