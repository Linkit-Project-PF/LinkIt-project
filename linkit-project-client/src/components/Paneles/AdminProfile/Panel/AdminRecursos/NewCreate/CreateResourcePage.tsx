import { useState } from "react";
import { ResourceProps } from "../../../../admin.types";
import { ResourceForm } from "./ResourceForm";
import { useSelector } from "react-redux";
import { stateProps } from "../FormResource";

export default function CreateResourcePage() {
  const user = useSelector((state: stateProps) => state.Authentication.user);

  const [resource, setResource] = useState<Partial<ResourceProps>>({
    title: "",
    description: "",
    link: "",
    type: "",
    image: "",
    category: "",
    headers: [],
    createdBy: user.firstName.concat(user.lastName),
  });

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-8 text-linkIt-300">
        Crear Nuevo Recurso
      </h1>
      <ResourceForm initialResource={resource} onResourceChange={setResource} />
    </div>
  );
}
