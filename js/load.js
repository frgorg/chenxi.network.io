window.onload=function(){
	let divTyping = document.getElementById("text");
	let i = 0,
		timer = 0,
		str = '千里之行，始于足下。'
	function typing()
	{
		if (i <= str.length)
		{
			divTyping.innerHTML = str.slice(0, i++) + '_'
			timer = setTimeout(typing, 80)
		}else
		 {
			divTyping.innerHTML = str 
			clearTimeout(timer)
            setTimeout(function(){$("#content").animate({height:'80%'},100)},300);
		}
	}
	typing();
}