function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    res.innerHTML = ''
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imagens/menino-crianca250.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/menino-jovem250.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/homem-adulto250.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/homem-idoso250.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imagens/menina-crianca250.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/menina-jovem250.png')
            } else if (idade < 50) { 
                //adulto
                img.setAttribute('src', 'imagens/mulher-adulta250.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/mulher-idosa250.png')
            }
        }

       // res.style.textAlign = 'center'
       // res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
       // res.appendChild(img)
       let textoResultado = document.createElement('p');
        textoResultado.innerHTML = `Detectamos ${gênero} com ${idade} anos.`;
        res.appendChild(textoResultado);
        res.appendChild(img);
    }
}
