
process.stdin.setRawMode(true);
process.stdin.setEncoding('utf8');

process.stdin.on('data', (input) => {
  if(input === 'b') {
    process.stdout.write('\x07')
  } 

  if(input >= 1 && input <= 9) {
    console.log(`setting timer for ${input} seconds...`)
    setTimeout(() => {
      process.stdout.write('\x07');
    }, input * 1000);
  }
  if(input === '\u0003') {
    process.stdout.write("Thanks for using me, ciao!\n");
    process.exit();
  }
})