document.querySelector("form").addEventListener("submit",addtodo);

function addtodo() {
    event.preventDefault();
    let name1=document.querySelector("#name").value;
    let qty1=document.querySelector("#qty").value;
    let priority1=document.querySelector("#priority").value;

    let obj={
        name:name1,
        qty:qty1,
        priority:priority1

    }

    let todoarr=JSON.parse(localStorage.getItem("todokey")) || [];
    todoarr.push(obj);
    localStorage.setItem("todokey",JSON.stringify(todoarr));
    window.location.reload();
}