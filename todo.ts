let getinput=document.querySelector(".input") as HTMLInputElement
let getstarted=document.querySelector(".inpbtn") as HTMLButtonElement
getstarted?.addEventListener("click",listing)


let liu=JSON.parse(localStorage.getItem('li'))

let i:number=0
let getlocalval;

while(i<liu.length){
    getlocalval=liu[i]
    let unorderlist=document.querySelector(".unli") as HTMLElement
    
    let list=document.createElement("li")
    list.classList.add("list")
    list.textContent=getlocalval


    let strike=document.createElement("input")
    strike.type="checkbox"
    strike.style.cursor="pointer"
    strike.style.userSelect= 'none';
    strike.classList.add("liinp")



    let span=document.createElement("span")
    span.classList.add("spcl")
    span.textContent='X'
    span.style.cursor="pointer"
    span.style.userSelect= 'none';
    span.onclick = function() {
        unorderlist.removeChild(list);
    };


    
    strike.onclick=function (){
        if(strike.checked==true){
        list.style.textDecoration="Line-Through";
        span.style.textDecoration="none";
        }
        else{
            list.style.textDecoration="none";    
        }
    }

    unorderlist?.appendChild(list)
    list.prepend(strike)
    list.appendChild(span)

    i++
}


let arr:any[]=[]


function listing(){

    let value=getinput.value

    let unorderlist=document.querySelector(".unli") as HTMLUListElement
    
    let list=document.createElement("li")
    list.classList.add("list")
    list.textContent=value
    arr.push( list.textContent)

    let strike=document.createElement("input")
    strike.type="checkbox"
    strike.style.cursor="pointer"
    strike.style.userSelect= 'none';
    strike.classList.add("liinp")



    let span=document.createElement("span")
    span.classList.add("spcl")
    span.textContent='X'
    span.style.cursor="pointer"
    span.style.userSelect= 'none';
    span.onclick = function() {
        unorderlist.removeChild(list);
    };


    
    strike.onclick=function (){
        if(strike.checked==true){
        list.style.textDecoration="Line-Through";
        span.style.textDecoration="none";
        }
        else{
            list.style.textDecoration="none";    
        }
    }

    unorderlist?.appendChild(list)
    list.prepend(strike)
    list.appendChild(span)


    getinput.value=""


    let listval=arr.map((value)=>{
        return value
    })
    localStorage.setItem("li",JSON.stringify(listval))
}


document.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        if(getinput.value===""){
            window.alert("Go-ahead with daily Goals")
        }else{
            listing()
            
        }
      }
  });