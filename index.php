<!DOCTYPE html5>
<html>
<head>
  <title>2245-Proxy</title>
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <link rel="icon" type="image/png" href="https://cdn.glitch.com/f11cddb4-cc4c-4e35-b19d-fe3fa43679c8%2Fthumbnails%2Fearth-space-universe-globe-41953.jpg?1577976182875" />
  <link href="//fonts.googleapis.com/css?family=Orbitron" rel="stylesheet" type="text/css">
  <link href="//fonts.googleapis.com/css?family=Droid+Sans" rel="stylesheet" type="text/css">
  <link href="css.css" rel="stylesheet" type="text/css">
</head>
<body onload="document.getElementById('url').focus();if(window.location.search.indexOf('error=')>-1){var err=window.location.search.substr(window.location.search.indexOf('error=')+6,window.location.search.indexOf('&',window.location.search.indexOf('error='))==-1?undefined:window.location.search.indexOf('&',window.location.search.indexOf('error=')));document.getElementById('error').innerText=document.getElementById('error').textContent=decodeURIComponent(err);document.getElementById('error').style.display='block';}">
    <div class="header">
      <h1>2245-Proxy</h1>
      </div>
    <div class="navbar">
      <center>
        <a href="https://2245-proxy.glitch.me">Proxy</a>
        <a href="https://2245-portal.glitch.me">Portal</a>
        <a href="https://mk-private.glitch.me">Agar.io</a>
        <a href="https://paperio-2245.glitch.me">Paper.io</a>
      </center>
  </div>
    <br>
    <div class="textHolder">
      <div id="error"></div>
      <form action="-" method="get" onsubmit="window.location.href='/~/'+(document.getElementById('url').value.substr(0,4)!='http'?'http://':'')+document.getElementById('url').value;return false;">
        <p>
          URL: 
          <input type="text" id="url" name="url" autofocus="autofocus" />
          <input type="submit" value="Enter" />
        </p>
      </form>
      <h3></h3>
      <p></p>
      <p></p>
      <div class="footer">
        This document is private, authorized users only.
      </div>
    <div>
    </div>
    </div>
</body>
</html>
