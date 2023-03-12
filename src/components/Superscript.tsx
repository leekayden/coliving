import React from "react";

interface SuperscriptProps {
  text: string;
  superscript: string;
}

const Superscript: React.FC<SuperscriptProps> = ({ text, superscript }) => {
  const superscriptStyle = {
    verticalAlign: "super",
    fontSize: "smaller",
  };

  return (
    <span>
      {text}
      <sup style={superscriptStyle}>{superscript}</sup>
    </span>
  );
};

export default Superscript;
