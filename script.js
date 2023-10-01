
$(document).ready(function(){

    $('#cpf').mask('000.000.000-00',{
        placeholder:'CPF: 000.000.000-00'
    });
    $('#cep').mask('00000-000',{
        placeholder:'CEP: 00000-000'
    });
    $('#phone').mask('(00) 00000-0000',{
        placeholder:'tel: (00)00000-0000'
    });

})

$('form').validate({
    rules:{
        nomeCompleto:{
            required:true,
        },
        email:{
            required:true
        },
        cpf:{
            required:true,
        },
        cep:{
            required:true,
        },
        endereco:{
            required:true,
        },
    },
    messages:{
        nomeCompleto:{
            required: 'Por favor, informe seu nome completo'
        },
        email:{
            required:'Por favor, informe seu email',
        },
        cpf:{
            required: 'Por favor, informe seu CPF'
        },
        cep:{
            required: 'Por favor, informe seu CEP'
        },
        endereco:{
            required: 'Por favor, informe seu endereco'
        },
    }
})

