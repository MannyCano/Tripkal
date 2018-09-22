
function findtotal(){
var arr = document.getElementsByName('price');
var total=0;
 for(var i=0;i<arr.length;i++){
        if(parseInt(arr[i].value))
            total += parseInt(arr[i].value);
    }
   alert("Total is " + total);

   document.getElementById('total').value = total;

}


function modal() {

var modal = document.getElementById('myModal');
var btn = document.getElementById('submit');
var span = document.getElementByClassName("close")[0];


submit.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
}
