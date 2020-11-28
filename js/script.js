const container = document.querySelector(".container");


// Create Element
const createElement = function(el){
    return document.createElement(el);
}

//Create Attribute
const createAttribute = function(elm,attr,attrName){
    return elm.setAttribute(attr,attrName);
}



const h1 = createElement("h1");
createAttribute(h1,"class","app-title");
createAttribute(h1,"id","header");
h1.innerText="JavaScript";
h1.style.textAlign="center";
h1.style.color="grey";
container.appendChild(h1);

const firstCard = createElement("div");
createAttribute(firstCard,"class","card");
container.appendChild(firstCard);

const secondCard = createElement("div");
createAttribute(secondCard,"class","card mt-3");
container.appendChild(secondCard);


const cardHeader = createElement("div");
createAttribute(cardHeader,"class","card-header");
cardHeader.textContent="New Task";
firstCard.appendChild(cardHeader);

const cardBody = createElement("div");
createAttribute(cardBody,"class","card-body");
firstCard.appendChild(cardBody);


const form = createElement("form");
createAttribute(form,"id","addTaskForm");
createAttribute(form,"method","POST");
cardBody.appendChild(form);

const inpGroup = createElement("div");
createAttribute(inpGroup,"class","input-group mb-3");
form.appendChild(inpGroup);

const inp = createElement("input");
createAttribute(inp,"class","form-control");
createAttribute(inp,"id","txtTaskName");
createAttribute(inp,"name","taskName");
createAttribute(inp,"type","text");
createAttribute(inp,"name","taskName");
createAttribute(inp,"placeholder","Type a new task");
createAttribute(inp,"aria-describedby","btnAddNewTask");
inpGroup.appendChild(inp);

const inpAppend = createElement("div");
createAttribute(inpAppend,"class","input-group-append");
inpGroup.appendChild(inpAppend);


const btnAdd = createElement("button");
createAttribute(btnAdd,"class","btn btn-primary");
createAttribute(btnAdd,"id","btnAddNewTask");
createAttribute(btnAdd,"type","button");
inpAppend.appendChild(btnAdd);

const fontAdd = createElement("i");
createAttribute(fontAdd,"class","fas fa-plus");
btnAdd.appendChild(fontAdd);

//secondCard

secondCard.appendChild(cardHeader);

const DeleteAll = createElement("a");
createAttribute(DeleteAll,"class","btn btn-outline-danger btn-sm delete-all float-right");
createAttribute(DeleteAll,"id","btnDeleteAll");
createAttribute(DeleteAll,"href","#");
DeleteAll.textContent="Delete All";
secondCard.children[0].appendChild(DeleteAll);


const navs = createElement("ul");
createAttribute(navs,"class","list-group");
createAttribute(navs,"id","task-list");
secondCard.appendChild(navs);




