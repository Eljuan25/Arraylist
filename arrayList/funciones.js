
document.getElementById("btnEliminarDuplicados").addEventListener("click", eliminarDuplicadosyMostrar);
document.getElementById("btnCombinarListasOrdenadas").addEventListener("click", combinarListasOrdenadasyMostrar);
document.getElementById("btnEliminarMayoresQue10YOrdenar").addEventListener("click", eliminarMayoresQue10YOrdenaryMostrar);
document.getElementById("btnEliminarImpares").addEventListener("click", eliminarImparesyMostrar);
document.getElementById("btnEliminarElementosDeOtraLista").addEventListener("click", eliminarElementosDeOtraListayMostrar);




function eliminarDuplicadosyMostrar() {
    const listaOriginal = [1, 2, 2, 3, 4, 5, 5];
    const listaSinDuplicados = eliminarDuplicados(listaOriginal);
    alert("Lista sin duplicados: " + listaSinDuplicados);
}

function combinarListasOrdenadasyMostrar() {
    const lista1 = [1, 3, 5];
    const lista2 = [2, 4, 6];
    const listaCombinadaOrdenada = combinarListasOrdenadas(lista1, lista2);
    alert("Lista combinada y ordenada: " + listaCombinadaOrdenada);
}

function eliminarMayoresQue10YOrdenaryMostrar() {
    const listaOriginal = [11, 3, 15, 8, 9, 12, 4, 17, 6, 2];
    const listaFiltradaOrdenada = eliminarMayoresQue10YOrdenar(listaOriginal);
    alert("Lista filtrada y ordenada: " + listaFiltradaOrdenada);
}

function eliminarImparesyMostrar() {
    const listaOriginal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const listaSinImpares = eliminarImpares(listaOriginal);
    alert("Lista sin impares: " + listaSinImpares);
}

function eliminarElementosDeOtraListayMostrar() {
    const lista1 = [1, 2, 3, 4, 5];
    const lista2 = [3, 4, 5, 6, 7];
    const listaFiltrada = eliminarElementosDeOtraLista(lista1, lista2);
    alert("Lista filtrada: " + listaFiltrada);
}