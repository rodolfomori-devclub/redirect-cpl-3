let sec = 12
const startCounter = () => {
    setInterval(counter, 1000)
}

const counter = () => {
    if(sec >= 0 ){
        document.getElementById('timer').innerText = sec--     
    }
    
    if(sec == 0 ){
        setTimeout(()=>{
             window.location.href = 'https://swiy.co/MVP-EP3'
        },1500)
    }
}

 startCounter()
