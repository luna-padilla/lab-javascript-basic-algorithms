// Iteration 1: Names and Input
hacker1 = "driver";
console.log(`The driver's name is ${hacker1}`);
hacker2 = "navigator1";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(
      `The driver has the longest name, it has ${hacker1.length} characters`
    );
  } else if (hacker2.length > hacker1.length) {
    console.log(
      `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
    );
  } else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1} characters!.`);
  }

// Iteration 3: Loops
let char = "";
for (let i = 0; i < hacker1.length; i++) {
  if (i === hacker1.length - 1) {
    char += hacker1[i].toUpperCase();
  } else if (i !== hacker1.length - 1) {
    char += hacker1[i].toUpperCase() + " ";
  }
}
console.log(`${char} `);