function opennewFrame(ttyp, tname, twidth, theight,txtclose){
> if(ttyp != 'stop'){
> > if(!document.getElementById('fade'))
> > > document.body.innerHTML += '<div id="fade" onclick="opennewFrame(\'stop\')" ">

Unknown end tag for &lt;/div&gt;

';

> > ob = document.getElementById('fade');
> > if (document.width){
> > > //ob.style.width = document.width+'px';
> > > //ob.style.height = document.height+'px';

> > } else {
> > > //ob.style.width = getWindowWidth()+'px';
> > > //ob.style.height = getWindowHeight()+'px';

> > }
> > ob.style.display = '';
> > if(!document.getElementById('fadecontent'))
> > > document.body.innerHTML += '<div>unavailable</div>';

> > obc = document.getElementById('fadecontent');
> > if (ttyp == 'swf'){
> > > obc.innerHTML='

&lt;object id="tswf" width="'+twidth+'px" height="'+theight+'px" data="'+tname+'"type="application/x-shockwave-flash"&gt;&lt;param name="movie" value="'+tname+'"&gt;



&lt;/object&gt;

';

> > }
> > if (ttyp == 'frame'){
> > > obc.innerHTML='

&lt;iframe src="'+tname+'" width="'+(twidth-14)+'" height="'+(theight-14)+'"  marginheight="0" marginwidth="0" frameborder="0" style="border:7px solid #666666;"&gt;



&lt;/iframe&gt;

';

> > }
> > if (ttyp == 'img'){
> > > if(theight) theight = ' height="'+theight+'"';
> > > if(twidth) twidth = ' width="'+twidth+'"';
> > > obc.innerHTML='<img src="'+tname+'">';<br>
<blockquote>theight = document.getElementById('timg').height;<br>
twidth = document.getElementById('timg').width;<br>
</blockquote><blockquote>}<br>
obc.innerHTML+='<br>';<br>
if (ttyp == 'img'){<br>
<blockquote>obc.innerHTML+='<a href="javascript:opennewFrame(\''+ttyp+'\',\''+tname+'\',\''+(twidth-20)+'\')"><a href='.md'>- </a></a> ';<br>
obc.innerHTML+='<a href="javascript:opennewFrame(\''+ttyp+'\',\''+tname+'\',\''+(twidth+20)+'\')"><a href='.md'>+ </a></a> ';<br>
obc.innerHTML+='<a href="javascript:opennewFrame(\''+ttyp+'\',\''+tname+'\')"><a href='.md'>Original Aspect </a></a> ';<br>
</blockquote>}<br>
obc.innerHTML+='<a href="javascript:opennewFrame(\'stop\')"><a href='.md'>'+txtclose+' X </a></a>';</blockquote></li></ul>



> obc.style.position = 'fixed';
> obc.style.top = '50%';
> obc.style.left = '50%';
> obc.style.margin = '-'+(theight/2)+'px 0 0 -'+(twidth/2)+'px';
> } else{
> > ob = document.getElementById('fade');
> > obc =  document.getElementById('fadecontent');
> > ob.parentNode.removeChild(ob);
> > obc.parentNode.removeChild(obc);

> }
}