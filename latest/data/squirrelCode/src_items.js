if (!window.superTuxAdvanceWebVersion) window.superTuxAdvanceWebVersion = {}; 
if (!window.superTuxAdvanceWebVersion.squirrelFiles) window.superTuxAdvanceWebVersion.squirrelFiles = {}; 

window.superTuxAdvanceWebVersion.squirrelFiles['src/items.nut'] = function () { 


Coin =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  returnVal . frame = 0.0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   baseConstructor  ( _x , _y )  ; 
frame = randFloat ( 4 )  ; 
game . maxCoins ++  ; 
 } ;  returnVal . run = function (  ) { frame += 0.2 ; 
drawSprite ( sprCoin , frame , x - camx , y - camy )  ; 
 if ( gvPlayer )  if ( inDistance2 ( x , y , gvPlayer . x , gvPlayer . y + 2 , 16 )  )  { 
 deleteActor ( id )  ; 
newActor ( CoinEffect , x , y )  ; 
 } 
  
  
  } ;  returnVal . _typeof = function (  ) {  return "Coin" ;
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  }  ; 
Coin5 =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  returnVal . frame = 0.0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   baseConstructor  ( _x , _y )  ; 
frame = randFloat ( 4 )  ; 
game . maxCoins = game . maxCoins + 5 ; 
 } ;  returnVal . run = function (  ) { frame += 0.2 ; 
drawSprite ( sprCoin5 , frame , x - camx , y - camy )  ; 
 if ( gvPlayer )  if ( inDistance2 ( x , y , gvPlayer . x , gvPlayer . y + 2 , 16 )  )  { 
 deleteActor ( id )  ; 
newActor ( CoinEffect , x , y , 5 )  ; 
 } 
  
  
  } ;  returnVal . _typeof = function (  ) {  return "Coin" ;
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  }  ; 
Coin10 =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  returnVal . frame = 0.0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   baseConstructor  ( _x , _y )  ; 
frame = randFloat ( 4 )  ; 
game . maxCoins = game . maxCoins + 10 ; 
 } ;  returnVal . run = function (  ) { frame += 0.2 ; 
drawSprite ( sprCoin10 , frame , x - camx , y - camy )  ; 
 if ( gvPlayer )  if ( inDistance2 ( x , y , gvPlayer . x , gvPlayer . y + 2 , 16 )  )  { 
 deleteActor ( id )  ; 
newActor ( CoinEffect , x , y , 10 )  ; 
 } 
  
  
  } ;  returnVal . _typeof = function (  ) {  return "Coin" ;
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  }  ; 
Berry =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   baseConstructor  ( _x , _y )  ; 
 } ;  returnVal . run = function (  ) { drawSprite ( sprBerry , 0 , x - camx , y - camy +  (  ( getFrames (  )  / 16 )  % 2 == 0 )  . tointeger (  )  )  ; 
 if ( gvPlayer )  if ( inDistance2 ( x , y , gvPlayer . x , gvPlayer . y + 2 , 16 )  )  { 
 deleteActor ( id )  ; 
game . berries ++  ; 
stopSound ( sndGulp )  ; 
playSound ( sndGulp , 0 )  ; 
 } 
  
  
  } ;  returnVal . _typeof = function (  ) {  return "Coin" ;
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  }  ; 
RedCoin =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  returnVal . frame = 0.0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   baseConstructor  ( _x , _y )  ; 
frame = randFloat ( 4 )  ; 
game . maxredcoins ++  ; 
 } ;  returnVal . run = function (  ) { frame += 0.1 ; 
drawSprite ( sprHerring , 0 , x - camx , y - camy +  (  ( getFrames (  )  / 16 )  % 2 == 0 )  . tointeger (  )  )  ; 
 if ( gvPlayer )  if ( inDistance2 ( x , y , gvPlayer . x , gvPlayer . y + 2 , 16 )  )  { 
 deleteActor ( id )  ; 
playSoundChannel ( sndFish , 0 , 1 )  ; 
game . levelredcoins ++  ; 
 } 
  
  
  } ;  returnVal . _typeof = function (  ) {  return "Coin" ;
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  }  ; 
FlowerFire =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   baseConstructor  ( _x , _y )  ; 
 } ;  returnVal . run = function (  ) { drawSprite ( sprFlowerFire , getFrames (  )  / 16 , x - camx , y - camy )  ; 
 if ( gvPlayer )  if ( inDistance2 ( x , y , gvPlayer . x , gvPlayer . y + 2 , 14 )  )  { 
 deleteActor ( id )  ; 
 if ( game . weapon == 0 )  { 
 game . weapon = 1 ; 
game . maxEnergy = 4 - game . difficulty + game . fireBonus ; 
 } 
  
  else  { 
 game . subitem = game . weapon ; 
game . maxEnergy = 4 - game . difficulty + game . fireBonus ; 
game . weapon = 1 ; 
 } 
  
 playSoundChannel ( sndHeal , 0 , 1 )  ; 
 if ( gvPlayer . rawin ( "tftime" )  ) gvPlayer . tftime = 0 ; 
 
  } 
  
  
  } ;  returnVal . _typeof = function (  ) {  return "FlowerFire" ;
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  }  ; 
FlowerIce =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   baseConstructor  ( _x , _y )  ; 
 } ;  returnVal . run = function (  ) { drawSprite ( sprFlowerIce , getFrames (  )  / 16 , x - camx , y - camy )  ; 
 if ( gvPlayer )  if ( inDistance2 ( x , y , gvPlayer . x , gvPlayer . y + 2 , 14 )  )  { 
 deleteActor ( id )  ; 
 if ( game . weapon == 0 )  { 
 game . weapon = 2 ; 
game . maxEnergy = 4 - game . difficulty + game . iceBonus ; 
 } 
  
  else  { 
 game . subitem = game . weapon ; 
game . maxEnergy = 4 - game . difficulty + game . iceBonus ; 
game . weapon = 2 ; 
 } 
  
 playSoundChannel ( sndHeal , 0 , 1 )  ; 
 if ( gvPlayer . rawin ( "tftime" )  ) gvPlayer . tftime = 0 ; 
 
  } 
  
  
  } ;  returnVal . _typeof = function (  ) {  return "FlowerIce" ;
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  }  ; 
MuffinBlue =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = PhysAct ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  returnVal . flip = false ; 
 returnVal . willwrite = false ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   baseConstructor  ( _x , _y )  ; 
shape = Rec ( x , y , 6 , 7 , 0 )  ; 
 if ( gvPlayer )  { 
  if ( x < gvPlayer . x ) flip = true ; 
 
  } 
  
  if ( _arr != null ) willwrite = _arr ; 
 
  } ;  returnVal . run = function (  ) {  if ( placeFree ( x , y + 1 )  )  { 
  if ( inWater ( x , y )  ) vspeed += 0.01 ; 
 
  else vspeed += 0.2 ; 
 
  } 
  
  if ( placeFree ( x , y + vspeed )  ) y += vspeed ; 
 
  else vspeed /= 2 ; 
 
  if ( y > gvMap . h + 8 ) deleteActor ( id )  ; 
 
  if ( flip )  { 
  if ( placeFree ( x - 1 , y )  ) x -= 1.0 ; 
 
  else  if ( placeFree ( x - 2 , y - 2 )  )  { 
 x -= 1.0 ; 
y -= 1.0 ; 
 } 
  
  else  if ( placeFree ( x - 1 , y - 2 )  )  { 
 x -= 1.0 ; 
y -= 1.0 ; 
 } 
  
  else flip = false ; 
 
  
  
  if ( x <= 0 ) flip = false ; 
 
  } 
  
  else  { 
  if ( placeFree ( x + 1 , y )  ) x += 1.0 ; 
 
  else  if ( placeFree ( x + 1 , y - 1 )  )  { 
 x += 1.0 ; 
y -= 1.0 ; 
 } 
  
  else  if ( placeFree ( x + 2 , y - 2 )  )  { 
 x += 1.0 ; 
y -= 1.0 ; 
 } 
  
  else flip = true ; 
 
  
  
  if ( x >= gvMap . w ) flip = true ; 
 
  } 
  
 shape . setPos ( x , y )  ; 
 if ( gvPlayer )  if ( inDistance2 ( x , y , gvPlayer . x , gvPlayer . y , 14 )  )  { 
  if ( game . health < game . maxHealth )  { 
 game . health += 4 ; 
 for (  var i = 0 ;
 i < 4 ; i ++  )  { 
 newActor ( Heal , gvPlayer . x - 16 + randInt ( 32 )  , gvPlayer . y - 16 + randInt ( 32 )  )  ; 
 } 
  } 
  
  else  if ( game . subitem != 6 &&  ( game . subitem == 0 || willwrite )  ) game . subitem = 5 ; 
 
  
 deleteActor ( id )  ; 
playSoundChannel ( sndHeal , 0 , 1 )  ; 
 } 
  
  
 drawSprite ( sprMuffin , 0 , x - camx , y - camy )  ; 
 } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  }  ; 
MuffinRed =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = PhysAct ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  returnVal . flip = false ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   baseConstructor  ( _x , _y )  ; 
shape = Rec ( x , y , 4 , 7 , 0 )  ; 
 if ( gvPlayer )  { 
  if ( x < gvPlayer . x ) flip = true ; 
 
  } 
  
  } ;  returnVal . run = function (  ) {  if ( placeFree ( x , y + 1 )  )  { 
  if ( inWater ( x , y )  ) vspeed += 0.01 ; 
 
  else vspeed += 0.2 ; 
 
  } 
  
  if ( placeFree ( x , y + vspeed )  ) y += vspeed ; 
 
  else vspeed /= 2 ; 
 
  if ( y > gvMap . h + 8 ) deleteActor ( id )  ; 
 
  if ( flip )  { 
  if ( placeFree ( x - 1 , y )  ) x -= 1.0 ; 
 
  else  if ( placeFree ( x - 2 , y - 2 )  )  { 
 x -= 1.0 ; 
y -= 1.0 ; 
 } 
  
  else  if ( placeFree ( x - 1 , y - 2 )  )  { 
 x -= 1.0 ; 
y -= 1.0 ; 
 } 
  
  else flip = false ; 
 
  
  
  if ( x <= 0 ) flip = false ; 
 
  } 
  
  else  { 
  if ( placeFree ( x + 1 , y )  ) x += 1.0 ; 
 
  else  if ( placeFree ( x + 1 , y - 1 )  )  { 
 x += 1.0 ; 
y -= 1.0 ; 
 } 
  
  else  if ( placeFree ( x + 2 , y - 2 )  )  { 
 x += 1.0 ; 
y -= 1.0 ; 
 } 
  
  else flip = true ; 
 
  
  
  if ( x >= gvMap . w ) flip = true ; 
 
  } 
  
 shape . setPos ( x , y )  ; 
 if ( gvPlayer )  if ( inDistance2 ( x , y , gvPlayer . x , gvPlayer . y , 14 )  )  { 
  if ( game . health < game . maxHealth - 3 )  { 
 game . health += 12 ; 
 for (  var i = 0 ;
 i < 4 ; i ++  )  { 
 newActor ( Heal , gvPlayer . x - 16 + randInt ( 32 )  , gvPlayer . y - 16 + randInt ( 32 )  )  ; 
 } 
  } 
  
  else  if ( game . health < game . maxHealth )  { 
 game . health = game . maxHealth ; 
 for (  var i = 0 ;
 i < 4 ; i ++  )  { 
 newActor ( Heal , gvPlayer . x - 16 + randInt ( 32 )  , gvPlayer . y - 16 + randInt ( 32 )  )  ; 
 } 
  } 
  
  else game . subitem = 6 ; 
 
  
 deleteActor ( id )  ; 
playSoundChannel ( sndHeal , 0 , 1 )  ; 
 } 
  
  
 drawSprite ( sprMuffin , 1 , x - camx , y - camy )  ; 
 } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  }  ; 
MuffinEvil =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = PhysAct ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  returnVal . flip = false ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   baseConstructor  ( _x , _y )  ; 
shape = Rec ( x , y , 4 , 7 , 0 )  ; 
 if ( gvPlayer )  { 
  if ( x > gvPlayer . x ) flip = true ; 
 
  } 
  
  } ;  returnVal . run = function (  ) {  if ( placeFree ( x , y + 1 )  ) vspeed += 0.2 ; 
 
  if ( placeFree ( x , y + vspeed )  ) y += vspeed ; 
 
  else vspeed /= 2 ; 
 
  if ( y > gvMap . h + 8 ) deleteActor ( id )  ; 
 
  if ( flip )  { 
  if ( placeFree ( x - 1 , y )  ) x -= 1.0 ; 
 
  else  if ( placeFree ( x - 2 , y - 2 )  )  { 
 x -= 1.0 ; 
y -= 1.0 ; 
 } 
  
  else  if ( placeFree ( x - 1 , y - 2 )  )  { 
 x -= 1.0 ; 
y -= 1.0 ; 
 } 
  
  else flip = false ; 
 
  
  
  if ( x <= 0 ) flip = false ; 
 
  } 
  
  else  { 
  if ( placeFree ( x + 1 , y )  ) x += 1.0 ; 
 
  else  if ( placeFree ( x + 1 , y - 1 )  )  { 
 x += 1.0 ; 
y -= 1.0 ; 
 } 
  
  else  if ( placeFree ( x + 2 , y - 2 )  )  { 
 x += 1.0 ; 
y -= 1.0 ; 
 } 
  
  else flip = true ; 
 
  
  
  if ( x >= gvMap . w ) flip = true ; 
 
  } 
  
 shape . setPos ( x , y )  ; 
 if ( gvPlayer )  if ( inDistance2 ( x , y , gvPlayer . x , gvPlayer . y , 14 )  )  { 
  if ( gvPlayer . blinking > 0 )  return ; 
  
  if ( gvPlayer . x < x ) gvPlayer . hspeed =  - 1.0 ; 
 
  else gvPlayer . hspeed = 1.0 ; 
 
 gvPlayer . hurt = 1 ; 
deleteActor ( id )  ; 
 } 
  
  
 drawSprite ( sprMuffin , 2 , x - camx , y - camy )  ; 
 } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  }  ; 
Onedown =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  returnVal . frame = 0.0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   baseConstructor  ( _x , _y )  ; 
frame = randFloat ( 4 )  ; 
 } ;  returnVal . run = function (  ) {  if ( getFrames (  )  % 20 == 0 )  { 
 newActor ( FlameTiny , x - 8 + randInt ( 16 )  , y - 8 + randInt ( 16 )  )  ; 
 } 
  
 frame += 0.2 ; 
drawSprite ( spr1down , frame , x - camx , y - camy )  ; 
 if ( gvPlayer )  if ( inDistance2 ( x , y , gvPlayer . x , gvPlayer . y + 2 , 16 )  )  { 
 deleteActor ( id )  ; 
gvPlayer . hurt = 16 ; 
 } 
  
  
  } ;  returnVal . _typeof = function (  ) {  return "Coin" ;
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  }  ; 
Darknyan =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = PhysAct ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  returnVal . hspeed = 0 ; 
 returnVal . vspeed =  - 3 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   baseConstructor  ( _x , _y )  ; 
 if ( gvPlayer )  if ( gvPlayer . x > x ) hspeed =  - 2 ; 
 
  else hspeed = 2 ; 
 
  
 shape = Rec ( x , y , 6 , 6 , 0 )  ; 
 } ;  returnVal . run = function (  ) {  if (  ! placeFree ( x , y + 2 )  ) vspeed =  - 5 ; 
 
  if (  ! placeFree ( x + 2 , y )  ) hspeed =  - 2 ; 
 
  if (  ! placeFree ( x - 2 , y )  ) hspeed = 2 ; 
 
 vspeed += 0.2 ; 
 if ( placeFree ( x + hspeed , y )  ) x += hspeed ; 
 
  if ( placeFree ( x , y + vspeed )  ) y += vspeed ; 
 
  else vspeed /= 2 ; 
 
 shape . setPos ( x , y )  ; 
 if ( gvPlayer )  if ( inDistance2 ( x , y , gvPlayer . x , gvPlayer . y , 16 )  )  { 
 gvPlayer . hurt = 6 ; 
 } 
  
  
 drawSprite ( sprDarkStar , getFrames (  )  / 10 , x - camx , y - camy )  ; 
 } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  }  ; 
Starnyan =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = PhysAct ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  returnVal . hspeed = 0 ; 
 returnVal . vspeed =  - 4 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   baseConstructor  ( _x , _y )  ; 
 if ( gvPlayer )  if ( gvPlayer . x > x ) hspeed =  - 2 ; 
 
  else hspeed = 2 ; 
 
  
 shape = Rec ( x , y , 6 , 6 , 0 )  ; 
 } ;  returnVal . run = function (  ) {  if (  ! placeFree ( x , y + 2 )  ) vspeed =  - 5 ; 
 
  if (  ! placeFree ( x + 2 , y )  ) hspeed =  - 2 ; 
 
  if (  ! placeFree ( x - 2 , y )  ) hspeed = 2 ; 
 
 vspeed += 0.25 ; 
 if ( placeFree ( x + hspeed , y )  ) x += hspeed ; 
 
  if ( placeFree ( x , y + vspeed )  ) y += vspeed ; 
 
  else vspeed /= 2 ; 
 
 shape . setPos ( x , y )  ; 
 if ( gvPlayer )  if ( inDistance2 ( x , y , gvPlayer . x , gvPlayer . y , 16 )  )  { 
 gvPlayer . invincible = 645 ; 
deleteActor ( id )  ; 
playMusic ( musInvincible ,  - 1 )  ; 
gvLastSong = "" ; 
 } 
  
  
 drawSprite ( sprStar , getFrames (  )  / 10 , x - camx , y - camy )  ; 
 } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  }  ; 
AirFeather =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = PhysAct ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  returnVal . vspeed =  - 2.0 ; 
 returnVal . hspeed = 0.0 ; 
 returnVal . frame = 1.5 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   baseConstructor  ( _x , _y )  ; 
 if ( gvPlayer )  if ( x > gvPlayer . x ) frame = 3.5 ; 
 
  
 shape = Rec ( x , y , 6 , 6 , 0 )  ; 
 } ;  returnVal . run = function (  ) {  if ( vspeed < 0.2 ) vspeed += 0.05 ; 
 
  if ( floor ( frame )  == 0 || floor ( frame )  == 2 ) frame += 0.01 ; 
 
  else frame += 0.1 ; 
 
  if ( frame >= 4.0 ) frame -= 4.0 ; 
 
  if ( floor ( frame )  == 1 ) hspeed += 0.1 ; 
 
  if ( floor ( frame )  == 3 ) hspeed -= 0.1 ; 
 
 x += hspeed ; 
y += vspeed ; 
shape . setPos ( x , y )  ; 
drawSprite ( sprAirFeather , frame , x - camx , y - camy )  ; 
 if ( gvPlayer )  if ( hitTest ( shape , gvPlayer . shape )  )  { 
 playSoundChannel ( sndHeal , 0 , 1 )  ; 
 if ( game . weapon == 0 )  { 
 game . weapon = 3 ; 
game . maxEnergy = 4 - game . difficulty + game . airBonus ; 
 } 
  
  else  { 
 game . subitem = game . weapon ; 
game . maxEnergy = 4 - game . difficulty + game . airBonus ; 
game . weapon = 3 ; 
 } 
  
  if ( gvPlayer . rawin ( "tftime" )  ) gvPlayer . tftime = 0 ; 
 
 deleteActor ( id )  ; 
 } 
  
  
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  }  ; 
FlyRefresh =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  
 with ( returnVal ) { 
  returnVal . run = function (  ) {  if ( gvPlayer )  if ( inDistance2 ( gvPlayer . x , gvPlayer . y , x , y , 16 )  )  if ( gvPlayer . rawin ( "energy" )  && game . weapon == 3 ) gvPlayer . energy = 8 ; 
 
  
  
 drawSpriteEx ( sprTinyWind , getFrames (  )  / 8 , x - camx , y - camy - 8 , 0 , 2 , 1 , 1 , 0.25 )  ; 
drawSpriteEx ( sprTinyWind , getFrames (  )  / 8 , x - camx , y - camy + 8 , 0 , 0 , 1 , 1 , 0.25 )  ; 
drawSprite ( sprFlyRefresh , getFrames (  )  / 8 , x - camx , y - camy )  ; 
 } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  }  ; 
OneUp =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = PhysAct ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  returnVal . hspeed = 0 ; 
 returnVal . vspeed =  - 2 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   baseConstructor  ( _x , _y )  ; 
 if ( gvPlayer )  if ( gvPlayer . x > x ) hspeed =  - 1 ; 
 
  else hspeed = 1 ; 
 
  
 shape = Rec ( x , y , 6 , 6 , 0 )  ; 
 } ;  returnVal . run = function (  ) {  if (  ! placeFree ( x , y + 1 )  ) vspeed =  - 3 ; 
 
  if (  ! placeFree ( x + 1 , y )  ) hspeed =  - 1 ; 
 
  if (  ! placeFree ( x - 1 , y )  ) hspeed = 1 ; 
 
 vspeed += 0.1 ; 
 if ( placeFree ( x + hspeed , y )  ) x += hspeed ; 
 
  if ( placeFree ( x , y + vspeed )  ) y += vspeed ; 
 
  else vspeed /= 2 ; 
 
 shape . setPos ( x , y )  ; 
 if ( gvPlayer )  if ( inDistance2 ( x , y , gvPlayer . x , gvPlayer . y , 16 )  )  { 
 game . canres = true ; 
playSound ( snd1up , 0 )  ; 
deleteActor ( id )  ; 
 } 
  
  
 drawSprite ( getroottable (  )  [ game . characters [ game . playerChar ]  [ 1 ]  ]  , game . weapon , x - camx , y + 8 - camy )  ; 
 } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  }  ; 
MuffinBomb =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = PhysAct ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  returnVal . flip = false ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   baseConstructor  ( _x , _y )  ; 
shape = Rec ( x , y , 4 , 7 , 0 )  ; 
 if ( gvPlayer )  { 
  if ( x > gvPlayer . x ) flip = true ; 
 
  } 
  
  } ;  returnVal . run = function (  ) {  if ( placeFree ( x , y + 1 )  )  { 
  if ( inWater ( x , y )  ) vspeed += 0.01 ; 
 
  else vspeed += 0.2 ; 
 
  } 
  
  if ( placeFree ( x , y + vspeed )  ) y += vspeed ; 
 
  else vspeed /= 2 ; 
 
  if ( y > gvMap . h + 8 ) deleteActor ( id )  ; 
 
  if ( flip )  { 
  if ( placeFree ( x - 1 , y )  ) x -= 1.0 ; 
 
  else  if ( placeFree ( x - 2 , y - 2 )  )  { 
 x -= 1.0 ; 
y -= 1.0 ; 
 } 
  
  else  if ( placeFree ( x - 1 , y - 2 )  )  { 
 x -= 1.0 ; 
y -= 1.0 ; 
 } 
  
  else flip = false ; 
 
  
  
  if ( x <= 0 ) flip = false ; 
 
  } 
  
  else  { 
  if ( placeFree ( x + 1 , y )  ) x += 1.0 ; 
 
  else  if ( placeFree ( x + 1 , y - 1 )  )  { 
 x += 1.0 ; 
y -= 1.0 ; 
 } 
  
  else  if ( placeFree ( x + 2 , y - 2 )  )  { 
 x += 1.0 ; 
y -= 1.0 ; 
 } 
  
  else flip = true ; 
 
  
  
  if ( x >= gvMap . w ) flip = true ; 
 
  } 
  
 shape . setPos ( x , y )  ; 
 if ( gvPlayer )  if ( inDistance2 ( x , y , gvPlayer . x , gvPlayer . y , 14 )  )  { 
  if ( gvPlayer . blinking > 0 )  return ; 
  
  if ( gvPlayer . x < x ) gvPlayer . hspeed =  - 1.0 ; 
 
  else gvPlayer . hspeed = 1.0 ; 
 
 newActor ( BadExplode , x , y )  ; 
deleteActor ( id )  ; 
 } 
  
  
 drawSprite ( sprMuffin , 3 , x - camx , y - camy )  ; 
 } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  }  ; 
EarthShell =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   baseConstructor  ( _x , _y )  ; 
 } ;  returnVal . run = function (  ) { drawSprite ( sprEarthShell , getFrames (  )  / 16 , x - camx , y - camy )  ; 
 if ( gvPlayer )  if ( inDistance2 ( x , y , gvPlayer . x , gvPlayer . y + 2 , 14 )  )  { 
 deleteActor ( id )  ; 
 if ( game . weapon == 0 )  { 
 game . weapon = 4 ; 
game . maxEnergy = 4 - game . difficulty + game . earthBonus ; 
 } 
  
  else  { 
 game . subitem = game . weapon ; 
game . maxEnergy = 4 - game . difficulty + game . earthBonus ; 
game . weapon = 4 ; 
 } 
  
 playSoundChannel ( sndHeal , 0 , 1 )  ; 
 if ( gvPlayer . rawin ( "tftime" )  ) gvPlayer . tftime = 0 ; 
 
  } 
  
  
  } ;  returnVal . _typeof = function (  ) {  return "EarthShell" ;
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  }  ; 
SpecialBall =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  returnVal . num = 0 ; 
 returnVal . shape = null ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   baseConstructor  ( _x , _y )  ; 
shape = Cir ( x , y , 8 )  ; 
num = _arr ; 
 if ( game . secretOrbs [ num ]  ) deleteActor ( id )  ; 
 
  } ;  returnVal . run = function (  ) {  if ( gvPlayer )  if ( inDistance2 ( x , y , gvPlayer . x , gvPlayer . y , 16 )  )  { 
 game . secretOrbs [ num ] = true ; 
deleteActor ( id )  ; 
 } 
  
  
 drawSprite ( sprSpecialBall , getFrames (  )  / 4 , x - camx , y - camy )  ; 
 } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  }  ; 
CoinRing =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  returnVal . r = 0.0 ; 
 returnVal . c = 0.0 ; 
 returnVal . s = 0.0 ; 
 returnVal . a = 0.0 ; 
 returnVal . l = null ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

  x = _x ; 
y = _y ; 
 baseConstructor  ( _x , _y )  ; 
r = _arr [ 0 ]  . tofloat (  )  ; 
c = _arr [ 1 ]  . tointeger (  )  ; 
s = _arr [ 2 ]  . tofloat (  )  ; 
l =  [  ]  ; 
 for (  var i = 0 ;
 i < c ; i ++  )  { 
 l . push ( newActor ( Coin , x , y )  )  ; 
 } 
  } ;  returnVal . run = function (  ) {  var cl = c ;
 a += s / 60.0 ; 
 for (  var i = 0 ;
 i < c ; i ++  )  { 
  if ( checkActor ( l [ i ]  )  )  { 
 actor [ l [ i ]  ]  . x = x + r * cos (  ( i * 2 * pi / c )  + a )  ; 
actor [ l [ i ]  ]  . y = y + r * sin (  ( i * 2 * pi / c )  + a )  ; 
 } 
  
  else cl --  ; 
 
  } 
  if ( cl == 0 ) deleteActor ( id )  ; 
 
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  }  ; 
MagicKey =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  returnVal . color = 0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   baseConstructor  ( _x , _y )  ; 
 if ( _arr != null ) color = _arr . tointeger (  )  ; 
 
  } ;  returnVal . run = function (  ) {  if ( gvPlayer )  if ( inDistance2 ( x , y , gvPlayer . x , gvPlayer . y , 16 )  )  { 
 deleteActor ( id )  ; 
 switch ( color )  {  case 0 : gvKeyCopper = true ; 
 break ;  case 1 : gvKeySilver = true ; 
 break ;  case 2 : gvKeyGold = true ; 
 break ;  case 3 : gvKeyMythril = true ; 
 break ;  default : gvKeyCopper = true ; 
 break ;  } playSound ( snd1up , 0 )  ; 
 } 
  
  
  switch ( color )  {  case 0 : drawSprite ( sprKeyCopper , getFrames (  )  / 8 , x - camx , y - camy )  ; 
 break ;  case 1 : drawSprite ( sprKeySilver , getFrames (  )  / 8 , x - camx , y - camy )  ; 
 break ;  case 2 : drawSprite ( sprKeyGold , getFrames (  )  / 8 , x - camx , y - camy )  ; 
 break ;  case 3 : drawSprite ( sprKeyMythril , getFrames (  )  / 8 , x - camx , y - camy )  ; 
 break ;  default : drawSprite ( sprKeyCopper , getFrames (  )  / 8 , x - camx , y - camy )  ; 
 break ;  }  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  }  ; 



}; 
