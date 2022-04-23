if (!window.superTuxAdvanceWebVersion) window.superTuxAdvanceWebVersion = {}; 
if (!window.superTuxAdvanceWebVersion.squirrelFiles) window.superTuxAdvanceWebVersion.squirrelFiles = {}; 

window.superTuxAdvanceWebVersion.squirrelFiles['src/debug.nut'] = function () { 


debug = false ; 
debugTickIndex = 0 ; 
debugTickSum = 0 ; 
debugTickList = array ( 64 , 0 )  ; 
devcom = false ; 
drawDebug =  function (  ) {  if ( keyPress ( k_tick )  ) devcom =  ! devcom ; 
 
  var fps = getFPS (  )  ;
 debugTickSum -= debugTickList [ debugTickIndex ]  ; 
debugTickSum += fps ; 
debugTickList [ debugTickIndex ] = fps ; 
debugTickIndex ++  ; 
 if ( debugTickIndex == 64 ) debugTickIndex = 0 ; 
 
 fps = debugTickSum / 64 ; 
 if (  ! debug )  return ; 
  
  if ( keyPress ( k_1 )  ) game . weapon = 0 ; 
 
  if ( keyPress ( k_2 )  )  { 
 game . weapon = 1 ; 
game . maxEnergy = 4 - game . difficulty + game . fireBonus ; 
 } 
  
  if ( keyPress ( k_3 )  )  { 
 game . weapon = 2 ; 
game . maxEnergy = 4 - game . difficulty + game . iceBonus ; 
 } 
  
  if ( keyPress ( k_4 )  )  { 
 game . weapon = 3 ; 
game . maxEnergy = 4 - game . difficulty + game . airBonus ; 
 } 
  
  if ( keyPress ( k_5 )  )  { 
 game . weapon = 4 ; 
game . maxEnergy = 4 - game . difficulty + game . earthBonus ; 
 } 
  
  if ( keyPress ( k_0 )  ) game . maxHealth = 16 ; 
 
  if ( keyPress ( k_9 )  ) game . health += 4 ; 
 
  if ( keyPress ( k_minus )  ) game . maxHealth = game . maxHealth - 4 ; 
 
  if ( keyPress ( k_equals )  ) game . maxHealth = game . maxHealth + 4 ; 
 
  if ( keyDown ( k_lctrl )  || keyDown ( k_rctrl )  )  { 
  if ( keyPress ( k_k )  )  { 
 gvKeyCopper = true ; 
gvKeySilver = true ; 
gvKeyGold = true ; 
gvKeyMythril = true ; 
 } 
  
  } 
  
  if ( gvPlayer && mouseDown ( 0 )  )  { 
 gvPlayer . x = mouseX (  )  + camx ; 
gvPlayer . y = mouseY (  )  + camy ; 
gvPlayer . hspeed = 0.0 ; 
gvPlayer . vspeed = 0.0 ; 
 if ( gvGameMode == gmOverworld )  { 
 gvPlayer . x =  ( gvPlayer . x -  ( gvPlayer . x % 16 )  )  + 8 ; 
gvPlayer . y =  ( gvPlayer . y -  ( gvPlayer . y % 16 )  )  + 8 ; 
 } 
  
  } 
  
  var message = "" ;
  if ( gvPlayer )  { 
 message += "X: " + gvPlayer . x + "\n" ; 
message += "Y: " + gvPlayer . y + "\n" ; 
 } 
  
  else  { 
 message += "X: YOU'RE\nY:  DEAD\n" ; 
 } 
  
 message += "FPS: " + round ( fps )  + " (" + getFPS (  )  + ")\n\n\n\n" ; 
drawSprite ( sprDebug , getcon ( "left" , "hold" )  . tointeger (  )  , 4 , 60 )  ; 
drawSprite ( sprDebug , getcon ( "up" , "hold" )  . tointeger (  )  + 4 , 12 , 56 )  ; 
drawSprite ( sprDebug , getcon ( "down" , "hold" )  . tointeger (  )  + 6 , 12 , 64 )  ; 
drawSprite ( sprDebug , getcon ( "right" , "hold" )  . tointeger (  )  + 2 , 20 , 60 )  ; 
drawSprite ( sprDebug , getcon ( "jump" , "hold" )  . tointeger (  )  + 8 , 4 , 72 )  ; 
drawSprite ( sprDebug , getcon ( "shoot" , "hold" )  . tointeger (  )  + 10 , 12 , 72 )  ; 
drawSprite ( sprDebug , getcon ( "run" , "hold" )  . tointeger (  )  + 12 , 20 , 72 )  ; 
message += "HSPD: " ; 
 if ( gvPlayer ) message += gvPlayer . hspeed . tostring (  )  ; 
 
 message += "\nVSPD: " ; 
 if ( gvPlayer ) message += gvPlayer . vspeed . tostring (  )  ; 
 
 message += "\n\n" ; 
 if ( gvMap != 0 ) message += "Map W: " + gvMap . w + "\n" ; 
 
  if ( gvMap != 0 ) message += "Map H: " + gvMap . h + "\n" ; 
 
 message += "SRT: " + floor ( getTicks (  )  / 1000 )  + "\n" ; 
message += "Enemies: " + game . enemies + "\n" ; 
message += "Secrets: " + game . secrets + "\n" ; 
drawText ( font , 0 , 32 , message )  ; 
setDrawColor ( 0xff0000ff )  ; 
drawLine ( mouseX (  )  - 8 , mouseY (  )  , mouseX (  )  + 8 , mouseY (  )  )  ; 
drawLine ( mouseX (  )  , mouseY (  )  - 8 , mouseX (  )  , mouseY (  )  + 8 )  ; 
 }  ; 
debugConsole =  function (  ) { setDrawTarget ( bgPause )  ; 
drawImage ( gvScreen , 0 , 0 )  ; 
resetDrawTarget (  )  ; 
update (  )  ; 
 var output = "" ;
  var history =  [  ]  ;
  var input = "" ;
  while (  ! keyPress ( k_tick )  &&  ! keyPress ( k_escape )  )  { 
  if ( keyPress ( k_backspace )  && input . len (  )  > 0 ) input = input . slice ( 0 ,  - 1 )  ; 
 
  if ( keyPress ( k_enter )  )  { 
 dostr ( input )  ; 
history . push ( input )  ; 
 if ( history . len (  )  > 15 ) history . remove ( 0 )  ; 
 
 input = "" ; 
 } 
  
  var newchar = keyString (  )  ;
  if ( newchar != "`" ) input += newchar ; 
 
 setDrawTarget ( gvScreen )  ; 
drawImage ( bgPause , 0 , 0 )  ; 
setDrawColor ( 0x00000080 )  ; 
drawRec ( 0 , 0 , screenW (  )  , 8 * 16 , true )  ; 
output = "" ; 
 for (  var i = 0 ;
 i < history . len (  )  ; i ++  )  { 
 output += history [ i ]  ; 
output += "\n" ; 
 } 
  if ( input . len (  )  < 52 ) output += input ; 
 
  else output += input . slice (  - 52 )  ; 
 
  if ( floor ( getFrames (  )  / 32 )  % 2 == 0 ) output += "|" ; 
 
 drawText ( font , 0 , 0 , output )  ; 
resetDrawTarget (  )  ; 
drawImage ( gvScreen , 0 , 0 )  ; 
update (  )  ; 
 } 
  
  }  ; 
PolyTest =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  returnVal . path = null ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   baseConstructor  ( _x , _y )  ; 
path = _arr [ 0 ]  ; 
 } ;  returnVal . run = function (  ) { setDrawColor ( 0xff0000ff )  ; 
 for (  var i = 0 ;
 i < path . len (  )  - 1 ; i ++  ) drawLine ( path [ i ]  [ 0 ]  - camx , path [ i ]  [ 1 ]  - camy , path [ i + 1 ]  [ 0 ]  - camx , path [ i + 1 ]  [ 1 ]  - camy )  ; 
 } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  }  ; 



}; 
