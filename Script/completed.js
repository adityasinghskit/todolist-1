let comparr=JSON.parse(localStorage.getItem("compkey"));

loadcomptodo();

function loadcomptodo() {
comparr.map(function(el) {
    let tr1=document.createElement("tr");
    let td1=document.createElement("td");
    td1.innerText=el.name;
    let td2=document.createElement("td");
    td2.innerText=el.qty;
    let td3=document.createElement("td");
    td3.innerText=el.priority;
    tr1.append(td1,td2,td3);
    document.querySelector("tbody").append(tr1);

})

}