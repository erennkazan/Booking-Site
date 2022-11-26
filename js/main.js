
//mobil görünümde butona tıklandıgında menü ekrana gelir
$(".Header-switch").on("click",function(){
    if($("Header").is(".menu-show")){
        $(".Header").removeClass("menu-show")
    }else{
        $(".Header").addClass("menu-show")
    }
})
//


$('.Highligths-slider').flickity({
    cellAlign: 'left',
    contain: true,
    prevNextButtons: false,
    pageDots: false
  });