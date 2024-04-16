console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for (let x = 1; x <= 100; x++){
    if ((x % 2) > 0) {
        console.log(x + " is an Odd Number");
    } 
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");


for (let y = 1; y <= 100; y++) {
  if ((y % 3) == 0) {
    console.log("FIZZ");
  } else if ((y % 5) == 0){
    console.log("BUZZ");
  } else if ((y % 3) == 0 && (y % 5) == 0) {
      console.log("FIZZBUZZ");
  }
}

//Exercise 3


//WHILE LOOP
let z = 1;

while (z <= 100) {
    if (z % 2 > 0) {
      console.log(z + " is an Odd Number");
    }    
    z++;
}


//DO WHILE LOOP
let a = 1;

do {
    
    if ((a % 2) > 0) {
      console.log(a + " is an Odd Number");
    } 
    a++;


} while (a <= 100);

let b = 1;

while (b <= 100) {
    
  if (b % 3 == 0) {
    console.log(b +" FIZZ");
  } else if (b % 5 == 0) {
    console.log(b + " BUZZ");
  } else if (b % 3 == 0 && b % 5 == 0) {
    console.log(b +" FIZZBUZZ");
  }

    b++;
}

let c = 1;

do {

  if (c % 3 == 0) {
    console.log(c + " FIZZ");
  } else if (c % 5 == 0) {
    console.log(c + " BUZZ");
  } else if (c % 3 == 0 && c % 5 == 0) {
    console.log(c + " FIZZBUZZ");
  }

  c++;
    
} while (c <= 100);

//Exercise 4

// creates a random number between 0 and 500
let value = Math.round(Math.random() * 500); 
let nx = Math.round(Math.random() * (500 - 100) + 100);

for (let v = 0; v <= nx; v++){

    if (value == v) {
        console.log("Found Value");        
        break;
    
    } else if (v == nx) {
        console.log("Did not find Value");
        break;
    }
}

//Exercise 5

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let n = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);
let i = 0;


for (i = start; i <= n; i++) {
  if (i % fizzDivisor == 0 && i % buzzDivisor == 0) {
    console.log(i + " FIZZBUZZ");
  } else if (i % fizzDivisor == 0) {
    console.log(i + " FIZZx");
  } else if (i % buzzDivisor == 0) {
    console.log(i + " BUZZx");
  }
}