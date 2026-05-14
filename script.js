let total=0;

function addProduct(){

let product=
document.getElementById("product").value;

let quantity=
document.getElementById("quantity").value;


if(product==""||quantity==""){

alert("Please fill all fields");

return;

}

total++;

document.getElementById("total")
.innerText=total;


let row=
document.createElement("tr");

row.innerHTML=

"<td>"+product+"</td>"+
"<td>"+quantity+"</td>"+
"<td class='status'>In Stock</td>";

document.getElementById("inventory")
.appendChild(row);


document.getElementById("product").value="";

document.getElementById("quantity").value="";

}


document.getElementById("search")
.addEventListener("keyup",function(){

let value=this.value.toLowerCase();

let rows=
document.querySelectorAll("#inventory tr");

rows.forEach(row=>{

row.style.display=
row.innerText.toLowerCase()
.includes(value)
?"":"none";

});

});