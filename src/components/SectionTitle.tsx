import React from "react";
import Container from "./container";

interface Props {
  title: string;
}

const SectionTitle = ({ title }: Props) => {
  return (
    <Container className="flex items-center justify-between mb-6">
      <div>
        <h1 className="text-2xl hover:text-orange-400 duration-300 font-semibold uppercase relative inline-block">
          {title}
          <span className="block w-20 h-1 bg-orange-500 mt-1" />
        </h1>
      </div>
      <button className="bg-orange-500 text-white px-4 py-2 rounded-md text-sm hover:bg-orange-600 transition">
        view all &gt;
      </button>
    </Container>
  );
};

export default SectionTitle;
