import { ReactComponentType } from "../global/data";
import ToolViewBar from "./ToolViewBar";

interface ToolViewProps {
  component: ReactComponentType;
}

function ToolView({ component: Component }: ToolViewProps) {
  return (
    <div>
      <ToolViewBar />
      <br />
      <Component />
    </div>
  );
}

export default ToolView;
