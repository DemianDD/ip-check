import React from "react";
import InputForm from "../components/InputForm";
import Output from "../components/Output";

export const Home = () => {
  const [response, setResponse] = React.useState(null);

  const handleResponseChange = (newResponse: any) => {
    setResponse(newResponse);
  };
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center p-5">
      <div className="text-[50px] font-medium">IP Checker</div>
      <div className="grid grid-cols-2 w-[850px] h-[450px] gap-5">
        <div className="p-5 flex justify-center items-center">
          <InputForm onResponseChange={handleResponseChange} />
        </div>
        <div className="bg-[#232323] rounded-2xl p-5 flex justify-center items-center text-sm text-white">
          <Output response={response} />
        </div>
      </div>
    </div>
  );
};
