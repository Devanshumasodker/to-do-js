const inpbox = document.getElementById("inpbox");
const listcont = document.getElementById("licont");

document.querySelector("#jss").addEventListener("click",function(){
  if(inpbox.value === '')
  {alert("you must write something"); }

  else{
    let li = document.createElement("li");
    li.innerHTML = inpbox.value;
    listcont.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00D7";
    li.appendChild(span);

    
  }
    inpbox.value = "";
    saveD();

});

// function AddTask() {
//     if(inpbox.value === ''){
//         alert("you must write something");
//     }
//     else{ 
//         let li = document.createElement("li");
//         li.innerHTML = inpbox.value;
//         listcont.appendChild(li);
//       }
// }



listcont.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveD();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveD();
    }
},false);

function saveD(){
    localStorage.setItem("data",listcont.innerHTML);
}


function showTa(){
    listcont.innerHTML = localStorage
}
