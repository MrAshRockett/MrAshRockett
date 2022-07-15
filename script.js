// Set up

// DO NOT ALTER THIS OBJECT BY CHANGING ANY CODE ON LINES 4-11!
let terah = {
  name: "Terah",
  age: 32,
  height: 172,
  hairColor: "brown",
  eyeColor: "brown"
}
// __________________________________________
// Only change code below this line












// __________________________________________
// Test Code:  Do not alter code below this line.

function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false: " + message);
    throw new Error(message);
  }
  console.log(test_number + "true");
  return true;
}

assert(
  typeof adam === 'object',
  "The value of adam should be declared as an empty object.",
  "1. "
)

assert(
  adam.name === "Adam",
  "The adam object should have a name key with the value of 'Adam'.",
  "2. "
)

assert(
  terah.spouse === adam,
  "The terah object should have a spouse key with the value of the adam object.",
  "3. "
)

assert(
  terah.age === 33,
  "The terah object's age key should have a value of 33.",
  "4. "
)

assert(
  terah.eyeColor === undefined || null,
  "The terah object's eyeColor property should be deleted using the delete keyword.",
  "5. "
)

assert(
  terah.spouse.spouse === terah,
  "The adam object should have a spouse key which refers to the terah object.",
  "6. "
)

assert(
  typeof terah.children === 'object',
  "The value of the terah children key should be declared as an empty object.",
  "7. "
)

assert(
  typeof terah.children.ben === 'object',
  "The terah children object needs a ben property which should be declared as an object",
  "8. "
  )

assert(
  terah.children.ben.name === "Ben",
  "The ben property of the terah children object should have a name key with the value of 'Ben'.",
  "9. "
)

assert(
  typeof terah.children.wilson === 'object',
  "The terah children object needs a wilson property which should be declared as an object",
  "10. "
  )

assert(
  terah.children.wilson.name === "Wilson",
  "The wilson property of the terah children object should have a name key with the value of 'Wilson'.",
  "11. "
)

assert(
  typeof terah.children.felicia === 'object',
  "The terah children object needs a felicia property which should be declared as an object",
  "12. "
  )

assert(
  terah.children.felicia.name === "Felicia",
  "The felicia property of the terah children object should have a name key with the value of 'Felicia'.",
  "13. "
)

assert(
  adam.children === terah.children,
  "The value of the adam children property should be equal to the value of the terah children property",
  "14. "
)

console.log("\nHere is your final terah object:\n")
console.log(terah)