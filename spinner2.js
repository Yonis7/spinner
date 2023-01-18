console.log('hello from spinner1.js...');

let spinner = ["|", "/", "-", "\\"];
let delay = 100;
let i = 0;

setInterval(() => {
  process.stdout.write(`\r${spinner[i]}   `);
  i = (i + 1) % spinner.length;
}, delay);