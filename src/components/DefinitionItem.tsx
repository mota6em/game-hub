import React from "react";
import { ReactNode } from "react";
import ExpandableText from "./ExpandableText";
interface Props {
  term: string;
  children: ReactNode | ReactNode[];
}
const DefinitionItem = ({ term, children }: Props) => {
  return (
    <div className={`my-3 col-6`}>
      <h3 className="fw-bold text-gray fs-5 ">{term}</h3>
      <dd className="px-2">{children}</dd>
    </div>
  );
};

export default DefinitionItem;
