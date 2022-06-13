export const exit = () => {
	const usersArgs = process.argv.slice(2);
	let userName = process.env.userName
	console.log(`Thank you for using File Manager, ${userName}!`)
	process.exit(0);
}