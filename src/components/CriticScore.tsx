import React from "react";
interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return (
    <span className={`badge text-bg-secondary bg-${color} px-1 h-fit-content col-1 fs-6 d-flex align-items-center justify-content-center`}>
      {score}
    </span>
  );
};

export default CriticScore;
