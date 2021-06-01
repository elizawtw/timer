const args = process.argv.slice(2);
let sorted = [];

for(const a of args) {
  sorted.push(parseInt(a));
}
sorted = sorted.sort((a,b) => a - b);

for (const time of sorted) {
  if (time < 0 || !Number.isInteger(time)) {
    continue;}

    setTimeout(() => {
      process.stdout.write('\x07');
    }, time);

  };
