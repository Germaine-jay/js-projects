const myform = document.querySelector('#form-input');
const task = document.querySelector('#task');
const msg = document.querySelector('.msg');
const tasklist= document.querySelector('#items');
const filter= document.querySelector("#task-search");
const editbutton = document.querySelector("#edit");


myform.addEventListener('submit', addevent);
tasklist.addEventListener('click', deleteitem);
tasklist.addEventListener('click', edititem);
filter.addEventListener('keyup', filteritems);
tasklist.addEventListener('click', complete);


function addevent(d){
    d.preventDefault();

    const li = document.createElement('li');
        li.appendChild(document.createTextNode(
        task.value))
        li.classList.add('item')

        tasklist.appendChild(li);
        task.value = '';
        // li.className = 'item'
        
        const button = document.createElement('button');
        button.className = 'btn btn-secondary';
        button.appendChild(document.createTextNode('x'));
        li.appendChild(button);
        
        const buttons = document.createElement('button');
        buttons.className = 'btn-sm';
        buttons.appendChild(document.createTextNode('Edit'));
        li.appendChild(buttons);

        const completebtn = document.createElement('button');
        completebtn.className = 'btn-sb';
        completebtn.appendChild(document.createTextNode('Completed'));
        li.appendChild(completebtn);
        
}


function deleteitem(e){
    if(e.target.classList.contains('btn-secondary')){
        if(confirm('Are you sure you want to delete this?')){
            const li = e.target.parentElement;
            tasklist.removeChild(li);
        }
    }
}


function complete(e){
    if(e.target.classList.contains('btn-sb')){
        const items = e.target.parentElement;
        items.classList.add('completed')
        items.firstElementChild.nextElementSibling.classList.add('hide')
    }
}


function edititem(c){
    
    const completed = c.target.parentElement.classList.contains('completed')

    if(c.target.classList.contains('btn-sm') && !completed){
        const existing_item = c.target.parentElement.firstChild.textContent;
        const newtask = prompt(`Edit task: ${existing_item}`);

        if(newtask == null || newtask ===""){
            msg.className = 'error';
            msg.innerHTML = 'input cant be empty';
            setTimeout(() => msg.remove(), 2000);
        }
        else{
            const editeditem = c.target.parentElement
            editeditem.textContent = newtask

            const button = document.createElement('button');
            button.className = 'btn btn-secondary';
            button.appendChild(document.createTextNode('x'));
            editeditem.appendChild(button);

            const buttons = document.createElement('button');
            buttons.className = 'btn-sm';
            buttons.appendChild(document.createTextNode('Edit'));
            editeditem.appendChild(buttons);

            const completebtn = document.createElement('button');
            completebtn.className = 'btn-sb';
            completebtn.appendChild(document.createTextNode('Completed'));
            editeditem.appendChild(completebtn);
        }
    }
}


function filteritems(e){
    const text = e.target.value.toLowerCase();
    const items = tasklist.getElementsByTagName('li');
    
    Array.from(items).forEach(function(item){
        const itemname = item.firstChild.textContent;

        if(itemname.toLowerCase().indexOf(text) != -1){
            item.style.display = 'float right'
            }
        else{
            item.style.display = 'none';
            }
    });
}