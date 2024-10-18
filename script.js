function generarClave() {
    let letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let numeros = '0123456789';
    
    // Generar 4 letras aleatorias
    let claveLetras = '';
    for (let i = 0; i < 4; i++) {
        claveLetras += letras.charAt(Math.floor(Math.random() * letras.length));
    }
    
    // Generar 3 números aleatorios
    let claveNumeros = '';
    for (let i = 0; i < 3; i++) {
        claveNumeros += numeros.charAt(Math.floor(Math.random() * numeros.length));
    }

    // Mostrar la clave en el recuadro
    document.getElementById("result").textContent = claveLetras + claveNumeros;
}
