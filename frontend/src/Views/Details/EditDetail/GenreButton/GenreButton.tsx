import { useEffect, useState } from "react";
import { MainDiv } from "./GenreButtonStyle";

function GenreButton({ id, name, addOrRemoveGenre, genresId }: any) {
  const [clicked, setClicked] = useState(false);


  useEffect(() => {
    genresId.some((o: string) => id === o) && setClicked(true)
    }
  , []);

  const handleClick = (id: string) => {
    setClicked(!clicked);
    addOrRemoveGenre(id);
  };
  return (
    <MainDiv key={id}>
      <button
        onClick={()=>handleClick(id)}
        className={` ${clicked ? "special" : "clicked"}`}
      >
        {name}
      </button>
    </MainDiv>
  );
}

export default GenreButton;
