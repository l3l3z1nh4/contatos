const section = document.getElementById('section')
let listaContatos = document.getElementById ('lista-contatos')
let nome = document.getElementById('fnome')
let numero = document.getElementById ('fnumero')
let contatos = ''

section.addEventListener ('submit', function(e){
    e.preventDefault();

        addContato()
        atualizaAgenda()
})

function addContato(){
    let inputNome = document.getElementById('fnome')
    let inputNumero = document.getElementById('fnumero')

    let contato = '<tr id="linha-contato">';
        contato += `<td>${nome.value}</td>`
        contato += `<td>${numero.value}</td>`
        contato += '</tr>'
    
        contatos +=  contato 

        inputNome.value = ''
        inputNumero.value = ''
}

function atualizaAgenda(){ 
    listaContatos.innerHTML = contatos
}