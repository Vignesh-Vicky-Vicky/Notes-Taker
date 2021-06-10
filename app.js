let inputtitle = document.getElementById("inputvalue");
let textarea = document.getElementById("textarea");
let button = document.getElementById("button");
let container = document.getElementById("outputContainer");


button.addEventListener('click', function () {

    if (inputtitle.value == "" ||textarea.value == ""){
        alert("Enter Required Fields")
    }
    else {

        var div = document.createElement('div');
        div.classList = "notes"

        var h2 = document.createElement('h2');
        h2.innerText = inputtitle.value;

        var para = document.createElement('p');
        para.innerText = textarea.value;

        div.appendChild(h2);
        div.appendChild(para);
        container.appendChild(div);
        
        inputtitle.value = "";
        textarea.value = "";
    }

});