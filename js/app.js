const tipoIngresso = document.getElementById('tipo-ingresso');
const quantidade = document.getElementById('qtd');
let quantidadeSobra;

const comprar = () => {
    quantidadeSobra = document.getElementById(`qtd-${tipoIngresso.value}`);
    if(parseInt(quantidade.value) <= 0){
        return alert(`Quantidade indisponível para ${tipoIngresso.value}`);
    }
    if(parseInt(quantidadeSobra.textContent) <= 0){
        return alert(`Quantidade indisponível para ${tipoIngresso.value}`);
    }
    return parseInt(quantidadeSobra.innerText -= quantidade.value);
};
