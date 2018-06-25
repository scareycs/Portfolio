function scrollToAnchor(section){
    var aTag = $("a[name='"+ section +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'medium');
}

$("#home").click(function(){
	scrollToAnchor('home');
});

$("#projects").click(function(){
	scrollToAnchor('projects');
});

$("#about").click(function(){
	scrollToAnchor('about');
});

$("#contact").click(function(){
	scrollToAnchor('contact');
});