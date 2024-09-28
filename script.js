function addtask(){
    var taskinput = document.getElementById('taskinput');
    var tasklist = document.getElementById('tasklist');

    if(!taskinput.value.trim()){
        return alert("todo can not empty...")
    }

    var li = document.createElement('li');
    li.textContent = taskinput.value;
    tasklist.appendChild(li);

    var removeButton = document.createElement('button');
    removeButton.textContent='Remove';
    li.appendChild(removeButton);


    removeButton.className='remove-btn';
    removeButton.onclick = function(){
        tasklist.removeChild(li);
    };
    li.onclick=function(){
        li.classList.toggle('completed');
    };
    taskinput.value='';
}
