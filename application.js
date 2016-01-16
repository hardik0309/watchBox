$(document).ready().function
{
	$(".search").focus();
	$(".tabs").on('mouseover','li',function()
	{
		
			$(this).find('i').css('color','#25506B');
	});
	$(".tabs").on('mouseout','li',function()
	{
		if(!$(this).hasClass('active'))
		$(this).find('i').css('color','gray');
	else
	$(this).find('i').css('color','white');
	});
	$(".col-sm-6").on('mouseenter',function()
	{

		
			$(this).find('.thumb-title').first().fadeIn('fast');
	});
	$(".col-sm-6").on('mouseleave',function()
	{
		
			$(this).find('.thumb-title').first().fadeOut('fast');
	});
	$('.options').find('.fa-heart').on('click',function(){$(this).toggleClass('highlighted');});

}
