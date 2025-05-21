import React from "react";
import { modelData } from "../../data/index";
import { notFound } from "next/navigation";

export default function ModelDetails({ params }: { params: { id: number } }) {
  const modelId = Number(params.id);
  const model = modelData.find((item) => item.id === modelId);

  if (!model) return notFound();

  return (
    <div className="p-4">
      {/* <h1 className="text-2xl font-bold mb-2">{model.heading}</h1>
      <p className="text-lg">{model.description}</p>
      <p className="text-sm mt-2 border border-gray-300 w-fit p-2 rounded">
        {model.tag}
      </p> */}
      <p className="text-center font-semibold">This page shows detials for model with id {model.id}</p>
    </div>
  );
}
