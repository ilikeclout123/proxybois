var url=require('url');
var express=require('express');
var app=express();
/*
var google_analytics_id=process.env.GA_ID||null;
function addGa(html){return google_analytics_id?html.replace("</body>","<script type=\"text/javascript\">var _gaq=[];_gaq.push(['_setAccount','"+google_analytics_id+"']);_gaq.push(['_trackPageview']);(function(){var ga= document.createElement('script');ga.type='text/javascript';ga.async=true;ga.src=('https:'==document.location.protocol?'https://ssl':'http://www')+'.google-analytics.com/ga.js';var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(ga,s);})();</script>\n</body>"):html;}
function googleAnalyticsMiddleware(data){if(data.contentType=='text/html')data.stream=data.stream.pipe(new (require('stream').Transform)({decodeStrings:false,transform:function(chunk,encoding,next){this.push(addGa(chunk.toString()));next();}}));}
*/
var prefix='/~/';
app.use(require('unblocker')({prefix:prefix,responseMiddleware:[]}));//googleAnalyticsMiddleware
app.use('/',express.static(__dirname+'/public'));
app.get("/no-js",function(req,res){res.redirect(prefix+url.parse(req.url).searchParams.get('url'));});
app.use(function(req,res,next){res.status(404);res.type('html').send('<meta http-equiv="refresh" content="0;url='+url.resolve(req.url,'/')+'">');});
module.exports=app;