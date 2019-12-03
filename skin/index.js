// 长宽占位 rem算法, 根据root的rem来计算各元素相对rem, 默认html 320/20 = 16px; 
function placeholderPic(){
var w = document.documentElement.offsetWidth; 
if(w>900){
	document.documentElement.style.fontSize=50+'px';
}else{
	document.documentElement.style.fontSize=w/15+'px';
}
}
placeholderPic();
window.onresize=function(){
placeholderPic();
}

function ifffd(event) {
		$(".ifffds").attr('class','');
		event.firstElementChild.checked=true;
		event.classList.add("ifffds");
}
function ifff(event) {
		event.firstElementChild.checked=true;
		event.classList.add("ifffds");
}
function ttcheckedmn(event) {
		event.style.display='none';
		event.nextElementSibling.style.display='block';
}
function ttcheckedmp(event) {
		event.style.display='none';
		event.previousElementSibling.style.display='block';
}
function answerDiv1(event) {
		event.parentElement.style.display='none';
		event.parentElement.nextElementSibling.style.display='block';
}
	$(document).ready(function() {
		$(".ttschecked").click(function(){
			$(this).siblings().attr('class','ttschecked');
			$(this).attr('class','ttchecked');
			$(this).children(1).checked="checked";
		});
		$("#tttext").click(function(){
			$("#tttextul").css('display','flex');
		});
		$("#tttextul").children().children().click(function(){
			$("#tttextul").children("ul").children("li").css('color','#757575');
			$(this).css('color','red');
			$("#tttext").text($(this).text());
			$("#tttext").css('color','#000');
			$("#job").val($(this).text());
			$("#tttextul").css('display','none');
		});
		$("#sexer").click(function(){
			$("#sexerul").css('display','flex');
		});
		$("#sexerul").children().children().click(function(){
			$("#sexerul").children("ul").children("li").css('color','#757575');
			$(this).css('color','red');
			$("#sexer").text($(this).text());
			$("#sexer").css('color','#000');
			$("#sex").val($(this).text());
			$("#sexerul").css('display','none');
		});
		$("#ageer").click(function(){
			$("#ageerul").css('display','flex');
		});
		$("#ageerul").children().children().click(function(){
			$("#ageerul").children("ul").children("li").css('color','#757575');
			$(this).css('color','red');
			$("#ageer").text($(this).text());
			$("#ageer").css('color','#000');
			$("#age").val($(this).text());
			$("#ageerul").css('display','none');
		});
	})