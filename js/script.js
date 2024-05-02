var delete1 = document.getElementById("delete")
var pop=document.querySelector(".blank")
var pop1=document.querySelector(".adding")

function deletebook(event){
    event.target.parentElement.remove()
}

add=document.getElementById("add1")

add.addEventListener("click",function(event){
    pop.style.display="block"
    pop1.style.display="block"    
}
)

cancel=document.getElementById("cancel")

cancel.addEventListener("click",function(event){
    event.preventDefault()
    pop.style.display="none"
    pop1.style.display="none"    
}
)

var title=document.getElementById("title")
var sub=document.getElementById("subject")
var textarea=document.getElementById("textarea")
var adding1=document.getElementById("addding")
function add11(event){
    event.preventDefault()
   var div=document.createElement("div")
   div.innerHTML=`<div class="container"><h4>${title.value}</h4>
   <div>${sub.value}</div>
   <p>${textarea.value}</p>
   <button class="delete" onclick="deletebook(event)">delete</button></div>`
   adding1.append(div)
   div.style.display="inline-block"
   pop.style.display="none"
   pop1.style.display="none"   
}