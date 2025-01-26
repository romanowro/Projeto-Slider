
let btnNext= document.querySelector('.next')

let btnBack = document.querySelector('.back')

let container = document.querySelector(".container")

let list = document.querySelector('.container .list')

let thumb = document.querySelector('.container .thumb')

/*Funçao para mover os items ao ser clicado*/

btnNext.onclick = () => moverItemOnClick('next')
btnBack.onclick = () => moverItemOnClick('back')

function moverItemOnClick(type){

    let listItems = document.querySelectorAll('.list .list-item')
    let thumbItems = document.querySelectorAll('.thumb .thumb-item')

        if(type === 'next'){

            list.appendChild(listItems[0])
            thumb.appendChild(thumbItems[0])

            container.classList.add('next')


        }else{

            list.prepend(listItems[listItems.length -1])
            thumb.prepend(thumbItems[thumbItems.length -1])
            container.classList.add('back')

        }

        setTimeout(() => {
            container.classList.remove('back')
            container.classList.remove('next')
            
        }, 3000);
 
}



