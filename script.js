const form = document.querySelector('form');
const button = document.querySelector('button');
const input1 = document.querySelector('#number1');
const input2 = document.querySelector('#number2');

form.addEventListener('submit', (event)=>{
    event.preventDefault();

    if(parseInt(input1.value)>=parseInt(input2.value)){
        alert(`númeor 2 tem que ser maior que o número 1`);
        reset();
    }else{
        alert(`Parabéns, os números estão corretos!!!`);
        reset();
    }
})

function reset(){
    input1.value='';
    input2.value='';
}