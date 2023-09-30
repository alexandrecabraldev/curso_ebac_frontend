const form = $('form');
const ul = $('ul');
const input = $('input');

form.on('submit',(event)=>{
    event.preventDefault();

    const inputValue = input.val();
    ul.append('<li>' + inputValue + '</li>')
    input.val('');
})

ul.on('click','li',function(){
    $(this).css('text-decoration', 'line-through');
})
