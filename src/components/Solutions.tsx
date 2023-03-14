import NavBar from "./NavBar";
import { isLandlordAccount } from "../global/data";

function Solutions() {
  return (
    <div>
      <NavBar isLandlord={isLandlordAccount} />
    </div>
  );
}

export default Solutions;
