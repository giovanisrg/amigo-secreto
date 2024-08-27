let listaAmigosArray = []
let sorteioRealizado = false

function adicionar() {
    if (sorteioRealizado == true) {
        return alert('Sorteio realizado, impossivel adicionar participante')
    }
    let nomeAmigo = document.getElementById('nome-amigo')

    if (nomeAmigo.value == '') {
       return alert('Digite um nome para adicionar a lista')
    } else {

    }

    let listaAmigos = document.getElementById('lista-amigos')
    let nomeMinusculo = nomeAmigo.value.toLowerCase()

    if (listaAmigosArray.includes(nomeMinusculo)) {
        alert(`Nome "${nomeAmigo.value}" ja possui na lista, por favor, digite o nome e sobrenome referente a pessoa`)
        nomeAmigo.value = ''
        return
    } else {
        listaAmigosArray.push(nomeMinusculo)
     }

    if (listaAmigos.textContent == '') {
        listaAmigos.textContent = nomeAmigo.value
    } else {
        listaAmigos.textContent = listaAmigos.textContent + ', ' + nomeAmigo.value
    }

    nomeAmigo.value = ''
}

function sortear() {
    if (sorteioRealizado) {
        return alert('Sorteio realizado, não pode sortear novamente')
    }

    if (listaAmigosArray.length < 4) {
        return alert('Adicione no minimo 4 participantes')
    }
    embaralhar(listaAmigosArray)

    let sorteio = document.getElementById('lista-sorteio')
    for (let i = 0; i < listaAmigosArray.length; i++) {
        if (i == listaAmigosArray.length - 1) {
           sorteio.innerHTML = sorteio.innerHTML + listaAmigosArray[i] +' --> ' +listaAmigosArray[0] + '<br/>'
        } else {
           sorteio.innerHTML = sorteio.innerHTML + listaAmigosArray[i] +' --> ' +listaAmigosArray[i + 1] + '<br/>'
        }
    }
    sorteioRealizado = true
}

function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]]
    }
}

function reiniciar() {
    document.getElementById('nome-amigo').value = ''
    sorteioRealizado = false
    listaAmigosArray = []
    document.getElementById('lista-amigos').innerHTML = ''
    document.getElementById('lista-sorteio').innerHTML = ''

}