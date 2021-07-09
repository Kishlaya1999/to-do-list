{
     /* <li class="list-group-item d-flex justify-content-between rounded-pill my-1">items <i class="fas fa-trash-alt pt-1"></i></li> */
}







// newItem.appendAfter(list.lastElementChild);

// console.log(list);

// console.log(newItem);   //use console for checking that the operation (adding new element , adding classes to the element , appending cheld to the elemtnt ,etc) you are performing is actually working or not.

// console.log(icon);

// adding the created element in the list i.e to do list
var addBtn = document.getElementById("add-items");



addBtn.addEventListener("click", function () {
     // console.log("click is working")  for checking that click is working or not

     // creating a new element and adding the appropriate classes to it 
     var li = document.createElement('li'); //adding a new element to HTML using JS
     //adding classes to the newly created html i.e li 
     li.className = 'list-group-item d-flex justify-content-between rounded-pill my-1';
     //adding a new element in the html using js . Its delete icon .Its going to be child of newItem i.e li
     var i = document.createElement('i');
     //adding classes to the icon
     //Always add classes by copying the class names from the original element (ex. /* <li class="list-group-item d-flex justify-content-between rounded-pill my-1">items <i class="fas fa-trash-alt pt-1"></i></li> */) by doing this there will be less risk of errors
     i.className = 'fas fa-trash-alt pt-1';  
     // value in input box 
     var text = document.getElementById('to-do');
     //it is to insert icon the icon in the list
     var ul = document.getElementById("to-do-list"); //parent
     //converting the text int a node and then adding the node to the list element 
     li.appendChild(document.createTextNode(text.value));    //child of li and sibling of i
     li.appendChild(i);                             //child of li and sibling of text
     ul.appendChild(li);
     // TODO : do somethng to reset the input bar when a item is added to the list  

     // deleting a list element 
     
     let deleteBtn=document.querySelectorAll(".fas");
     deleteBtn.forEach(function(del){
          del.addEventListener("click",function(){
               this.parentNode.remove();
          })
     })

     text.value=" ";
});

/* -----------------------------------------------  or -------------------------------------------------- */

// Another way to add EventListener

// addBtn.addEventListener("click",addToDo);

// function addToDo(){

// }

