function get_value(){
    var slider = document.getElementById("slider");
    console.log(slider.value);

    var svgimg = document.getElementById("svgimg");
    svgimg.setAttribute("d","M"+slider.value+" 0 q50 10 10 50");
}


