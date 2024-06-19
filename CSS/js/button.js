var count = 0;
document.getElementById("myButton").onclick = function() {
    count++;
    if (count % 2 == 0) {
        document.getElementById("demo").innerHTML = "";
    } else {
        var img = document.createElement("img");
        img.src = "https://get.wallhere.com/photo/2689x2590-px-animals-cats-fluffy-glance-grey-kittens-wallpapers-1916159.jpg";
        document.getElementById("demo").appendChild(img);
    }
}
