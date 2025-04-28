let nombre = document.getElementById('name')
let ingredientes = document.getElementById('ingredients')
let instrucciones = document.getElementById('instructions')
let tiempo = document.getElementById('time')
let porciones = document.getElementById('pieces')
let categoria = document.getElementById('categori')

let dificultad = document.getElementById('dificult')


const recetaInfo = document.createElement('div')
document.body.appendChild(recetaInfo)


const save = document.getElementById('saved')




function print() {
    const finalName = nombre.value.toLowerCase();
    const finalingre = ingredientes.value.toLowerCase();
    const finalinstruct = instrucciones.value.toLowerCase();
    const finaltime = tiempo.value.toLowerCase();
    const finalpieces = porciones.value.toLowerCase();
    const finalcate = categoria.value.toLowerCase();
    const final = ('Nombre:', finalName, 'Ingredientes:', finalingre, 'Instrucciones:', finalinstruct, 'Tiempo:', finaltime, 'Porciones:', finalpieces, 'Categoria:', finalcate)
    recetaInfo.innerHTML = 
    <p> Receta: ${final}</p>

    console.log('Nombre:', finalName, 'Ingredientes:', finalingre, 'Instrucciones:', finalinstruct, 'Tiempo:', finaltime, 'Porciones:', finalpieces, 'Categoria:', finalcate)
}




save.addEventListener('click', () => {
    print(); 
})