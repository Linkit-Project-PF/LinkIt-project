import axios from "axios"

const {data} = await axios.get('https://linkit-server.onrender.com/resources/techStack')
export const Stack = data

export const StackBulletPoint = (stack: string)=> {
	return (
		<button className="w-[1rem] bg-linkIt-300 text-white">{stack}</button>
	)
}