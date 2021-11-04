const argstimer = process.argv.slice(2).sort();
//console.log(args);
for (let num of argstimer) {
  if (num >= 0 && !Number.isNaN(num)) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, num);
  }
}