console.log("Hello World");

const exec = require("child_process").exec;

command = "addon first.txt"

exec(command, (err, stdout) => {
  if (err) {
    // node couldn't execute the command
    console.log("error");
    return;
  }

  // the *entire* stdout and stderr (buffered)
  console.log(`stdout: \n${stdout}`);
//   console.log(`stderr: ${stderr}`);
});
