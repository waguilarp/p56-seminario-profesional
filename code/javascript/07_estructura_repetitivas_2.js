var contador=0

const avanzar = () => {
 numero =   Math.random() 
 console.log(numero)
 resultado = numero < 0.5
 return numero
}
do {
    contador++
    console.log(`${contador}`)

}while (avanzar() )

if (contador==1){
    console.log(`Se avanz+o ${contador} vez.`)
}else{
    console.log(`Se avanzó ${contador} veces`)
}