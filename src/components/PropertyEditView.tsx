import { PropertyList } from "../global/data"
import PropertyView from "./PropertyView"

interface PropertyEditViewProps {
    id: number;
}

function PropertyEditView({id}: PropertyEditViewProps) {
  return (
    <div>
        <PropertyView id={PropertyList[id].id} />
    </div>
  )
}

export default PropertyEditView