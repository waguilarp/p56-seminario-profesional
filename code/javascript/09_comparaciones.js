var docente ={
    nombre: `Guillermo`,
    apellido: `Pizarro`
}
var docente2 ={
    nombre: `Dario`,
    apellido: `Huilcapi`
}

var otrodocente ={
    ... docente
}

console.log(docente == docente2)

console.log(docente == otrodocente)

console.log(otrodocente.nombre)
docente2 = otrodocente

console.log(docente2 == otrodocente)