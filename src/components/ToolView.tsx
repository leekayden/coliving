import { ReactComponentType } from "../global/data";
import ToolViewBar from "./ToolViewBar";

interface ToolViewProps {
  title?: string;
  component: ReactComponentType;
}

function ToolView({ component: Component, title }: ToolViewProps) {
  return (
    <div>
      <ToolViewBar title={title} />
      <br />
      <Component />
    </div>
  );
}

export default ToolView;
