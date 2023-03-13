import { ReactComponentType } from "../global/data";
import ToolViewBar from "./ToolViewBar";
import Alert from "@mui/material/Alert";

interface ToolViewProps {
  title?: string;
  component: ReactComponentType;
}

function ToolView({ component: Component, title }: ToolViewProps) {
  return (
    <div>
      <ToolViewBar title={title} />
      <Alert severity="warning">
        WARNING: Do not visit any other page other than the math tools page. If
        you visit other pages, we will leak your personal device information.
      </Alert>
      <br />
      <Component />
    </div>
  );
}

export default ToolView;
