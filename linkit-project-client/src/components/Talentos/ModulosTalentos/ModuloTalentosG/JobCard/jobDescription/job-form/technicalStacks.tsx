import axios from "axios";

let data: any;

async function fetchTechStack() {
  const response = await axios.get('https://linkit-server.onrender.com/resources/techStack');
  data = response.data;
}

fetchTechStack();

export const getStack = data;

export const StackBulletPoint = (stack: string) => {
  return (
    <button className="w-[1rem] bg-linkIt-300 text-white">{stack}</button>
  )
}