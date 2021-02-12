const buttMore = document.getElementById("port-butt-id");
const buttMore1 = document.getElementById("post-butt-id");
const ninja = document.getElementById("ninja");
const ninja1 = document.getElementById("ninja1");
const email = document.getElementById("email");

buttMore.addEventListener("click", function () {
    ninja.style.display = 'block';
    buttMore.style.display = 'none';
    email.style.margin = "470px 102px 0";
});

buttMore1.addEventListener("click", function () {
    ninja1.style.display = 'block';
    buttMore1.style.display = 'none';
});