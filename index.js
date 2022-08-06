// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];


function destructivelyAppendCat(name){
  destructivelyAppendCat = cats.push("Ralph");
}

function destructivelyPrependCat(name){
  destructivelyPrependCat = cats.unshift("Bob");
}

function destructivelyRemoveLastCat(name){
  destructivelyRemoveLastCat = cats.pop()
}

function destructivelyRemoveFirstCat(name){
  destructivelyRemoveFirstCat = cats.shift()
}

function appendCat(name){
  return [...cats, "Broom"];
}

function prependCat(name){
  return ["Arnold", ...cats];
}
console.log(prependCat)

function removeLastCat(){
  return cats.slice(0,2)
}

function removeFirstCat(){
  return cats.slice(1)
}