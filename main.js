const form =document.getElementById('form-atividade');
const contatos=[]
const numeros=[]
const spanAdicionado='<span class="resultado adicionado">Adicionado</span>'
const spanAdicionar='<span class="resultado adicionar">Adiconar</span>'
let linhas ='';
form.addEventListener('submit',function(e){
    e.preventDefault()
    adicionaLinha()
    atualizaTabela()
    atualizaMediaFinal()
});
function adicionaLinha(){
    const inputNomeContatos=document.getElementById('nome-contato')
    const inputNumeroContatos=document.getElementById('Numero')
    if(contatos.includes(inputNomeContatos.value)){
        alert(`O Contato: ${inputNomeContatos.value} já foi inserido`)
    }else{
    contatos.push(inputNomeContatos.value)
    numeros.push(parseFloat(inputNumeroContatos.value))
    let linha ='<tr>'
    linha+=`<td>${inputNomeContatos.value}</td>`
    linha+=`<td>${inputNumeroContatos.value}</td>`
    linha+='</tr>'
    
    linhas+=linha
    }
    inputNomeContatos.value='';
    inputNumeroContatos.value='';
}
function atualizaTabela(){
    const corpoTabela=document.querySelector('tbody')
    corpoTabela.innerHTML=linhas
}
function atualizaMediaFinal(){
document.getElementById('contato').innerHTML=adicionado
document.getElementById('contatos-adiconados').innerHTML=adicionado>=0?spanAprovado:spanAdicionar
}