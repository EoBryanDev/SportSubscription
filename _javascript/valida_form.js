//função para totalizar valor de assinatura mensal
function totaliza() {
    total = 0.00;
    //plano mensal
    if (document.getElementsByName('planos')[0].checked)
        total = total + 85.00;
    //plano quadrimestral
    if (document.getElementsByName('planos')[1].checked)
        total = total + 300.00 / 4;
    //plano anual
    if (document.getElementsByName('planos')[2].checked)
        total = total + 600.00 / 12;
    //Premiere econômico
    if (document.getElementsByName('premiere')[0].checked)
        total = total + 60.00;
    //Premiere controle
    if (document.getElementsByName('premiere')[1].checked)
        total = total + 80.00;
    document.getElementById('total').value = total.toFixed(2);
}



var timer = setInterval(timer, 1000)
var contador = 1

function timer() {
    document.getElementById('timer').innerHTML = contador
    contador++
}
//funcao para validar cel
function celRE() {
    var cel = document.getElementById('cel').value
    var celRE = /^\(0[1-9]{2}\)9[0-9]{4}-[0-9]{4} $/

    if (celRE.test(cel)) {
        alert('dados de celular invalidos')
        //document.getElementById('cel').focus()
        return false
    }
    //
    return true
}

//funcao para mascara do cel
function mascaraCelular(press) {
    let cel = press.value

    if (cel.length == 0) {
        press.value = cel += '('
    }
    else if (cel.length == 1) {
        press.value = cel += '0'
    }
    else if (cel.length == 4) {
        press.value = cel += ')'
    }
    else if (cel.length == 10) {
        press.value = cel += '-'
    }
    else {
        press.value = cel
    }
}

//se todos os campos estiverem preenchidos dar o able
var sexoCheck = null
var planoCheck = null
var premiereCheck = null

validaTudo = () => {
    let nome = document.getElementById('nome').value
    let cpf = document.getElementById('cpf').value
    let email = document.getElementById('email').value
    let cel = document.getElementById('cel').value
    let nascimento = document.getElementById('nascimento').value
    let salario = document.getElementById('salario').value

    var sexo = document.getElementsByName('sexo')
    let futebol = document.getElementById('futebol').value
    var planos = document.getElementsByName('planos')
    var premiere = document.getElementsByName('premiere')
    var usuario = [document.getElementById('login').value, document.getElementById('senha').value]






    if (nome == 0 || nome == null) {
        alert('preencha o campo Nome')
        document.getElementById('nome').focus()
        return false
    }
    else if (cpf == 0 || cpf == null) {
        alert('preencha o campo CPF')
        document.getElementById('cpf').focus()
        return false

    }
    else if (email == 0 || email == null) {
        alert('preencha o campo Email')
        document.getElementById('email').focus()
        return false
    }


    else if (nascimento == 0 || nascimento == null) {
        alert('preencha o campo Data de Nascimento')
        document.getElementById('nascimento').focus()
        return false
    }

    else if (salario == 0 || salario == null || '') {
        alert('preencha o campo Salário')
        document.getElementById('salario').focus()
        return false

    }
    // validação de premiere
    for (let i = 0; i < sexo.length; i++) {
        if (document.getElementsByName('sexo')[i].checked) {
            sexoCheck = document.getElementsByName('sexo')[i].value


        }
        //verificar se todos sao checked = false e ai dar a mensagem de alerta        
    }
    if (futebol == 0 || futebol == null || futebol == "") {
        alert('selecione ao menos 1 Time')
        document.getElementById("futebol").focus()
        return false
    }
    // validação de planos
    for (let i = 0; i < planos.length; i++) {
        if (document.getElementsByName('planos')[i].checked) {
            planoCheck = document.getElementsByName('planos')[i].value


        }
        //verificar se todos sao checked = false e ai dar a mensagem de alerta        
        if (document.getElementsByName('planos')[0].checked == false && document.getElementsByName('planos')[1].checked == false && document.getElementsByName('planos')[2].checked == false) {
            alert('Selecione pelo menos um Plano!!')
            return false
        }


    }
    // validação de premiere
    for (let i = 0; i < premiere.length; i++) {
        if (document.getElementsByName('premiere')[i].checked) {
            premiereCheck = document.getElementsByName('premiere')[i].value


        }
        //verificar se todos sao checked = false e ai dar a mensagem de alerta        
        if (document.getElementsByName('premiere')[0].checked == false && document.getElementsByName('premiere')[1].checked == false) {
            alert('Selecione pelo menos um Premiere!!')
            return false
        }


    }
    //verificar se usuários estao ok
    var usuarioPadrao = ['Usuario', 'Abc$123']

    if (usuario[0] == usuarioPadrao[0] && usuario[1] == usuarioPadrao[1]) {
        alert('Dados compatíveis')
        document.getElementById('butassin').disabled = false
    } else {
        alert('Dados incompatíveis')
        document.getElementById('butassin').disabled = true
        return false
    }

clearInterval(timer)
if (contador >=60) {
    console.log(`O tempo para completar o cadastro foi de ${contador/60} minuto(s)`)
}else{
    console.log(`O tempo para completar o cadastro foi de ${contador} segundos`)}

}

//objeto json
function chamarJson() {
    clearInterval(timer)
    
    var objJson = {
        nome: document.getElementById('nome').value,
        cpf: document.getElementById('cpf').value,
        email: document.getElementById('email').value,
        cel: document.getElementById('cel').value,
        nascimento: document.getElementById('nascimento').value,
        salario: document.getElementById('salario').value,
        sexo: document.getElementsByName('sexo'),
        futebol: document.getElementById('futebol').value,
        planos: planoCheck,
        premiere: premiereCheck,
        usuarioJson: ['Usuario', 'Abc$123']

    }

    if (objJson.sexo[0].checked) {
        objJson.sexo = 'Masculino'
    } else {
        objJson.sexo = 'Feminino'
    }

    var json = JSON.stringify(objJson)
    console.log(json)
    document.write("<h1>Elemento JSON</h1>")
    document.write(json)

    if (contador >=60) {
        document.write(`O tempo para completar o cadastro foi de ${contador/60} minuto(s)`)
    }else{
        document.write(`O tempo para completar o cadastro foi de ${contador} segundos`)
    
    }
    
    

    return json
}
