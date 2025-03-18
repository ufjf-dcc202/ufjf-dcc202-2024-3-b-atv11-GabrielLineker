const lista = ["Um", "Dois", "Três"];

export function getLista(){
    return structuredClone(lista);
}

export function limpalista(){
    lista.splice(0);
}