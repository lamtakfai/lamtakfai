	var oCon1=document.getElementById('con1');
	var oCon2=document.getElementById('con2');
	var oCon3=document.getElementById('con3');
	var i=14400;
	var backup=null;
	function back(n){
		if (n<10) {
			return '0'+n;
		}else{
			return ''+n;
		}
	}

	function run(){
		i--;
		var h=parseInt(i/60/60%60);
		var m=parseInt(i/60%60);
		var s=parseInt(i%60);
		oCon1.innerHTML=back(h);	
		oCon2.innerHTML=back(m);
		oCon3.innerHTML=back(s);

		if(i<0){
			i=14400;
		}
	}
	backup=setInterval(run,1000);



 	var roc=$('#roc');
 	$(document).scroll(function(){
		if(document.body.scrollTop>200){
			roc.css('display','block')
		}else{
			roc.css('display','none')
		}
	})
	roc.click(function(){
		$('body').animate({scrollTop:0},1000);
	})