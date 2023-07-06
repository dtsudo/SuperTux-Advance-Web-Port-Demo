if (!window.superTuxAdvanceWebVersion) window.superTuxAdvanceWebVersion = {}; 
if (!window.superTuxAdvanceWebVersion.squirrelFiles) window.superTuxAdvanceWebVersion.squirrelFiles = {}; 

window.superTuxAdvanceWebVersion.squirrelFiles['src/gmplay.nut'] = function () { 


gvInfoBox = "" ; 
gvInfoLast = "" ; 
gvInfoStep = 0 ; 
gvLangObj = "" ; 
gvFadeInTime = 255 ; 
gvVoidFog = true ; 
gvCanWrap = false ; 
mapActor =  {  }  ; 
startPlay =  function ( level , newLevel = true , skipIntro = false ) {  if (  ! fileExists ( level )  )  return ; 
  
 setFPS ( 60 )  ; 
gvPlayer = false ; 
gvBoss = false ; 
deleteAllActors (  )  ; 
 if ( newLevel )  { 
 game . health = game . maxHealth ; 
game . levelCoins = 0 ; 
game . maxCoins = 0 ; 
game . redCoins = 0 ; 
game . maxRedCoins = 0 ; 
game . secrets = 0 ; 
game . maxSecrets = 0 ; 
game . enemies = 0 ; 
game . maxEnemies = 0 ; 
gvInfoBox = "" ; 
gvLastSong = "" ; 
gfxReset (  )  ; 
gvFadeInTime = 255 ; 
gvNextLevel = "" ; 
gvVoidFog = true ; 
gvCanWrap = false ; 
 } 
  
 autocon . up = false ; 
autocon . down = false ; 
autocon . left = false ; 
autocon . right = false ; 
 if (  ! game . check )  { 
 gvKeyCopper = false ; 
gvKeySilver = false ; 
gvKeyGold = false ; 
gvKeyMythril = false ; 
 } 
  
  if ( gvMap != 0 ) gvMap . del (  )  ; 
 
 gvMap = Tilemap ( level )  ; 
gvHorizon = gvMap . h ; 
 var actset =  - 1 ;
  var tilef = 0 ;
  var actnum =  - 1 ;
  for (  var i = 0 ;
 i < gvMap . tileset . len (  )  ; i ++  )  { 
  if ( spriteName ( gvMap . tileset [ i ]  )  == "actors.png" )  { 
 actset = gvMap . tileset [ i ]  ; 
tilef = gvMap . tilef [ i ]  ; 
actnum = i ; 
 break ;  } 
  
  } 
  if ( actset ==  - 1 )  { 
 print ( "Map does not use actors.png. No actors to load." )  ; 
 return ; 
  } 
  
  var actlayer =  - 1 ;
  {     var foreachOutput1 = squirrelForEach( gvMap . data . layers );     while(true)     {        foreachOutput1.next();        if (foreachOutput1.isDone()) break; i = foreachOutput1.getValue();  { 
  if ( i [ "type" ]  == "objectgroup" && i [ "name" ]  == "actor" )  { 
 actlayer = i ; 
 break ;  } 
  
  } 
     }  }  if ( actlayer ==  - 1 )  { 
 print ( "Map does not have an actor layer. No actors to load." )  ; 
 return ; 
  } 
  
  {     var foreachOutput2 = squirrelForEach( actlayer . objects );     while(true)     {        foreachOutput2.next();        if (foreachOutput2.isDone()) break; i = foreachOutput2.getValue();  { 
  if ( i . rawin ( "gid" )  )  { 
  var n = i . gid - tilef ;
  var c = 0 ;
  switch ( spriteName ( gvMap . tileset [ actnum ]  )  )  {  case "actors.png" : c = createPlatformActors ( n , i , c )  ; 
 break ;  case "raceactors.png" : c = createRacerActors ( n , i , c )  ; 
 break ;  }  if (  squirrelTypeOf ( c )  == "integer" ) mapActor [ i . id ] = c ; 
 
  else mapActor [ i . id ] = c . id ; 
 
  } 
  
  if (  ! i . rawin ( "polygon" )  &&  ! i . rawin ( "polyline" )  &&  ! i . rawin ( "ellipse" )  &&  ! i . rawin ( "point" )  &&  ! i . rawin ( "gid" )  )  if ( i . name != "" )  { 
  var c = 0 ;
  var arg = split ( i . name , "," )  ;
  var n = arg [ 0 ]  ;
 arg . remove ( 0 )  ; 
 if ( arg . len (  )  == 1 ) arg = arg [ 0 ]  ; 
 
  else  if ( arg . len (  )  == 0 ) arg = null ; 
 
  
  if ( getroottable (  )  . rawin ( n )  )  if (  squirrelTypeOf ( getroottable ( ) [ n ] )  == "class" )  { 
 print ( i . x + " - " + i . y )  ; 
c = newActor ( getroottable (  )  [ n ]  , i . x +  ( i . width / 2.0 )  , i . y +  ( i . height / 2.0 )  , arg )  ; 
actor [ c ]  . w = i . width / 2.0 ; 
actor [ c ]  . h = i . height / 2.0 ; 
mapActor [ i . id ] = c ; 
 } 
  
  
  } 
  
  
  if ( i . rawin ( "polygon" )  )  if ( i . name != "" )  { 
  var arg = split ( i . name , "," )  ;
  var n = arg [ 0 ]  ;
  if ( getroottable (  )  . rawin ( n )  )  { 
  var poly =  [  ]  ;
  for (  var j = 0 ;
 j <= i . polygon . len (  )  ; j ++  )  { 
  if ( j == i . polygon . len (  )  ) poly . push (  [ i . x + i . polygon [ 0 ]  . x , i . y + i . polygon [ 0 ]  . y ]  )  ; 
 
  else poly . push (  [ i . x + i . polygon [ j ]  . x , i . y + i . polygon [ j ]  . y ]  )  ; 
 
  } 
 arg [ 0 ] = poly ; 
 var c ;
  if ( getroottable (  )  . rawin ( n )  )  if (  squirrelTypeOf ( getroottable ( ) [ n ] )  == "class" )  { 
 c = newActor ( getroottable (  )  [ n ]  , i . x , i . y , arg )  ; 
mapActor [ i . id ] = c ; 
 } 
  
  
  } 
  
  } 
  
  
  if ( i . rawin ( "polyline" )  )  if ( i . name != "" )  { 
  var arg = split ( i . name , "," )  ;
  var n = arg [ 0 ]  ;
  if ( getroottable (  )  . rawin ( n )  )  { 
  var poly =  [  ]  ;
  for (  var j = 0 ;
 j < i . polyline . len (  )  ; j ++  ) poly . push (  [ i . x + i . polyline [ j ]  . x , i . y + i . polyline [ j ]  . y ]  )  ; 
arg [ 0 ] = poly ; 
 var c ;
  if ( getroottable (  )  . rawin ( n )  )  if (  squirrelTypeOf ( getroottable ( ) [ n ] )  == "class" )  { 
 c = newActor ( getroottable (  )  [ n ]  , i . x , i . y , arg )  ; 
mapActor [ i . id ] = c ; 
 } 
  
  
  } 
  
  } 
  
  
  } 
     }  }  for (  var i = 0 ;
 i < gvMap . data . layers . len (  )  ; i ++  )  { 
  if ( gvMap . data . layers [ i ]  . type == "objectgroup" )  { 
  var lana = gvMap . data . layers [ i ]  . name ;
  for (  var j = 0 ;
 j < gvMap . data . layers [ i ]  . objects . len (  )  ; j ++  )  { 
  var obj = gvMap . data . layers [ i ]  . objects [ j ]  ;
  switch ( lana )  {  case "trigger" :  if (  ( (obj["polyline"] !== undefined) )  ||  ( (obj["polygon"] !== undefined) )  ||  ( (obj["ellipse"] !== undefined) )  )  break ;  
  var c = newActor ( Trigger , obj . x +  ( obj . width / 2 )  , obj . y +  ( obj . height / 2 )  )  ;
 actor [ c ]  . shape = Rec ( obj . x +  ( obj . width / 2 )  , obj . y +  ( obj . height / 2 )  , obj . width / 2 , obj . height / 2 , 0 )  ; 
actor [ c ]  . code = obj . name ; 
actor [ c ]  . w = obj . width / 2 ; 
actor [ c ]  . h = obj . height / 2 ; 
 break ;  case "water" :  if (  ( (obj["polyline"] !== undefined) )  ||  ( (obj["polygon"] !== undefined) )  ||  ( (obj["ellipse"] !== undefined) )  )  break ;  
  var c = newActor ( Water , obj . x +  ( obj . width / 2 )  , obj . y +  ( obj . height / 2 )  )  ;
 actor [ c ]  . shape = Rec ( obj . x +  ( obj . width / 2 )  , obj . y +  ( obj . height / 2 )  , obj . width / 2 ,  ( obj . height / 2 )  - 4 , 5 )  ; 
 break ;  case "secret" :  if (  ( (obj["polyline"] !== undefined) )  ||  ( (obj["polygon"] !== undefined) )  ||  ( (obj["ellipse"] !== undefined) )  )  break ;  
  var c = actor [ newActor ( SecretWall , obj . x , obj . y , obj . name )  ]  ;
 c . dw = obj . width / 16 ; 
c . dh = obj . height / 16 ; 
c . shape = Rec ( c . x +  ( c . dw * 8 )  , c . y +  ( c . dh * 8 )  ,  - 4 +  ( c . dw * 8 )  ,  - 4 +  ( c . dh * 8 )  , 5 )  ; 
 break ;  }  } 
  } 
  
  } 
  for (  var i = 0 ;
 i < gvMap . data . layers . len (  )  ; i ++  )  { 
  if ( gvMap . data . layers [ i ]  . type == "objectgroup" )  { 
  var lana = gvMap . data . layers [ i ]  . name ;
  for (  var j = 0 ;
 j < gvMap . data . layers [ i ]  . objects . len (  )  ; j ++  )  { 
  var obj = gvMap . data . layers [ i ]  . objects [ j ]  ;
  switch ( lana )  {  case "secret" :  if (  !  (  ( (obj["polyline"] !== undefined) )  ||  ( (obj["polygon"] !== undefined) )  )  )  break ;  
  var poly =  [  ]  ;
  if ( (obj["polyline"] !== undefined) )  for (  var jj = 0 ;
 jj < obj . polyline . len (  )  ; jj ++  ) poly . push (  [ obj . x + obj . polyline [ jj ]  . x , obj . y + obj . polyline [ jj ]  . y ]  )  ; 
 
  else  for (  var jj = 0 ;
 jj < obj . polygon . len (  )  ; jj ++  ) poly . push (  [ obj . x + obj . polygon [ jj ]  . x , obj . y + obj . polygon [ jj ]  . y ]  )  ; 
 
  var c = newActor ( SecretJoiner , obj . x , obj . y , poly )  ;
 mapActor [ obj . id ] = c ; 
 break ;  }  } 
  } 
  
  } 
  if ( gvPlayer )  { 
 camx = gvPlayer . x -  ( gvScreenW / 2 )  ; 
camy = gvPlayer . y -  ( gvScreenH / 2 )  ; 
 } 
  
  else  { 
 camx = 0 ; 
camy = 0 ; 
 } 
  
 print ( "Running level code..." )  ; 
 if ( gvMap . data . rawin ( "properties" )  )  {     var foreachOutput3 = squirrelForEach( gvMap . data . properties );     while(true)     {        foreachOutput3.next();        if (foreachOutput3.isDone()) break; i = foreachOutput3.getValue();  { 
  if ( i . name == "code" ) dostr ( i . value )  ; 
 
  if ( i . name == "author" ) gvMap . author = i . value ; 
 
  } 
     }  }  
 print ( "End level code" )  ; 
setDrawTarget ( bgPause )  ; 
drawImage ( gvScreen , 0 , 0 )  ; 
 if ( newLevel )  { 
 setDrawColor ( 0x000000ff )  ; 
 for (  var i = 0.0 ;
 i <= 100 ; i += 4.0 )  { 
 setDrawTarget ( gvScreen )  ; 
drawImage ( bgPause , 0 , 0 )  ; 
 var di = i / 100.0 ;
  var dx =  ( 1.0 / 240.0 )  * gvScreenW . tofloat (  )  ;
  var dy =  ( 1.0 / 240.0 )  * gvScreenH . tofloat (  )  ;
  if ( config . light && gvGameMode == gmOverworld ) drawAmbientLight (  )  ; 
 
 drawSpriteEx ( sprIris , 0 , gvScreenW / 2 , gvScreenH / 2 , 0 , 0 , dx *  ( 1.0 - di )  , dy *  ( 1.0 - di )  , 1 )  ; 
drawRec ( 0 , 0 , gvScreenW *  ( di / 2.0 )  , gvScreenH , true )  ; 
drawRec ( gvScreenW , 0 ,  -  ( gvScreenW *  ( di / 2.0 )  )  - 2 , gvScreenH , true )  ; 
drawRec ( 0 , 0 , gvScreenW , gvScreenH *  ( di / 2.0 )  , true )  ; 
drawRec ( 0 , gvScreenH , gvScreenW ,  -  ( gvScreenH *  ( di / 2.0 )  )  - 2 , true )  ; 
resetDrawTarget (  )  ; 
drawImage ( gvScreen , 0 , 0 )  ; 
update (  )  ; 
 if ( getcon ( "pause" , "press" )  )  break ;  
  } 
 gvFadeInTime = 255 ; 
 } 
  
  if ( skipIntro ) gvGameMode = gmPlay ; 
 
  else gvGameMode = gmLevelStart ; 
 
  }  ; 
gmLevelStart =  function (  ) { setDrawTarget ( gvScreen )  ; 
setDrawColor ( 0x000000ff )  ; 
drawRec ( 0 , 0 , gvScreenW , gvScreenH , true )  ; 
 if ( gvLangObj [ "level" ]  . rawin ( gvMap . name )  ) drawText ( font2 ,  ( gvScreenW / 2 )  -  ( gvLangObj [ "level" ]  [ gvMap . name ]  . len (  )  * 4 )  , 8 , gvLangObj [ "level" ]  [ gvMap . name ]  )  ; 
 
  var runAnim = getroottable (  )  [ game . playerChar ]  . anRun ;
  switch ( game . weapon )  {  case 0 : drawSprite ( getroottable (  )  [ game . characters [ game . playerChar ]  [ "normal" ]  ]  , runAnim [ floor ( getFrames (  )  / 4 )  % runAnim . len (  )  ]  , gvScreenW / 2 , gvScreenH / 2 )  ; 
 break ;  case 1 : drawSprite ( getroottable (  )  [ game . characters [ game . playerChar ]  [ "fire" ]  ]  , runAnim [ floor ( getFrames (  )  / 4 )  % runAnim . len (  )  ]  , gvScreenW / 2 , gvScreenH / 2 )  ; 
 break ;  case 2 : drawSprite ( getroottable (  )  [ game . characters [ game . playerChar ]  [ "ice" ]  ]  , runAnim [ floor ( getFrames (  )  / 4 )  % runAnim . len (  )  ]  , gvScreenW / 2 , gvScreenH / 2 )  ; 
 break ;  case 3 : drawSprite ( getroottable (  )  [ game . characters [ game . playerChar ]  [ "air" ]  ]  , runAnim [ floor ( getFrames (  )  / 4 )  % runAnim . len (  )  ]  , gvScreenW / 2 , gvScreenH / 2 )  ; 
 break ;  case 4 : drawSprite ( getroottable (  )  [ game . characters [ game . playerChar ]  [ "earth" ]  ]  , runAnim [ floor ( getFrames (  )  / 4 )  % runAnim . len (  )  ]  , gvScreenW / 2 , gvScreenH / 2 )  ; 
 break ;  default : drawSprite ( getroottable (  )  [ game . characters [ game . playerChar ]  [ "normal" ]  ]  , runAnim [ floor ( getFrames (  )  / 4 )  % runAnim . len (  )  ]  , gvScreenW / 2 , gvScreenH / 2 )  ; 
 }  var author = gvLangObj [ "stats" ]  [ "author" ]  + ": " + gvMap . author ;
 drawText ( font ,  ( gvScreenW / 2 )  - author . len (  )  * 3 , gvScreenH - 64 , author )  ; 
 var bt = gvLangObj [ "stats" ]  [ "time" ]  + ": " ;
  if ( game . bestTime . rawin ( gvMap . name + "-" + game . playerChar )  ) bt += formatTime ( game . bestTime [ gvMap . name + "-" + game . playerChar ]  )  ; 
 
  else bt += "0:00.00" ; 
 
 bt += " (" + game . playerChar + ")" ; 
drawText ( font ,  ( gvScreenW / 2 )  - bt . len (  )  * 3 , gvScreenH - 56 , bt )  ; 
 var bc = gvLangObj [ "stats" ]  [ "coins" ]  + ": " ;
  if ( game . bestCoins . rawin ( gvMap . name )  ) bc += game . bestCoins [ gvMap . name ]  + " / " + game . maxCoins ; 
 
  else bc += "0 / " + game . maxCoins ; 
 
 drawText ( font ,  ( gvScreenW / 2 )  - bc . len (  )  * 3 , gvScreenH - 48 , bc )  ; 
 var be = gvLangObj [ "stats" ]  [ "enemies" ]  + ": " ;
  if ( game . bestEnemies . rawin ( gvMap . name )  ) be += game . bestEnemies [ gvMap . name ]  + " / " + game . maxEnemies ; 
 
  else be += "0 / " + game . maxEnemies ; 
 
 drawText ( font ,  ( gvScreenW / 2 )  - be . len (  )  * 3 , gvScreenH - 40 , be )  ; 
 var bs = gvLangObj [ "stats" ]  [ "secrets" ]  + ": " ;
  if ( game . bestSecrets . rawin ( gvMap . name )  ) bs += game . bestSecrets [ gvMap . name ]  + " / " + game . maxSecrets ; 
 
  else bs += "0 / " + game . maxSecrets ; 
 
 drawText ( font ,  ( gvScreenW / 2 )  - bs . len (  )  * 3 , gvScreenH - 32 , bs )  ; 
resetDrawTarget (  )  ; 
drawImage ( gvScreen , 0 , 0 )  ; 
 if ( getcon ( "jump" , "press" )  || getcon ( "shoot" , "press" )  || getcon ( "pause" , "press" )  || getcon ( "accept" , "press" )  ) gvGameMode = gmPlay ; 
 
  }  ; 
gmPlay =  function (  ) {  if ( gvCamTarget == null && gvPlayer ) gvCamTarget = gvPlayer ; 
 
  var px = 0 ;
  var py = 0 ;
  var ux = gvMap . w - gvScreenW ;
  var uy = gvMap . h - gvScreenH ;
  var lx = 0 ;
  var ly = 0 ;
  if ( gvPlayer )  { 
 lx =  (  ( joyAxis ( 0 , config . joy . xPeek )  / js_max . tofloat (  )  )  * gvScreenW / 2.5 )  ; 
ly =  (  ( joyAxis ( 0 , config . joy . yPeek )  / js_max . tofloat (  )  )  * gvScreenH / 2.5 )  ; 
 if ( getcon ( "leftPeek" , "hold" )  ) lx =  -  ( gvScreenW / 2.5 )  ; 
 
  if ( getcon ( "rightPeek" , "hold" )  ) lx =  ( gvScreenW / 2.5 )  ; 
 
  if ( getcon ( "upPeek" , "hold" )  ) ly =  -  ( gvScreenH / 2.5 )  ; 
 
  if ( getcon ( "downPeek" , "hold" )  ) ly =  ( gvScreenH / 2.5 )  ; 
 
  } 
  
  if ( gvCamTarget != null && gvCamTarget != false && gvPlayer )  { 
  if ( gvPlayer )  { 
  if ( gvCamTarget == gvPlayer )  { 
  if ( debug && mouseDown ( 0 )  )  { 
 px =  ( gvCamTarget . x )  -  ( gvScreenW / 2 )  + lx ; 
py =  ( gvCamTarget . y )  -  ( gvScreenH / 2 )  + ly ; 
 } 
  
  else  { 
 px =  ( gvCamTarget . x +  ( gvPlayer . x - gvPlayer . xprev )  * 32 )  -  ( gvScreenW / 2 )  + lx ; 
py =  ( gvCamTarget . y +  ( gvPlayer . y - gvPlayer . yprev )  * 16 )  -  ( gvScreenH / 2 )  + ly ; 
 } 
  
  } 
  
  else  { 
  var pw = max ( gvScreenW , 320 )  ;
  var ph = max ( gvScreenH , 240 )  ;
  var ptx =  ( gvCamTarget . x )  -  ( gvScreenW / 2 )  ;
  var pty =  ( gvCamTarget . y )  -  ( gvScreenH / 2 )  ;
  if ( gvCamTarget . rawin ( "w" )  )  if ( abs ( gvCamTarget . w )  > pw / 2 )  { 
  if ( debug &&  ( mouseDown ( 0 )  || mouseDown ( 1 )  )  ) ptx = gvPlayer . x -  ( gvScreenW / 2 )  + lx ; 
 
  else ptx =  ( gvPlayer . x + gvPlayer . hspeed * 32 )  -  ( gvScreenW / 2 )  + lx ; 
 
  } 
  
  
  if ( gvCamTarget . rawin ( "h" )  )  if ( abs ( gvCamTarget . h )  > ph / 2 )  { 
  if ( debug &&  ( mouseDown ( 0 )  || mouseDown ( 1 )  )  ) pty = gvPlayer . y -  ( gvScreenH / 2 )  + ly ; 
 
  else pty =  ( gvPlayer . y + gvPlayer . vspeed * 16 )  -  ( gvScreenH / 2 )  + ly ; 
 
  } 
  
  
 px = ptx ; 
py = pty ; 
 } 
  
  } 
  
  else  { 
 px =  ( gvCamTarget . x )  -  ( gvScreenW / 2 )  ; 
py =  ( gvCamTarget . y )  -  ( gvScreenH / 2 )  ; 
 } 
  
  } 
  
  else  { 
 px = camx ; 
py = camy ; 
 } 
  
 camx +=  ( px - camx )  / 16 ; 
camy +=  ( py - camy )  / 16 ; 
 if ( camx > ux ) camx = ux ; 
 
  if ( camx < 0 ) camx = 0 ; 
 
  if ( camy > uy ) camy = uy ; 
 
  if ( camy < 0 ) camy = 0 ; 
 
  if ( gvPlayer ) gvCamTarget = gvPlayer ; 
 
 runAmbientLight (  )  ; 
setDrawTarget ( gvPlayScreen )  ; 
 if ( drawBG != 0 ) drawBG (  )  ; 
 
  if ( drawWeather != 0 ) drawWeather (  )  ; 
 
 camxprev = camx ; 
camyprev = camy ; 
gvMap . drawTiles ( floor (  - camx )  , floor (  - camy )  , floor ( camx / 16 )  - 3 , floor ( camy / 16 )  ,  ( gvScreenW / 16 )  + 5 ,  ( gvScreenH / 16 )  + 2 , "bg" )  ; 
gvMap . drawTiles ( floor (  - camx )  , floor (  - camy )  , floor ( camx / 16 )  - 3 , floor ( camy / 16 )  ,  ( gvScreenW / 16 )  + 5 ,  ( gvScreenH / 16 )  + 2 , "mg" )  ; 
 if ( gvMap . name != "shop" && gvVoidFog )  for (  var i = 0 ;
 i <  ( gvScreenW / 16 )  + 1 ; i ++  )  { 
 drawSprite ( sprVoid , 0 , 0 +  ( i * 16 )  , gvMap . h - 32 - camy )  ; 
 } 
  
 runActors (  )  ; 
drawZList ( 8 )  ; 
 if ( actor . rawin ( "Water" )  )  {     var foreachOutput4 = squirrelForEach( actor [ "Water" ]  );     while(true)     {        foreachOutput4.next();        if (foreachOutput4.isDone()) break; i = foreachOutput4.getValue();  { 
 i . draw (  )  ; 
 } 
     }  }  
 drawAmbientLight (  )  ; 
 if ( config . light ) gvMap . drawTilesMod ( floor (  - camx )  , floor (  - camy )  , floor ( camx / 16 )  - 3 , floor ( camy / 16 )  ,  ( gvScreenW / 16 )  + 5 ,  ( gvScreenH / 16 )  + 2 , "fg" , 1 , 1 , 1 , gvLight )  ; 
 
  else gvMap . drawTiles ( floor (  - camx )  , floor (  - camy )  , floor ( camx / 16 )  - 3 , floor ( camy / 16 )  ,  ( gvScreenW / 16 )  + 5 ,  ( gvScreenH / 16 )  + 2 , "fg" )  ; 
 
  if ( actor . rawin ( "SecretWall" )  )  {     var foreachOutput5 = squirrelForEach( actor [ "SecretWall" ]  );     while(true)     {        foreachOutput5.next();        if (foreachOutput5.isDone()) break; i = foreachOutput5.getValue();  { 
 i . draw (  )  ; 
 } 
     }  }  
  if ( actor . rawin ( "SecretJoiner" )  )  {     var foreachOutput6 = squirrelForEach( actor [ "SecretJoiner" ]  );     while(true)     {        foreachOutput6.next();        if (foreachOutput6.isDone()) break; i = foreachOutput6.getValue();  { 
 i . draw (  )  ; 
 } 
     }  }  
  if ( debug ) gvMap . drawTiles ( floor (  - camx )  , floor (  - camy )  , floor ( camx / 16 )  , floor ( camy / 16 )  ,  ( gvScreenW / 16 )  + 5 ,  ( gvScreenH / 16 )  + 2 , "solid" )  ; 
 
  if ( (gvMap . data["properties"] !== undefined) )  {     var foreachOutput7 = squirrelForEach( gvMap . data . properties );     while(true)     {        foreachOutput7.next();        if (foreachOutput7.isDone()) break; i = foreachOutput7.getValue();  { 
  if ( i . name == "run" ) dostr ( i . value )  ; 
 
  } 
     }  }  
  if ( gvPlayer && gvPlayer2 &&  ( (gvPlayer["invincible"] !== undefined) )  &&  ( (gvPlayer2["invincible"] !== undefined) )  && gvPlayer . invincible == 0 && gvPlayer2 . invincible == 0 || gvPlayer &&  ! gvPlayer2 &&  ( (gvPlayer["invincible"] !== undefined) )  && gvPlayer . invincible == 0 || gvPlayer2 &&  ! gvPlayer &&  ( (gvPlayer2["invincible"] !== undefined) )  && gvPlayer2 . invincible == 0 ) songPlay ( gvMusicName )  ; 
 
 setDrawTarget ( gvScreen )  ; 
drawImage ( gvPlayScreen , 0 , 0 )  ; 
 if ( gvInfoBox != gvInfoLast )  { 
 gvInfoLast = gvInfoBox ; 
gvInfoStep = 0 ; 
 } 
  
  if ( gvInfoBox == "" )  { 
  for (  var i = 0 ;
 i < 4 - game . difficulty ; i ++  )  { 
 drawSprite ( sprEnergy , 2 , 8 +  ( 16 * i )  , 24 )  ; 
 } 
  if ( game . health > game . maxHealth ) game . health = game . maxHealth ; 
 
  var fullhearts = floor ( game . health / 4 )  ;
  var maxHealthDividedBy4 = floor ( game . maxHealth / 4 )  ;
  for (  var i = 0 ;
 i < maxHealthDividedBy4 ; i ++  )  { 
  if ( i < fullhearts ) drawSprite ( sprHealth , 4 , 8 +  ( 16 * i )  , 8 )  ; 
 
  else  if ( i == fullhearts ) drawSprite ( sprHealth , game . health % 4 , 8 +  ( 16 * i )  , 8 )  ; 
 
  else drawSprite ( sprHealth , 0 , 8 +  ( 16 * i )  , 8 )  ; 
 
  
  } 
  for (  var i = 0 ;
 i < game . maxEnergy ; i ++  )  { 
  if ( gvPlayer )  { 
  if ( gvPlayer . rawin ( "energy" )  && game . maxEnergy > 0 )  { 
  if ( i < floor ( gvPlayer . energy )  ) drawSprite ( sprEnergy , 1 , 8 +  ( 16 * i )  , 24 )  ; 
 
  else drawSprite ( sprEnergy , 0 , 8 +  ( 16 * i )  , 24 )  ; 
 
  } 
  
  } 
  
  } 
  if ( gvBoss )  { 
  var fullhearts = floor ( game . bossHealth / 4 )  ;
  if ( game . bossHealth == 0 ) fullhearts = 0 ; 
 
 drawSprite ( sprBossHealth , 6 , gvScreenW - 23 , gvScreenH - 48 )  ; 
drawSprite ( sprSkull , 0 , gvScreenW - 26 , gvScreenH - 46 )  ; 
 for (  var i = 0 ;
 i < 10 ; i ++  )  { 
  if ( i < fullhearts ) drawSprite ( sprBossHealth , 4 , gvScreenW - 23 , gvScreenH - 64 -  ( 16 * i )  )  ; 
 
  else  if ( i == fullhearts && game . bossHealth > 0 ) drawSprite ( sprBossHealth , game . bossHealth % 4 , gvScreenW - 23 , gvScreenH - 64 -  ( 16 * i )  )  ; 
 
  else drawSprite ( sprBossHealth , 0 , gvScreenW - 23 , gvScreenH - 64 -  ( 16 * i )  )  ; 
 
  
  } 
 drawSprite ( sprBossHealth , 5 , gvScreenW - 23 , gvScreenH - 64 -  ( 16 * 10 )  )  ; 
 } 
  
 drawSprite ( sprCoin , 0 , 16 , gvScreenH - 16 )  ; 
 if ( game . maxCoins > 0 )  { 
  if ( gvTimeAttack )  { 
  if ( levelEndRunner ) drawText ( font2 , 24 , gvScreenH - 23 , game . coins . tostring (  )  )  ; 
 
  else drawText ( font2 , 24 , gvScreenH - 23 ,  ( game . coins + game . levelCoins )  . tostring (  )  )  ; 
 
  } 
  
  else drawText ( font2 , 24 , gvScreenH - 23 , game . levelCoins . tostring (  )  + "/" + game . maxCoins . tostring (  )  )  ; 
 
  } 
  
  else drawText ( font2 , 24 , gvScreenH - 23 , game . coins . tostring (  )  )  ; 
 
  if ( game . maxRedCoins > 0 ) drawSprite ( sprHerring , 0 , 16 , gvScreenH - 40 )  ; 
 
  if ( game . maxRedCoins > 0 ) drawText ( font2 , 24 , gvScreenH - 46 , game . redCoins . tostring (  )  + "/" + game . maxRedCoins . tostring (  )  )  ; 
 
 drawSprite ( sprSubItem , 0 , gvScreenW - 18 , 18 )  ; 
 switch ( game . subitem )  {  case 1 : drawSprite ( sprFlowerFire , 0 , gvScreenW - 18 , 18 )  ; 
 break ;  case 2 : drawSprite ( sprFlowerIce , 0 , gvScreenW - 18 , 18 )  ; 
 break ;  case 3 : drawSprite ( sprAirFeather , 0 , gvScreenW - 18 , 18 )  ; 
 break ;  case 4 : drawSprite ( sprEarthShell , 0 , gvScreenW - 18 , 18 )  ; 
 break ;  case 5 : drawSprite ( sprMuffin , 0 , gvScreenW - 18 , 18 )  ; 
 break ;  case 6 : drawSprite ( sprMuffin , 1 , gvScreenW - 18 , 18 )  ; 
 break ;  case 7 : drawSprite ( sprStar , 0 , gvScreenW - 18 , 18 )  ; 
 break ;  case 8 : drawSprite ( sprCoffee , 0 , gvScreenW - 18 , 17 )  ; 
 break ;  }  if ( gvDoIGT && config . showleveligt && levelEndRunner != 1 ) drawText ( font2 , 8 , 32 , formatTime ( gvIGT )  )  ; 
 
  if ( gvPlayer )  if ( gvPlayer . y <  - 8 )  { 
  if ( (game . characters[ squirrelTypeOf ( gvPlayer ) ] !== undefined) ) drawSprite ( getroottable (  )  [ game . characters [  squirrelTypeOf ( gvPlayer )  ]  [ "doll" ]  ]  , game . weapon , gvPlayer . x - camx , 8 -  ( gvPlayer . y / 4 )  )  ; 
 
  } 
  
  
  if ( gvWarning < 180 )  { 
  if ( gvWarning == 0 || gvWarning == 90 )  { 
 stopSound ( sndWarning )  ; 
playSound ( sndWarning , 0 )  ; 
 } 
  
 drawSpriteEx ( sprWarning , 0 , gvScreenW / 2 , gvScreenH / 2 , 0 , 0 , 1 , 1 , abs ( sin ( gvWarning / 30.0 )  )  )  ; 
gvWarning += 1.5 ; 
 } 
  
  var kx = 10 ;
  if ( game . canres )  { 
  if ( (game . characters[ squirrelTypeOf ( gvPlayer ) ] !== undefined) ) drawSprite ( getroottable (  )  [ game . characters [  squirrelTypeOf ( gvPlayer )  ]  [ "doll" ]  ]  , game . weapon , gvScreenW - kx , gvScreenH - 16 )  ; 
 
 kx += 16 ; 
 } 
  
  if ( gvKeyCopper )  { 
 drawSprite ( sprKeyCopper , 0 , gvScreenW - kx , gvScreenH - 16 )  ; 
kx += 16 ; 
 } 
  
  if ( gvKeySilver )  { 
 drawSprite ( sprKeySilver , 0 , gvScreenW - kx , gvScreenH - 16 )  ; 
kx += 16 ; 
 } 
  
  if ( gvKeyGold )  { 
 drawSprite ( sprKeyGold , 0 , gvScreenW - kx , gvScreenH - 16 )  ; 
kx += 16 ; 
 } 
  
  if ( gvKeyMythril )  { 
 drawSprite ( sprKeyMythril , 0 , gvScreenW - kx , gvScreenH - 16 )  ; 
kx += 16 ; 
 } 
  
  } 
  
  else  { 
  if ( gvInfoStep < gvInfoBox . len (  )  ) gvInfoStep ++  ; 
 
  var ln = 3 ;
  for (  var i = 0 ;
 i < gvInfoBox . len (  )  ; i ++  )  { 
  if ( chint ( gvInfoBox [ i ]  )  == "\n" ) ln ++  ; 
 
  } 
 setDrawColor ( 0x000000d0 )  ; 
drawRec ( 0 , 0 , gvScreenW , 8 * max ( ln , 7 )  , true )  ; 
drawText ( font , 8 , 8 , gvInfoBox . slice ( 0 , gvInfoStep )  )  ; 
 } 
  
 setDrawColor ( gvFadeInTime )  ; 
drawRec ( 0 , 0 , gvScreenW , gvScreenH , true )  ; 
 if ( gvFadeInTime > 0 ) gvFadeInTime -= 10 ; 
 
  if ( gvFadeInTime < 0 ) gvFadeInTime = 0 ; 
 
 drawDebug (  )  ; 
 if ( levelEndRunner == 0 && gvPlayer )  { 
 gvIGT ++  ; 
game . igt ++  ; 
 } 
  
  if ( config . showglobaligt && levelEndRunner != 1 )  { 
  var gtd = formatTime ( game . igt )  ;
 drawText ( font2 ,  ( gvScreenW / 2 )  -  ( gtd . len (  )  * 4 )  , gvScreenH - 24 , gtd )  ; 
 } 
  
 checkAchievements (  )  ; 
drawAchievements (  )  ; 
resetDrawTarget (  )  ; 
drawImage ( gvScreen , 0 , 0 )  ; 
 if ( gvFadeTime > 0 )  { 
 setDrawColor ( min ( 255 , gvFadeTime * 8 )  )  ; 
drawRec ( 0 , 0 , gvScreenW , gvScreenH , true )  ; 
 } 
  
  if ( game . berries > 0 && game . berries % 16 == 0 )  { 
  if ( game . health < game . maxHealth )  { 
 game . health ++  ; 
game . berries = 0 ; 
 } 
  
  else game . berries --  ; 
 
  } 
  
  if ( game . health < 0 ) game . health = 0 ; 
 
  }  ; 
playerTeleport =  function ( _x , _y ) {  if (  ! gvPlayer )  return ; 
  
  if ( gvMap == 0 )  return ; 
  
  var ux = gvMap . w - gvScreenW ;
  var uy = gvMap . h - gvScreenH ;
 gvPlayer . x = _x . tofloat (  )  ; 
gvPlayer . y = _y . tofloat (  )  ; 
gvPlayer . xprev = gvPlayer . x ; 
gvPlayer . yprev = gvPlayer . y ; 
camx = _x . tofloat (  )  -  ( gvScreenW / 2 )  ; 
camy = _y . tofloat (  )  -  ( gvScreenH / 2 )  ; 
 if ( camx > ux ) camx = ux ; 
 
  if ( camx < 0 ) camx = 0 ; 
 
  if ( camy > uy ) camy = uy ; 
 
  if ( camy < 0 ) camy = 0 ; 
 
  }  ; 
TimeAttackSign =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 
 with ( returnVal ) { 
  returnVal . run = function (  ) {  var str = gvLangObj [ "stats" ]  [ "final-time" ]  ;
  var time = formatTime ( game . igt )  ;
 drawText ( font2 ,  ( gvScreenW / 2 )  -  ( str . len (  )  * 4 )  , 64 , str )  ; 
drawText ( font2 ,  ( gvScreenW / 2 )  -  ( time . len (  )  * 4 )  , 80 , time )  ; 
 } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  return squirrelClassFunction; })()) ; 
createPlatformActors =  function ( n , i , c ) {  switch ( n )  {  case 0 :  if (  ! gvPlayer && getroottable (  )  . rawin ( game . playerChar )  )  { 
  if ( game . check == false )  { 
 c = actor [ newActor ( getroottable (  )  [ game . playerChar ]  , i . x + 8 , i . y - 16 )  ]  ; 
 } 
  
  else  { 
 c = actor [ newActor ( getroottable (  )  [ game . playerChar ]  , game . chx , game . chy )  ]  ; 
 } 
  
  } 
  
 camx = c . x -  ( gvScreenW / 2 )  ; 
camy = c . y -  ( gvScreenH / 2 )  ; 
 if ( gvPlayer ) gvCamTarget = gvPlayer ; 
 
  break ;  case 1 : c = newActor ( Coin , i . x + 8 , i . y - 8 )  ; 
 break ;  case 2 : c = newActor ( ItemBlock , i . x + 8 , i . y - 8 , 0 )  ; 
game . maxCoins ++  ; 
 break ;  case 3 : c = newActor ( ItemBlock , i . x + 8 , i . y - 8 , 1 )  ; 
 break ;  case 4 : c = newActor ( ItemBlock , i . x + 8 , i . y - 8 , 2 )  ; 
 break ;  case 5 : c = newActor ( ItemBlock , i . x + 8 , i . y - 8 , 3 )  ; 
 break ;  case 6 : c = newActor ( ItemBlock , i . x + 8 , i . y - 8 , 5 )  ; 
 break ;  case 7 : c = newActor ( ItemBlock , i . x + 8 , i . y - 8 , 4 )  ; 
 break ;  case 8 : c = newActor ( ItemBlock , i . x + 8 , i . y - 8 , 6 )  ; 
 break ;  case 9 : c = newActor ( BadCannon , i . x + 8 , i . y - 8 )  ; 
 break ;  case 10 : c = newActor ( PipeSnake , i . x , i . y , 1 )  ; 
game . maxEnemies ++  ; 
 break ;  case 11 : c = newActor ( PipeSnake , i . x , i . y - 16 ,  - 1 )  ; 
game . maxEnemies ++  ; 
 break ;  case 12 : c = newActor ( Deathcap , i . x + 8 , i . y - 8 , false )  ; 
game . maxEnemies ++  ; 
 break ;  case 13 : c = newActor ( Deathcap , i . x + 8 , i . y - 8 , true )  ; 
game . maxEnemies ++  ; 
 break ;  case 14 : c = newActor ( IceBlock , i . x + 8 , i . y - 8 )  ; 
 break ;  case 15 : c = newActor ( WoodBlock , i . x + 8 , i . y - 8 , i . name )  ; 
 break ;  case 16 : c = actor [ newActor ( Spring , i . x + 8 , i . y - 8 , 0 )  ]  ; 
 if ( i . name != "" ) c . power = i . name . tofloat (  )  ; 
 
  break ;  case 17 : c = actor [ newActor ( Spring , i . x + 8 , i . y - 8 , 1 )  ]  ; 
 if ( i . name != "" ) c . power = i . name . tofloat (  )  ; 
 
  break ;  case 18 : c = actor [ newActor ( Spring , i . x + 8 , i . y - 8 , 2 )  ]  ; 
 if ( i . name != "" ) c . power = i . name . tofloat (  )  ; 
 
  break ;  case 19 : c = actor [ newActor ( Spring , i . x + 8 , i . y - 8 , 3 )  ]  ; 
 if ( i . name != "" ) c . power = i . name . tofloat (  )  ; 
 
  break ;  case 20 : c = newActor ( Ouchin , i . x + 8 , i . y - 8 )  ; 
 break ;  case 21 : c = newActor ( TriggerBlock , i . x + 8 , i . y - 8 , i . name )  ; 
 break ;  case 22 :  if ( gvLangObj [ "info" ]  . rawin ( i . name )  ) c = newActor ( InfoBlock , i . x + 8 , i . y - 8 , textLineLen ( gvLangObj [ "info" ]  [ i . name ]  , gvTextW )  )  ; 
 
  else c = newActor ( InfoBlock , i . x + 8 , i . y - 8 , "" )  ; 
 
  break ;  case 23 :  if ( gvLangObj [ "devcom" ]  . rawin ( i . name )  ) c = newActor ( KelvinScarf , i . x + 8 , i . y - 8 , textLineLen ( gvLangObj [ "devcom" ]  [ i . name ]  , gvTextW )  )  ; 
 
  else c = newActor ( KelvinScarf , i . x + 8 , i . y - 8 , "" )  ; 
 
  break ;  case 24 : c = actor [ newActor ( ItemBlock , i . x + 8 , i . y - 8 )  ]  ; 
c . item = 7 ; 
 break ;  case 25 : c = newActor ( FlyRefresh , i . x + 8 , i . y - 8 )  ; 
 break ;  case 26 : c = newActor ( CarlBoom , i . x + 8 , i . y - 8 )  ; 
game . maxEnemies ++  ; 
 break ;  case 27 : c = newActor ( OrangeBounce , i . x + 8 , i . y - 8 )  ; 
game . maxEnemies ++  ; 
 break ;  case 28 : c = newActor ( BlueFish , i . x + 8 , i . y - 8 )  ; 
game . maxEnemies ++  ; 
 break ;  case 29 : c = newActor ( RedFish , i . x + 8 , i . y - 8 )  ; 
game . maxEnemies ++  ; 
 break ;  case 30 : c = newActor ( BounceBlock , i . x + 8 , i . y - 8 )  ; 
 break ;  case 31 : c = actor [ newActor ( NPC , i . x + 8 , i . y , i . name )  ]  ; 
 break ;  case 32 : c = newActor ( Checkpoint , i . x + 8 , i . y - 16 )  ; 
 break ;  case 33 : c = newActor ( ItemBlock , i . x + 8 , i . y - 8 , 8 )  ; 
 break ;  case 34 : c = newActor ( TNT , i . x + 8 , i . y - 8 )  ; 
 break ;  case 35 : c = newActor ( C4 , i . x + 8 , i . y - 8 )  ; 
 break ;  case 36 : c = newActor ( JellyFish , i . x + 8 , i . y - 8 )  ; 
game . maxEnemies ++  ; 
 break ;  case 37 : c = newActor ( Clamor , i . x + 8 , i . y - 8 , i . name )  ; 
game . maxEnemies ++  ; 
 break ;  case 38 : c = newActor ( ItemBlock , i . x + 8 , i . y - 8 , 9 )  ; 
 break ;  case 39 : c = newActor ( ItemBlock , i . x + 8 , i . y - 8 , 10 )  ; 
 break ;  case 40 : c = actor [ newActor ( SpringD , i . x + 8 , i . y - 8 , 0 )  ]  ; 
 if ( i . name != "" ) c . power = i . name . tofloat (  )  ; 
 
  break ;  case 41 : c = actor [ newActor ( SpringD , i . x + 8 , i . y - 8 , 1 )  ]  ; 
 if ( i . name != "" ) c . power = i . name . tofloat (  )  ; 
 
  break ;  case 42 : c = actor [ newActor ( SpringD , i . x + 8 , i . y - 8 , 2 )  ]  ; 
 if ( i . name != "" ) c . power = i . name . tofloat (  )  ; 
 
  break ;  case 43 : c = actor [ newActor ( SpringD , i . x + 8 , i . y - 8 , 3 )  ]  ; 
 if ( i . name != "" ) c . power = i . name . tofloat (  )  ; 
 
  break ;  case 44 : c = newActor ( GreenFish , i . x + 8 , i . y - 8 )  ; 
game . maxEnemies ++  ; 
 break ;  case 45 : c = newActor ( Icicle , i . x + 8 , i . y - 8 )  ; 
 break ;  case 46 : c = newActor ( FlyAmanita , i . x + 8 , i . y - 8 , i . name )  ; 
game . maxEnemies ++  ; 
 break ;  case 48 : c = newActor ( MagicKey , i . x + 8 , i . y - 8 , 0 )  ; 
 break ;  case 49 : c = newActor ( MagicKey , i . x + 8 , i . y - 8 , 1 )  ; 
 break ;  case 50 : c = newActor ( MagicKey , i . x + 8 , i . y - 8 , 2 )  ; 
 break ;  case 51 : c = newActor ( MagicKey , i . x + 8 , i . y - 8 , 3 )  ; 
 break ;  case 52 : c = newActor ( LockBlock , i . x + 8 , i . y - 8 , 0 )  ; 
 break ;  case 53 : c = newActor ( LockBlock , i . x + 8 , i . y - 8 , 1 )  ; 
 break ;  case 54 : c = newActor ( LockBlock , i . x + 8 , i . y - 8 , 2 )  ; 
 break ;  case 55 : c = newActor ( LockBlock , i . x + 8 , i . y - 8 , 3 )  ; 
 break ;  case 56 : c = newActor ( ColorBlock , i . x , i . y - 16 , 0 )  ; 
 break ;  case 57 : c = newActor ( ColorBlock , i . x , i . y - 16 , 1 )  ; 
 break ;  case 58 : c = newActor ( ColorBlock , i . x , i . y - 16 , 2 )  ; 
 break ;  case 59 : c = newActor ( ColorBlock , i . x , i . y - 16 , 3 )  ; 
 break ;  case 60 : c = newActor ( ColorBlock , i . x , i . y - 16 , 4 )  ; 
 break ;  case 61 : c = newActor ( ColorBlock , i . x , i . y - 16 , 5 )  ; 
 break ;  case 62 : c = newActor ( ColorBlock , i . x , i . y - 16 , 6 )  ; 
 break ;  case 63 : c = newActor ( ColorBlock , i . x , i . y - 16 , 7 )  ; 
 break ;  case 64 :  if ( i . name == "" )  break ;  
  var arg = split ( i . name , "," )  ;
  var n = arg [ 0 ]  ;
 arg . remove ( 0 )  ; 
 if ( arg . len (  )  == 1 ) arg = arg [ 0 ]  ; 
 
  else  if ( arg . len (  )  == 0 ) arg = null ; 
 
  
  if ( getroottable (  )  . rawin ( n )  )  if (  squirrelTypeOf ( getroottable ( ) [ n ] )  == "class" ) c = newActor ( getroottable (  )  [ n ]  , i . x + 8 , i . y - 8 , arg )  ; 
 
  
  break ;  case 65 : c = newActor ( Haywire , i . x + 8 , i . y - 8 )  ; 
game . maxEnemies ++  ; 
 break ;  case 66 : c = newActor ( Livewire , i . x + 8 , i . y - 8 )  ; 
game . maxEnemies ++  ; 
 break ;  case 67 : c = newActor ( Blazeborn , i . x + 8 , i . y - 8 )  ; 
game . maxEnemies ++  ; 
 break ;  case 68 : c = newActor ( Coin5 , i . x + 8 , i . y - 8 )  ; 
 break ;  case 69 : c = newActor ( Coin10 , i . x + 8 , i . y - 8 )  ; 
 break ;  case 70 : c = newActor ( Herring , i . x + 8 , i . y - 8 )  ; 
 break ;  case 71 : c = newActor ( Fishy , i . x + 8 , i . y - 8 )  ; 
 break ;  case 73 : c = newActor ( Jumpy , i . x + 8 , i . y - 8 , i . name )  ; 
game . maxEnemies ++  ; 
 break ;  case 75 : c = newActor ( EvilBlock , i . x + 8 , i . y - 8 )  ; 
 break ;  case 76 : c = newActor ( Crumbler , i . x + 8 , i . y - 8 )  ; 
 break ;  case 77 : c = newActor ( SpecialBall , i . x + 8 , i . y - 8 , i . name . tointeger (  )  )  ; 
 break ;  case 78 : c = newActor ( Berry , i . x + 8 , i . y - 8 )  ; 
 break ;  case 79 : c = newActor ( BossDoor , i . x , i . y - 16 , i . name )  ; 
 break ;  case 80 : c = newActor ( MrIceguy , i . x + 8 , i . y - 8 , i . name )  ; 
game . maxEnemies ++  ; 
 break ;  case 81 : c = newActor ( Owl , i . x + 8 , i . y - 8 , i . name )  ; 
game . maxEnemies ++  ; 
 break ;  case 85 : c = newActor ( Spawner , i . x + 8 , i . y - 8 , i . name )  ; 
 break ;  case 86 : c = newActor ( CharSwapper , i . x + 8 , i . y - 8 , i . name )  ; 
 break ;  case 87 : c = newActor ( SpikeCap , i . x + 8 , i . y - 8 , i . name )  ; 
 break ;  case 88 : c = newActor ( SpikeCap , i . x + 8 , i . y - 8 , i . name )  ; 
actor [ c ]  . moving = true ; 
 break ;  case 89 : c = newActor ( Tallcap , i . x + 8 , i . y - 24 , false )  ; 
 break ;  case 90 : c = newActor ( Tallcap , i . x + 8 , i . y - 24 , true )  ; 
 break ;  case 91 : c = newActor ( CaptainMorel , i . x + 8 , i . y - 8 )  ; 
 break ;  case 92 : c = newActor ( CoffeeCup , i . x + 8 , i . y - 8 )  ; 
 break ;  case 94 : c = newActor ( Crusher , i . x + 8 , i . y - 8 , i . name )  ; 
 break ;  case 95 : c = newActor ( Wheeler , i . x + 8 , i . y - 8 , i . name )  ; 
 break ;  case 96 : c = newActor ( FireBlock , i . x + 8 , i . y - 8 , i . name )  ; 
 break ;  }  return c ;
  }  ; 
createRacerActors =  function ( n , i , c ) {  switch ( n )  {  case 0 : c = newActor ( TuxRacer , i . x + 8 , i . y - 8 )  ; 
 break ;  case 2 : c = newActor ( Herring , i . x + 8 , i . y - 8 )  ; 
 break ;  case 3 :  if ( i . name == "" )  break ;  
  var arg = split ( i . name , "," )  ;
  var n = arg [ 0 ]  ;
 arg . remove ( 0 )  ; 
 if ( arg . len (  )  == 1 ) arg = arg [ 0 ]  ; 
 
  else  if ( arg . len (  )  == 0 ) arg = null ; 
 
  
  if ( getroottable (  )  . rawin ( n )  )  if (  squirrelTypeOf ( getroottable ( ) [ n ] )  == "class" ) c = newActor ( getroottable (  )  [ n ]  , i . x + 8 , i . y - 8 , arg )  ; 
 
  
  break ;  }  return c ;
  }  ; 



}; 
