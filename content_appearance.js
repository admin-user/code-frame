function opennewFrame(ttyp, tname, twidth, theight,txtclose){
	if(ttyp != 'stop'){
		if(!document.getElementById('fade'))
			document.body.innerHTML += '<div id="fade" onclick="opennewFrame(\'stop\')"></div>';
		ob = document.getElementById('fade');
		if (document.width){
			//ob.style.width = document.width+'px';
			//ob.style.height = document.height+'px';
		} else {
			//ob.style.width = getWindowWidth()+'px';
			//ob.style.height = getWindowHeight()+'px';
		}
		ob.style.display = '';
		if(!document.getElementById('fadecontent'))
			document.body.innerHTML += '<div id="fadecontent">default text</div>';
		obc = document.getElementById('fadecontent');
		if (ttyp == 'swf'){
			obc.innerHTML='<object id="tswf" width="'+twidth+'px" height="'+theight+'px" data="'+tname+'"type="application/x-shockwave-flash"><param name="movie" value="'+tname+'"></object>';
		}
		if (ttyp == 'frame'){
			obc.innerHTML='<iframe src="'+tname+'" width="'+(twidth-14)+'" height="'+(theight-14)+'"  marginheight="0" marginwidth="0" frameborder="0" style="border:7px solid #666666;"></iframe>';			
		}
		if (ttyp == 'img'){
			if(theight) theight = ' height="'+theight+'"';
			if(twidth) twidth = ' width="'+twidth+'"';
			obc.innerHTML='<img id="timg" src="'+tname+'"'+theight+twidth+'>';			
			theight = document.getElementById('timg').height;
			twidth = document.getElementById('timg').width;
		}
		obc.innerHTML+='<br>';
		if (ttyp == 'img'){
			obc.innerHTML+='<a align="right" href="javascript:opennewFrame(\''+ttyp+'\',\''+tname+'\',\''+(twidth-20)+'\')">[ - ]</a> ';
			obc.innerHTML+='<a align="right" href="javascript:opennewFrame(\''+ttyp+'\',\''+tname+'\',\''+(twidth+20)+'\')">[ + ]</a> ';
			obc.innerHTML+='<a align="right" href="javascript:opennewFrame(\''+ttyp+'\',\''+tname+'\')">[ Original Aspect ]</a> ';
		}
		obc.innerHTML+='<a align="right" href="javascript:opennewFrame(\'stop\')">[ '+txtclose+' X ]</a>';
		
		obc.style.position = 'fixed';
		obc.style.top = '50%';
		obc.style.left = '50%';
		obc.style.margin = '-'+(theight/2)+'px 0 0 -'+(twidth/2)+'px';
	} else{
		ob = document.getElementById('fade');
		obc =  document.getElementById('fadecontent');
		ob.parentNode.removeChild(ob);
		obc.parentNode.removeChild(obc);
	}
}
function getWindowWidth(){
	if (window.innerWidth) 
		return window.innerWidth;
	else if (document.body.clientWidth)
		return document.body.clientWidth;
}
function getWindowHeight(){
	if (window.innerHeight) 
		return window.innerHeight;
	else if (document.body.clientHeight)
		return document.body.clientHeight;
}

function closethis(ob){
	ob.style.height = 0 ;
	ob.style.width = 0; 
	ob.innerHTML= '';
	ob.style.bottom=0;
	ob.style.left=0;
}

function openthis(ob){
	ob.style.height = 100+'px' ;
	ob.style.width = 100+'px'; 
}
