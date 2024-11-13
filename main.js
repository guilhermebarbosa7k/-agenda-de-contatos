const form =document.getElementById('form-atividade');
const imgVerificado ='<img src="./imagens/verificado.png" alt="verificado"/>'
const contatos=[]
const numeros=[]
let linhas ='';
form.addEventListener('submit',function(e){
    e.preventDefault()
    adicionaLinha()
    atualizaTabela()
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
    linha+=`<td>${inputNumeroContatos.value=imgVerificado}</td>`
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