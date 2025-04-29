let nombre = document.getElementById('name')
let ingredientes = document.getElementById('ingredients')
let instrucciones = document.getElementById('instructions')
let tiempo = document.getElementById('time')
let porciones = document.getElementById('pieces')
let categoria = document.getElementById('categori')

let dificultad = document.getElementById('dificult').value;



const save = document.getElementById('saved')




function print(){ 
    const finalName = nombre.value;
    const finalingre = ingredientes.value;
    const finalinstruct = instrucciones.value;
    const finaltime = tiempo.value;
    const finalpieces = porciones.value;
    const finalcate = categoria.value;
    const final = ('Nombre:', finalName, 'Ingredientes:', finalingre, 'Instrucciones:', finalinstruct, 'Tiempo:', finaltime, 'Porciones:', finalpieces, 'Categoria:', finalcate)
    const recetaInfo = document.createElement('div')
    recetaInfo.classList.add('receta-box')
    // recetaInfo.style.border = '4px solid black'
    // recetaInfo.style.width = '20%'

    document.body.appendChild(recetaInfo)
    recetaInfo.innerHTML = `
    <p> Receta: ${finalName}</p>
    <p> Ingredientes: ${finalingre}</p>
    <p> Instrucciones: ${finalinstruct}</p>
    <p> Tiempo: ${finaltime}</p>
    <p> Porciones: ${finalpieces}</p>
    <p> Categoria: ${finalcate}</p>
    <p> Dificultad: ${dificultad}</p> 
    
    `

    console.log('Nombre:', finalName, 'Ingredientes:', finalingre, 'Instrucciones:', finalinstruct, 'Tiempo:', finaltime, 'Porciones:', finalpieces, 'Categoria:', finalcate)
}




save.addEventListener('click', () => {
    print(); 
    alert('Receta guardada exitosamente')
})