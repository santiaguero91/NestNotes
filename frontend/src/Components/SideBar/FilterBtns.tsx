import { useReactiveVar } from "@apollo/client";
import { genresVar } from "../../Apollo/client";
import { FilterButtons, FilterBtnsDiv } from "./FilterBtnsStyle";
import WorkIcon from "@mui/icons-material/Work";
import HomeIcon from '@mui/icons-material/Home';
import CakeIcon from '@mui/icons-material/Cake';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function FilterBtns() {
  const genreFilter = useReactiveVar(genresVar);

  const handleGenreState = (e: string) => {
    genreFilter.includes(e)
      ? genresVar(genreFilter.replace(e, ""))
      : genresVar(genreFilter + e);
  };
  const handleAllGenreState = () => {
    genresVar("All");
  };
  return (
    <FilterBtnsDiv>
      <FilterButtons
        className={`${genreFilter === "All" && "special"}`}
        onClick={() => handleAllGenreState()}
      >
        All
      </FilterButtons>
      <FilterButtons
        className={`${genreFilter.includes("Work") && "special"}`}
        onClick={() => handleGenreState("Work")}
      >
        <WorkIcon fontSize="small" />
        Work
      </FilterButtons>
      <FilterButtons
        className={`${genreFilter.includes("Personal") && "special"}`}
        onClick={() => handleGenreState("Personal")}
      >
        <HomeIcon fontSize="small" />
        Personal
      </FilterButtons>
      <FilterButtons
        className={`${genreFilter.includes("Birthdays") && "special"}`}
        onClick={() => handleGenreState("Birthdays")}
      >
        <CakeIcon fontSize="small" />
        Birthdays
      </FilterButtons>
      <FilterButtons
        className={`${genreFilter.includes("Shop") && "special"}`}
        onClick={() => handleGenreState("Shop")}
      >
        <ShoppingCartIcon fontSize="small" />
        Shop
      </FilterButtons>
    </FilterBtnsDiv>
  );
}

export default FilterBtns;
