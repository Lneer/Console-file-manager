export const init = () => {
	const usersArgs = process.argv.slice(2);
	let userName;
	if (!usersArgs[0]){
		userName = 'anonymous'
	} else {
		userName = usersArgs[0]
		.replace(' ', '')
		.replace('--username=','')}
	console.log(`Welcome to the File Manager, ${userName}!`)
	process.env.userName = userName;
}
