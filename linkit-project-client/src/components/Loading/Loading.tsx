import loaderSpinner from "../../assets/Loading/bouncing-circles.svg";
interface componentProps {
  text: string;
}

export default function Loading({ text }: componentProps) {
  return (
    <div className="bg-black bg-opacity-40 fixed inset-0 z-[350] flex items-center justify-center">
      <div className="bg-linkIt-500 rounded-[1.3rem] h-[200px] p-[2%] w-[400px] flex flex-col justify-center items-center font-montserrat shadow-lg">
        <img className="w-[100px]" src={loaderSpinner} alt="loading" />
        <h1 className="font-bold text-linkIt-400 text-[.9rem] 2xl:text-[1.4rem] text-center mt-4">
          {text}
        </h1>
      </div>
    </div>
  );
}