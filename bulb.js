let btn = document.querySelector(".switch");
let dot = document.querySelector(".dot");

let bulb = document.querySelector(".bulb-light");

btn.addEventListener('click', active => {;
    if (dot.classList.contains('activedot')){
        dot.classList.remove('activedot');
        dot.classList.add('passivedot');
    }
    else{
        dot.classList.add('activedot')
        dot.classList.remove('passivedot')
    };
    if (bulb.classList.contains('activelight')){
        bulb.classList.remove('activelight');
        bulb.classList.add('passivelight');
    }
    else{
        bulb.classList.add('activelight')
        bulb.classList.remove('passivelight')
    }
    
    
    //nieudana próba z toggle
    //bulb.classList.toggle('activelight');
    //bulb.classList.toggle('passivelight');
})

