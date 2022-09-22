//GET ELEMENT BY ID
//console.log(document.getElementById('to-do'));
//let headerElement = document.getElementById('header');
    //console.log(headerElement.textContent);
   /* console.log(headerElement.innerText);  //textContent or innerText Can Change HTML Value
    console.log(headerElement.innerHTML);
    console.log(typeof(headerElement));
    headerElement.style.borderBottom = "1px solid red" //Change of CSS Style
    console.dir(document)*/


    //---------------------------GET ELEMENT BY CLASS-------------------
    //let items = document.getElementsByClassName('item')/*[2]*/;
   /* let itemUL = document.getElementById('item');
    let itims = itemUL.getElementsByClassName('item');
    for(let i=0; i<itims.length; i++){
        itims[i].style.color = 'red';
    }*/


    //---------------------- Tag Name ---------------------
   /* let tagName = document.getElementsByTagName('img');
    for(let i=0; i<tagName.length; i++){
        tagName[i].style.borderBottom = '7px solid red'
    }*/


    //------------------------- Query Selector --------------------

   /* let header =document.querySelector('.heading');
    console.log(header)
    let lastItem =document.querySelector('.item:nth-child(2)');
    console.log(lastItem)
    let lastItems =document.querySelectorAll('.item:last-child');
    for(let element of lastItems){
        element.style.color = "red"
    }*/


    //------------- Parent / Children ---------------
    /*const grandparent = document.querySelector('.liyem');
    //const parent = grandparent.children;
    const children = grandparent.querySelectorAll('.item');
    console.log(children);*/

   /* const children = document.querySelector('.item');
    //const parent = children.parentElement;
    const grandparent = children.closest('.to-do-list');
    console.log(grandparent);*/

    /*const childrenOne = document.querySelector('.item');
    const childrenTwo = childrenOne.nextElementSibling;    
    childrenTwo.style.color = "red"
    console.log(childrenTwo);*/

    //--------------- Manipulate ----------------
    const divElement = document.createElement('div');
    divElement.className = 'newDiv';
    divElement.setAttribute('id', 'Red');
    divElement.setAttribute('title', 'Red');

    const container = document.querySelector('.todo-list');
    const h2Element = container.querySelector('h2');
    container.insertBefore(divElement, h2Element);



