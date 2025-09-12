function carregar() {
    var msg = window.document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours() 
    //var hora = 14 //apenas para teste
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = 'imagens/manha-redondo250.png'
        document.body.style.background = '#acb6c2'
    } else if (hora >= 12 && hora <= 18) {
        //boa tarde
        img.src = 'imagens/tarde-redondo250.png'
        document.body.style.background = '#de4606'
    } else {
        //boa noite
        img.src = 'imagens/noite-redondo250.png'
        document.body.style.background = '#031833'
    }
}
