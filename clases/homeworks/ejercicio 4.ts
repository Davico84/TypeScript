//tipado inferido
let mati = {
    nombre: 'Matias',
    edad: 29
}

//tipado explicito?
interface Persona {
    nombre: string;
    edad: number
}
interface Carro {
    id: number;
    Nombre: string;
    Marca:string;
    Año:number;
}

let car: Carro={
    id:1,
    Nombre:"Camioneta SUV",
    Marca: "Mahindra",
    Año: 2012
}


interface Suv extends Carro{
    Modelo: string;
}
let franco: Persona = {
    nombre: "Franco",
    edad: 27
}
let xuv500: Suv={
    id:1,
    Nombre:"Camioneta SUV",
    Marca: "Mahindra",
    Año: 2012,
    Modelo: "XUV500 w6"
}
console.log(xuv500)

interface Estudiante extends Persona {
    esActivo: boolean
}


let diego: Estudiante = {
    nombre: "Diego",
    edad: 29,
    esActivo: false //que pasa si comento alguno?
}

// Investiga la palabra reservada implements

// Existe otra alternativa para realizar lo mismo?
// Si, types.


type Person = {
    name: string,
    age: number
}

type Student = Person & {
    isActive: boolean;
}

let Fede: Student = {
    name: 'Fede',
    age: 29,
    isActive: false
}

//Investiga sus diferencias

export {}