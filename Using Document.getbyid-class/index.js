// //using Id

// console.log(document.getElementById("btn"));
// let submit= document.getElementById("btn")
// submit.addEventListener("click" , function(){
//     this.style.backgroundColor= "red";
//     this.style.border= "none";
//     this.style.width= "100px";
//     this.style.height= "50px";
//     this.style.borderRadius= "10px"
// })

//using class

let head= document.getElementsByClassName("container")
for (var i = 0 ; i<head.length; i++){
    console.log(head[i]);



head[i].addEventListener("click", function(){
    for (var j = 0 ; j<head.length ; j++ ){
        head[j].style.backgroundColor= 'red'
    }

})
}
