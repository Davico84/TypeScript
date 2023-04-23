// Array
let tennisPoints: number[] = [15, 30, 40];
let anotherWay: Array<number> = [15, 30, 40];

// Array + Any
let dynamicList: any[] = ["Franco", 26, true, "algomas"];
console.log("dinamiylist",dynamicList);

// Tuple
let person: [string, number] = ["Franco", 26];
//let extendIncorrectPerson: [string, number] = ["Franco", 26, true]; // Error

//crea una tupla, donde en la primera posicion haya un booleano y en la segunda un string
let dupla:[boolean,string]=[true,"David"]
console.log("dupla",dupla);

//crea un arreglo de strings
let arrstring:string[]=["uno", "Algo","char"]
let arrstring2:Array<string>=["uno", "Algo","char"]
console.log("arrstring",arrstring);
console.log("arrstring2",arrstring2);
export {}