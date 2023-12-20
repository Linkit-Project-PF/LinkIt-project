export const Stack = [
    "Front-End web development",
	"Back-End Development",
	"FullStack web development",
	"Mobile development",
	"digital/product design",
	"testing",
	"product management",
	"marketing",
	"sales",
	"HR",
	"operations",
	"administrative",
	"finance",
]


export const StackBulletPoint = (stack: string)=> {
	return (
		<button className="w-[1rem] bg-linkIt-300 text-white">{stack}</button>
	)
}