let ajout = document.getElementById("ajout")
let ajout1 = document.getElementById("ajout1")
let ajout2 = document.getElementById("ajout2")
let moin = document.getElementById("moin")
let moin1 = document.getElementById("moin1")
let moin2 = document.getElementById("moin2")
let carre = document.getElementById("carre")
let index = 0;
let divenfant1 = document.getElementById("divenfant1")

ajout.addEventListener('click',()=>{
    index = index + 9;
    divenfant1.innerHTML = index;
})
ajout1.addEventListener('click',()=>{
    index = index + 11.50;
    divenfant1.innerHTML = index;
})
ajout2.addEventListener('click',()=>{
    index = index + 13;
    divenfant1.innerHTML = index;
})
moin.addEventListener('click',()=>{
    index = index - 9;
    divenfant1.innerHTML = index;
})
moin1.addEventListener('click',()=>{
    index = index - 11.50;
    divenfant1.innerHTML = index;
})
moin2.addEventListener('click',()=>{
    index = index - 13;
    divenfant1.innerHTML = index;
})
carre.addEventListener('click',()=>{
    index = index - 2;
    divenfant1.innerHTML = index;
})

