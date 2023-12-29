export const Stack = [
    "Front-end WEB development",
	"Back-end Development",
	"Full-stack WEB development",
	"Mobile development",
	"Digital/Product design",
	"Testing",
	"Product Management",
	"Marketing",
	"Sales",
	"HR",
	"Operations",
	"Administrative",
	"Finance",
]


export const StackBulletPoint = (stack: string)=> {
	return (
		<button className="w-[1rem] bg-linkIt-300 text-white">{stack}</button>
	)
}