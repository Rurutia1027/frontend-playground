// first we need to get the object in the index by its id 
// and then we can bind an event listener to the item/object 
// and then we can code series of evens handlers, those handlers' inner logic will be triggered once the 
// item(the menu button) associated events/actions happend 

// and the signature of the addEventListener is 
// 1st: the event name 
// 2st: the event handlers -- what to do to react to the correspoinding events/actions that happend upon the item/object of the 'menu-btn'
// this expression is also ok
// document.get.getElementById('menu-btn').addEventListener('click', () => { console.log("anonumous function expression is ok here ");  })


const btn = document.getElementById('menu-btn'); 

const menu = document.getElementById('menu'); 

btn.addEventListener('click', navToggle); 

function navToggle() { 
    btn.classList.toggle('open'); 
    menu.classList.toggle('flex'); 
    menu.classList.toggle('hidden'); 
}

