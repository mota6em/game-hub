import React from "react";
interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return (
    <span className={`badge text-bg-secondary bg-${color} py-0_5 h-fit-content col-2 fs-6 d-flex align-items-center justify-content-center`}>
      {score}
    </span>
  );
};

export default CriticScore;
