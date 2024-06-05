// cspell:disable
require("dotenv").config();
const token = process.env.OVSX_TOKEN;

// spawn a child process to run the publish command for ovsx cli
const { spawn } = require("child_process");
const publish = spawn("npx", [
	"ovsx",
	"publish",
	"./better-nunjucks-0.2.5.vsix",
	"-p",
	token,
]);

// Listen for any response from the child process
publish.stdout.on("data", (data) => {
	console.log(`stdout: ${data}`);
});

// Listen for any error response from the child process
publish.stderr.on("data", (data) => {
	console.log(`stderr: ${data.toString()}`);
});

// Listen for the close event of the child process
publish.on("exit", (code) => {
	console.log(`child process exited with code ${code.toString()}`);
});
