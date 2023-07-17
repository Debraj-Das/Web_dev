const exec = require("child_process").exec;

com = "fib 3 4 45 6 7 10 22";

exec(com, (err, stdout, stderr) => {
  if (err) {
    console.log(`error: ${stderr}`);
    return;
  }
  console.log(`fib 43 : ${stdout}`);
});
