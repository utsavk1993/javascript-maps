/* JS Map
 * used to store key value pairs with unique keys
 * open console to check the results
 */

// map methods
const myMap = new Map();

myMap.set("a", 1); // => Map(1) { 'a' => 1 }
myMap.set("b", 2); // => Map(2) { 'a' => 1, 'b' => 2 }
myMap.set("c", 3); // => Map(3) { 'a' => 1, 'b' => 2, 'c' => 3 }

myMap.has("a"); // => true
myMap.has("d"); // => false

myMap.delete("c"); // => true
myMap.delete("z"); // => false

console.log("myMap size:", myMap.size); // => 2
console.log("myMap get the value of a:", myMap.get("a")); // => 1

const symbolIterator = myMap[Symbol.iterator]();
console.log("Symbol Iterator - 01", symbolIterator.next().value); // => ['a', 1]
console.log("Symbol Iterator - 02", symbolIterator.next().value); // => ['b', 2]

const keysIterator = myMap.keys();
console.log("Key Iterator - 01", keysIterator.next().value); // => a
console.log("Key Iterator - 01", keysIterator.next().value); // => b

const valuesIterator = myMap.values();
console.log("Value Iterator - 01", valuesIterator.next().value); // => 1
console.log("Value Iterator - 02", valuesIterator.next().value); // => 2

// iterating over maps
// => ['a', 1], ['b', 2]
for (const item of myMap) {
  console.log("Iterating over myMap - item", item);
}

// => a, b
for (const item of myMap.keys()) {
  console.log("Iterating over myMap with keys() - item", item);
}

// => 1, 2
for (const item of myMap.values()) {
  console.log("Iterating over myMap with values() - item", item);
}

// => a 1, b 2
for (const [key, value] of myMap.entries()) {
  console.log("Iterating over myMap with entries()", key, value);
}

myMap.forEach((value, index) =>
  console.log("Iterating over myMap using forEach()", value, index)
); // => 1 a, 2 b

const myMap2 = new Map();
myMap2.set(1, "dog"); // => Map(1) { 1 => 'dog' }

console.log("myMap", myMap); // => Map(2) { 'a' => 1, 'b' => 2 }
console.log("Clearing myMap2", myMap2.clear()); // => undefined
