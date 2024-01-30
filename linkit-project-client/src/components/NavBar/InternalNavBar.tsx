import { useEffect, useState } from "react";

type statusHandler = (value: boolean) => void;

interface InternalNavProps {
  items: string[];
  statusHandler: statusHandler[];
}

const InternalNavBar: React.FC<InternalNavProps> = ({
  items,
  statusHandler,
}) => {
  const [activeIndex, setActicveIndex] = useState(0);
  useEffect(() => {
    if (window.location.toString().split("#")[1]) {
      setActicveIndex(1);
    }
  }, []);
  return (
    <div className="h-[10%] z-0">
      <div className="md:ml-20 ml-10 h-full flex flex-row">
        {items.map((item, index) => (
          <div
            onClick={() => {
              if (index === 0) {
                statusHandler[0](true);
                statusHandler[1](false);
              } else {
                statusHandler[1](true);
                statusHandler[0](false);
              }
              setActicveIndex(index);
            }}
            className={`text-2xl hover:cursor-pointer font-bold p-5 ${
              activeIndex === index ? "text-green-500" : ""
            }`}
            key={index}
          >
            <h1>{item}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InternalNavBar;
