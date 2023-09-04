import WorkIcon from "@mui/icons-material/Work";
import HomeIcon from "@mui/icons-material/Home";
import CakeIcon from "@mui/icons-material/Cake";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function CardsIcons({ genres }: any) {

    let genresId: string[] = genres.map((obj: any) => obj.name) as any[];


  return (
    <div>
      {genresId.includes('Personal') && <HomeIcon fontSize="small" />}
      {genresId.includes('Birthdays') && <CakeIcon fontSize="small" />}
      {genresId.includes('Work') && <WorkIcon fontSize="small" />}
      {genresId.includes('Shop') && <ShoppingCartIcon fontSize="small" />}
    </div>
  );
}

export default CardsIcons;
