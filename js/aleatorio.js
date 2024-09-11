
const nomes = ["goku", "Gugu", "yugiro hanma", "Macaco aranha","Amado batista", "matue", "kiko"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)
