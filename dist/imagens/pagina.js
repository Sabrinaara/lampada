const turnOn = document.getElementById ('turnOn')
const off = document.getElementById ('off')
const lampada = document.getElementById ('lampada')


function isLampBroken () {
    return lampada.src.indexOf('quebrada') > -1
}



function lampOn () {
    if (!isLampBroken ()){
        lampada.src = '/imagens/ligar.png'
    }
   
    
}

function lampOff () {
   
    if (!isLampBroken ()){
        lampada.src = '/imagens/desligada.jpg'
        console.log(lampada.src)
    }
   
}

function lampbreak () {
lampada.src = "/imagens/quebrada.jpg"

}


turnOn.addEventListener ('click', lampOn)

off.addEventListener ('click', lampOff)


lampada.addEventListener ('mouseover', lampOn)

lampada.addEventListener ('mouseleave', lampOff)


lampada.addEventListener ('dblclick', lampbreak)























