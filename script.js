let white = document.getElementById("white");
let gray = document.getElementById("space_gray");
let img = document.getElementById("mac_pic1");
let text = document.querySelector(".text_under_mac_text");

white.onclick = () => {
    white.style.background = "#0071E3";
    white.style.color = "white";
    gray.style.background = "#CFE7FF";
    gray.style.color = "black";
    img.style.backgroundImage = "url('img.mac/beliy.svg')";
    text.innerHTML = "White";
};

gray.onclick = () => {
    gray.style.background = "#0071E3";
    gray.style.color = "white";
    white.style.background = "#CFE7FF";
    white.style.color = "black";
    img.style.backgroundImage = "url('img.mac/seriy.svg')";
    text.innerHTML = "Space Gray";
};

let price = document.querySelector(".mac_price");
let btns = document.querySelectorAll(".gigabyte");

btns.forEach((btn) => {
    btn.onclick = () => {
        document.querySelector('.selected')?.classList.remove('selected');
        btn.classList.add('selected');
        price.innerText = `$${btn.querySelector('.plus_price').innerText}`;
    }
})