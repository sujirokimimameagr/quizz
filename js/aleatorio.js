const nomes = ["Fernanda","Giuliana","Maria Eduarda","Marcelo","Amanda","Gabriel"];

export function aleatorio (listas){
    const posicao = Math.floor(Math.random()*listas.length);
    return listas[posicao];
}

export const nome = aleatorio(nomes)