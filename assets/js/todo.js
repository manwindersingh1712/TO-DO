//check the list item i.e. gray color and line thorugh
$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
})

//fadeout a list item (it means all span inside ul when clicked will be executed)
$("ul").on("click","span",function(event){

	event.stopPropagation();

	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
})

//Add an element
$("input[type='text'").keypress(function(event){

if(event.which===13){
	$("ul").append("<li><span><i class='fas fa-trash'></i></span>    "+$(this).val())+"</li>";
	$(this).val("");
}

});

$("h1").on("click","i",function(){
	$("input[type='text'").fadeToggle(300);
})


