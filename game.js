
let print=function(putWord){
  document.getElementById("answer").textContent="Length is " + putWord;
}
 let btn=document.getElementById("button")
 btn.addEventListener("click" ,e => {

  print(document.getElementById("word").value.length)
} )

