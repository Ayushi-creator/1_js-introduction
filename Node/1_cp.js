/*yaha node mei aap externally chote chote subprocess chala skte ho,external command chala skte ho*/
/*child process  is a node module used to create subprocess within a script//
//you can perform different task with your script*/

const cp= require('child_process')/*pura child process cp mei aa chula hai
console.log('Trying to open calculator')*/
/*ab cp ko sare child process ka exess mil jayega  ab hum likhenge   cp.
cp.execSync('calc')
console.log("Trying to open vscode")
cp.execSync("code")
cp.execSync('start chrome https://www.pepcoding.com/')*/

let output=cp.execSync('node test.js')
console.log('output-'+ output)