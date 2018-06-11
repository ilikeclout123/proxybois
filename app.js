var url=require('url');
var querystring=require('querystring');
var express=require('express');
var unblocker=require('unblocker');
var Transform=require('stream').Transform;
var app=express();
/*
var google_analytics_id=process.env.GA_ID||null;
function addGa(html){
    if(google_analytics_id){
        var ga=[
            "<script type=\"text/javascript\">
            var _gaq=[];
            _gaq.push(['_setAccount','"+google_analytics_id+"']);
            _gaq.push(['_trackPageview']);
            (function(){
            var ga= document.createElement('script');ga.type='text/javascript';ga.async=true;
            ga.src=('https:'==document.location.protocol?'https://ssl':'http://www')+'.google-analytics.com/ga.js';
            var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(ga,s);
            })();
            </script>"
            ].join("\n");
        html=html.replace("</body>",ga+"\n\n</body>");
    }
    return html;
}
function googleAnalyticsMiddleware(data){if(data.contentType=='text/html')data.stream=data.stream.pipe(new Transform({decodeStrings:false,transform:function(chunk,encoding,next){this.push(addGa(chunk.toString()));next();}}));}
*/
var unblockerConfig={prefix:'/~/',responseMiddleware:[]};//googleAnalyticsMiddleware
app.use(unblocker(unblockerConfig));
app.use('/', express.static(__dirname+'/public'));
app.get("/no-js",function(req,res){res.redirect(unblockerConfig.prefix+querystring.parse(url.parse(req.url).query).url);});
module.exports=app;
