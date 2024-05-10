import React, { useState, useEffect } from "react";
import { ResourceProps } from "../../../admin.types";
import BlogsCard from "../../../../recursos/Modulos-Recursos/blogs/blogs-cards/BlogsCard";
import EbooksCard from "../../../../recursos/Modulos-Recursos/ebooks/ebooksCards/EbooksCard";
import EventCard from "../../../../recursos/Modulos-Recursos/eventos/Events-cards/EventCard";
import EditFormResource from "./EditFormResource";
import PreviewBlogInfo from "./PreviewBlogInfo";

type ModalEditResourcesProps = {
  isOpen: boolean;
  onClose: () => void;
  resource: ResourceProps | null;
  isEditing?: boolean;
};

const ModalEditResources: React.FC<ModalEditResourcesProps> = ({
  isOpen,
  onClose,
  resource,
  isEditing,
}) => {
  const [editedProperties, setEditedProperties] = useState<
    Partial<ResourceProps>
  >({});
  const [showPreview, setShowPreview] = useState(false);
  const [resetKey, setResetKey] = useState<number>(0); 
  useEffect(() => {
  
    if (!isOpen) {
      setEditedProperties({});
      setShowPreview(false);
      setResetKey(prevKey => prevKey + 1);
    }
  }, [isOpen]);

  const handleCloseEditModal = () => {
    onClose();
  };

  const saveProperties = () => {
    onClose();
  };

  const closePreview = () => {
    setShowPreview(false);
  };
  

  return (
    <>
      {isOpen && (
        <div className="modal fixed top-0 pt-36 left-0 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-75">
          <div className="modal-content bg-white w-full h-full md:w-[90%] lg:w-[90%] p-6 rounded-lg flex relative overflow-y-auto">
            <button
              onClick={handleCloseEditModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="md:w-[100vh] xs:w-[70vh] p-1">
              <h2 className="text-2xl font-bold mb-4">Editar Recurso</h2>
              <EditFormResource
                onClose={onClose}
                setSaveStatus={saveProperties}
                resource={resource}
                updateEditedProperties={setEditedProperties}
              />
            </div>
            <div className="w-full md:w-1/2 p-1">
              <div key={resetKey}></div>
              {showPreview ? (
                <PreviewBlogInfo
                  title={editedProperties.title || resource?.title}
                  image={
                    editedProperties.image
                      ? editedProperties.image
                      : resource?.image
                  }
                  description={
                    editedProperties.description || resource?.description
                  }
                  category={
                    editedProperties.category || resource?.category
                  }

                  headers={editedProperties.headers || resource?.headers}
                />
              ) : (
                <>
                  {resource && (
                    <div className="w-1/2 ml-[25%]  md:ml-[25%] md:w-[70%] 2xl:w-[50%]">
                      {resource.type === "blog" && (
                        
                        <BlogsCard
                          image={
                            editedProperties.image
                              ? editedProperties.image
                              : resource.image
                          }
                          title={editedProperties.title || resource.title}
                          description={
                            editedProperties.description || resource.description
                          }
                          _id={resource._id}
                          genre={editedProperties.category || resource.category}
                          isEditing={isEditing}
                        />
                      )}
                      {resource.type === "ebook" && (
                        <EbooksCard
                          image={
                            editedProperties.image
                              ? editedProperties.image
                              : resource.image
                          }
                          title={editedProperties.title || resource.title}
                          description={
                            editedProperties.description || resource.description
                          }
                          category={
                            editedProperties.category || resource.category
                          }
                          link={editedProperties.link || resource.link}
                          isEditing={isEditing}
                        />
                      )}
                      {resource.type === "social" && (
                        <EventCard
                          image={
                            editedProperties.image
                              ? editedProperties.image
                              : resource.image
                          }
                          title={editedProperties.title || resource.title}
                          description={
                            editedProperties.description || resource.description
                          }
                          category={
                            editedProperties.category || resource.category
                          }
                          link={editedProperties.link || resource.link}
                          isEditing={isEditing}
                        />
                      )}
                    </div>
                  )}
                </>
              )}
              {isEditing && resource?.type === "blog" && !showPreview && (
                <button
                  className="px-2 py-2 my-2 mx-2 bg-linkIt-50 rounded-xl"
                  onClick={() => setShowPreview(true)}
                >
                  Vista previa
                </button>
              )}
              {showPreview && (
                <button
                  className="px-2 py-2 my-2 mx-2 bg-linkIt-50 rounded-xl"
                  onClick={closePreview}
                >
                  Cerrar vista previa
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalEditResources;
