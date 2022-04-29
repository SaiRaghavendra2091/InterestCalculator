let dum=false
let num=1
function addEntry(){
    let x=document.getElementById("name").value
    let y=document.getElementById("balance").value
    let z=calcInterest(y)
    document.getElementById("table").innerHTML += (dum==true)?`
    <tr  class="grey">
    <td id="4"></td>
    <td id="1"></td>
    <td id="2"></td>
    <td id="3"></td>
    </tr>
    `:
    `
    <tr>
    <td id="4"></td>
    <td id="1"></td>
    <td id="2"></td>
    <td id="3"></td>
    </tr>
    `
    if(dum===false){
        dum=true;
    }
    else{
        dum=false;
    }
    document.getElementById("1").innerText=x
    document.getElementById("2").innerText=y
    document.getElementById("3").innerText=z
    document.getElementById("4").innerText=num
    document.getElementById("1").removeAttribute("id");
    document.getElementById("2").removeAttribute("id");
    document.getElementById("3").removeAttribute("id");
    document.getElementById("4").removeAttribute("id");
    num++;
}
let dum1=false
function displayDetails(){
     if(dum1===false){
        document.getElementById("Entries").style="display: block;"
        dum1=true
    }
    else{
        document.getElementById("Entries").style="display: none;"
        dum1=false
    }
}

function calcInterest(z){
    z = Number(z)
    if(z > 200000){
        z += z * 0.1
        z -= z * 0.002
        return z
    }
    else if(z > 100000){
        z += z * 0.05
        z -= z * 0.0005
        return z
    }
    else{
        z += z * 0.03
        return z
    }
}