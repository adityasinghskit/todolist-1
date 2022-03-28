let todoarr=JSON.parse(localStorage.getItem("todokey"));

loadtodo(todoarr);

function loadtodo(todoarr){
    document.querySelector("tbody").innerHTML="";
todoarr.map(function(el,ind) {
    let tr1=document.createElement("tr");
    let td1=document.createElement("td");
    td1.innerText=el.name;
    let td2=document.createElement("td");
    td2.innerText=el.qty;
    let td3=document.createElement("td");
    td3.innerText=el.priority;
    let td4=document.createElement("p");
    td4.innerText="Mark as Complete";
    td4.onclick=function(){
        comptodo(el,ind);
    }
    td4.style.color="red";
    td4.style.cursor="pointer";
    tr1.append(td1,td2,td3,td4);
    document.querySelector("tbody").append(tr1);

})
}

function comptodo(el,ind) {
    let comparr=JSON.parse(localStorage.getItem("compkey")) || [];
    comparr.push(el);
    localStorage.setItem("compkey",JSON.stringify(comparr));
    todoarr.splice(ind,1);
    localStorage.setItem("todokey",JSON.stringify(todoarr));
    loadtodo(todoarr);
}