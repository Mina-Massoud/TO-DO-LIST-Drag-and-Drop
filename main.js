let theInput = document.getElementById('inp') ; 
let AddButton = document.getElementById('btn'); 
let boxs = document.querySelectorAll('.box');
let drag = null ; 
AddButton.onclick = add

function add() { 
 if (theInput.value !== '') {
 boxs[0].innerHTML += `<p class="item" draggable = "true">${theInput.value}`
 theInput.value ='' ;
 dragItem();
}   
  } 

  function dragItem() { 
    let items = document.querySelectorAll('.item'); 
    for (let i =0 ; i<items.length;i++) {
        items[i].addEventListener('dragstart' , function() { 
            drag=items[i];
            items[i].style.opacity='0.5';
        } )
    }
    for (let i =0 ; i<items.length;i++) {
        items[i].addEventListener('dragend' , function() { 
            drag = null ;
            items[i].style.opacity='1';
        } )
    }
    boxs.forEach(box=>{
        box.addEventListener('dragover',function(e) {
            e.preventDefault();
           // make effect 
           this.style.background = 'rgb(104 163 169 / 26%)' ; 
           this.style.color = '#fff' ; 
        } )
        box.addEventListener('dragleave',function() { 
            this.style.background = '#383838' ; 
            this.style.color = '#000' ; 
           
            
        })
        box.addEventListener('drop',function() { 
            box.appendChild(drag);
            this.style.background = '#383838' ; 
            this.style.color = '#000' ; 
        } )
  } ) };



  /// Notes ( 
  // dragstart >> works when u start drag item 
  // dragend >> works when u end drag item 
  // dragover >> works when u start drag item and touch item u put it in event 
  // dragleave >> works when u being away from your item  


  //)