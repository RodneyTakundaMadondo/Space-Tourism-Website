$(function(){
    
    $(".hamburger-btn").on("click",()=>{
        $(".side-panel").removeClass("translate-x-full").addClass("translate-x-0");
    })
    $(".close-btn").on("click",()=>{
        $(".side-panel").removeClass("translate-x-0").addClass("translate-x-full");
    })

})