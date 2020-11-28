
const input = document.querySelector("#txtTaskName");
const btnDeleteAll = document.querySelector("#btnDeleteAll");
const deleteItem = document.querySelector("#delete-item");
const taskList = document.querySelector("#task-list");
const btnAddNew = document.querySelector("#btnAddNewTask");


eventListeners();

function eventListeners(){
    btnAddNew.addEventListener('click',addNewItem);
    taskList.addEventListener('click',deleteInfo);
    btnDeleteAll.addEventListener('click',DeleteAllItems);
}

function addNewItem(){
    if(input.value !== ""){
            //create li
        const li = document.createElement("li");
        li.setAttribute("class","list-group-item list-group-item-secondary");
        li.appendChild(document.createTextNode(input.value));

        //create a
        const a =document.createElement('a');
        a.classList='delete-item float-right';
        a.setAttribute('href','#');
        a.innerHTML='<i class="fas fa-times"></i>';

        //a to li
        li.appendChild(a);
        taskList.appendChild(li);
        input.value="";
    }
    else{
        alert("Input is Empty");
    }
}

function deleteInfo(e){
    if(e.target.className === "fas fa-times"){
        e.target.parentElement.parentElement.remove();
    }
    e.preventDefault();
}

function DeleteAllItems(e){
    // taskList.innerHTML ="";
    // taskList.childNodes.forEach(function(item){
    //         item.remove();
    // })
    if(confirm("Are you sure")){
        for(let i= 0;i<taskList.children.length;i++){
            taskList.children[i].remove();
        }
    }
    e.preventDefault();
}