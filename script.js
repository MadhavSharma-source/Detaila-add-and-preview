let form=document.querySelector("form");
let input=document.querySelectorAll("input");
let body=document.querySelector("body")
form.addEventListener("submit",function(data){
    data.preventDefault();
    let d1=document.createElement("div");
    d1.classList.add("d1");

    let profile=document.createElement("div");
    profile.classList.add("profile");

    let img=document.createElement("img");
    img.classList.add("img");
    img.setAttribute("src",input[0].value);

    let h3=document.createElement("h3");
    h3.textContent=input[1].value;
    let profession=document.createElement("h5");
    profession.textContent=input[2].value;
    let description=document.createElement("h5");
    profession.textContent=input[3].value;
    profile.appendChild(img);
    d1.appendChild(profile);
    d1.appendChild(h3);

    d1.appendChild(profession);
    d1.appendChild(description);

    body.appendChild(d1);
    input.forEach(function(d){
        if(d.type !== "submit"){
            d.value="";
        }
    })
}
)
