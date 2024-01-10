import loaderSpinner from "../../assets/Loading/bouncing-circles.svg";
interface componentProps {
  text: string;
}

export default function Loading({ text }: componentProps) {
  return (
    <div className="bg-black bg-opacity-40 w-full h-full absolute z-[350]">
      <div className=" bg-linkIt-500 absolute left-1/2 top-1/2 translate-x-[-50%] rounded-[1.3rem] translate-y-[-50%] h-[200px] p-[2%] w-[400px] flex flex-col justify-center items-center font-montserrat">
        <img className="w-[100px]" src={loaderSpinner} />
        <h1 className="font-bold text-linkIt-400 text-[.9rem] 2xl:text-[1.4rem] text-center">
          {text}
        </h1>
      </div>
    </div>
  );
}
