//Tipos de datos

//undefined
let cliente
console.log("undefined: "+cliente)
console.log(typeof cliente)

//boolean
const descuento = true
console.log("boolean: "+descuento)

//number
const numero1=20.20
const numero2=30
const numero3=-100
console.log("number: "+(numero1+numero2+numero3))

//strings
const alumno="María"
let producto ='heyyy'

const número="30"
console.log(alumno)
console.log(typeof número)

//BigInt
const numeroGrande= BigInt(5237480957254353453467653049583204958302958)
console.log(typeof numeroGrande)

const num =10
console.log(num+Number(numeroGrande))

//cohersión
console.log(alumno+producto)

//symbol (únicos)
const primerSymbol = Symbol(30)
const segundoSymbol=Symbol(30)

console.log(primerSymbol === segundoSymbol)
console.log(primerSymbol.valueOf())
console.log(segundoSymbol.valueOf())

//null
const descusento = null
console.log(typeof descusento)