import React from "react";
import { AiOutlineTrademark } from "react-icons/ai";

const Dopalearnlogo = () => {
  return (
    <div className="my-5">
      <div className="grid justify-items-end -mb-4 -mr-1" >
        <AiOutlineTrademark size={12}/>
      </div>

      <p className="text-5xl font-medium text-center">
        Dopa<span className="text-dopalearnblue">l</span>
        <span className="text-dopalearnred">e</span>
        <span className="text-dopalearngreen">a</span>
        <span className="text-dopalearnyellow">r</span>
        <span className="text-dopalearnpurple">n</span>
      </p>
      <p className="grid justify-items-end text-xs">we motivate learning</p>
    </div>
  );
};

export default Dopalearnlogo;
