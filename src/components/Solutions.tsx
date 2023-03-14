import NavBar from "./NavBar";
import { isLandlordAccount } from "../global/data";

function Solutions() {
  return (
    <div>
      <NavBar isHomeOwner={isLandlordAccount} />
    </div>
  );
}

export default Solutions;
