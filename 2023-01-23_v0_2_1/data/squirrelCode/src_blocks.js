if (!window.superTuxAdvanceWebVersion) window.superTuxAdvanceWebVersion = {}; 
if (!window.superTuxAdvanceWebVersion.squirrelFiles) window.superTuxAdvanceWebVersion.squirrelFiles = {}; 

window.superTuxAdvanceWebVersion.squirrelFiles['src/blocks.nut'] = function () { 


WoodBlock =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . shape = 0 ; 
 returnVal . slideshape = 0 ; 
 returnVal . coins = 0 ; 
 returnVal . v = 0.0 ; 
 returnVal . vspeed = 0 ; 
 returnVal . oldsolid = 0 ; 
 returnVal . glimmerTimer = 0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
oldsolid = tileGetSolid ( x , y )  ; 
tileSetSolid ( x , y , 1 )  ; 
shape = Rec ( x , y , 7 , 9 , 0 )  ; 
slideshape = Rec ( x , y - 1 , 16 , 8 , 0 )  ; 
 if ( _arr != null && _arr != "" ) coins = _arr . tointeger (  )  ; 
 
 game . maxCoins += coins ; 
 } ;  returnVal . run = function (  ) {  if ( gvPlayer )  { 
  if ( v == 0 )  { 
 vspeed = 0 ; 
 if ( coins <= 1 )  { 
  if ( gvPlayer . vspeed < 0 )  if ( hitTest ( shape , gvPlayer . shape )  && gvPlayer . y > y + 4 )  { 
 gvPlayer . vspeed = 0 ; 
deleteActor ( id )  ; 
newActor ( WoodChunks , x , y )  ; 
popSound ( sndBump , 0 )  ; 
tileSetSolid ( x , y , oldsolid )  ; 
 if ( coins > 0 ) newActor ( CoinEffect , x , y - 16 )  ; 
 
 fireWeapon ( BoxHit , x , y - 8 , 1 , id )  ; 
 } 
  
  
  if ( gvPlayer . rawin ( "anSlide" )  )  if ( fabs ( gvPlayer . hspeed )  >= 4.5 && gvPlayer . anim == gvPlayer . anSlide )  if ( hitTest ( slideshape , gvPlayer . shape )  )  { 
 gvPlayer . vspeed = 0 ; 
deleteActor ( id )  ; 
newActor ( WoodChunks , x , y )  ; 
popSound ( sndBump , 0 )  ; 
tileSetSolid ( x , y , oldsolid )  ; 
 if ( coins > 0 ) newActor ( CoinEffect , x , y - 16 )  ; 
 
 fireWeapon ( BoxHit , x , y - 8 , 1 , id )  ; 
 } 
  
  
  
  if ( gvPlayer . rawin ( "anStomp" )  )  if ( hitTest ( gvPlayer . shape , shape )  && gvPlayer . anim == gvPlayer . anStomp )  { 
 gvPlayer . vspeed =  - 2.0 ; 
deleteActor ( id )  ; 
newActor ( WoodChunks , x , y )  ; 
popSound ( sndBump , 0 )  ; 
tileSetSolid ( x , y , oldsolid )  ; 
 if ( coins > 0 ) newActor ( CoinEffect , x , y - 16 )  ; 
 
  } 
  
  
  } 
  
  else  { 
  if ( gvPlayer . vspeed < 0 )  if ( hitTest ( shape , gvPlayer . shape )  )  { 
 gvPlayer . vspeed = 0 ; 
vspeed =  - 2 ; 
coins --  ; 
newActor ( CoinEffect , x , y - 16 )  ; 
popSound ( sndBump , 0 )  ; 
fireWeapon ( BoxHit , x , y - 8 , 1 , id )  ; 
 } 
  
  
  if ( gvPlayer . rawin ( "anSlide" )  )  if (  ( fabs ( gvPlayer . hspeed )  >= 4.5 ||  ( game . weapon == 4 && gvPlayer . vspeed >= 2 )  )  && gvPlayer . anim == gvPlayer . anSlide )  if ( hitTest ( slideshape , gvPlayer . shape )  )  { 
 vspeed =  - 2 ; 
coins --  ; 
newActor ( CoinEffect , x , y - 16 )  ; 
popSound ( sndBump , 0 )  ; 
fireWeapon ( BoxHit , x , y - 8 , 1 , id )  ; 
 } 
  
  
  
  if ( gvPlayer . rawin ( "anStomp" )  )  if ( hitTest ( gvPlayer . shape , shape )  && gvPlayer . anim == gvPlayer . anStomp )  { 
 vspeed =  - 2 ; 
coins --  ; 
newActor ( CoinEffect , x , y - 16 )  ; 
popSound ( sndBump , 0 )  ; 
 } 
  
  
  } 
  
  } 
  
  } 
  
  if ( actor . rawin ( "WeaponEffect" )  )  {     var foreachOutput1 = squirrelForEach( actor [ "WeaponEffect" ]  );     while(true)     {        foreachOutput1.next();        if (foreachOutput1.isDone()) break; i = foreachOutput1.getValue();  { 
  if ( hitTest ( shape , i . shape )  && vspeed == 0 )  { 
  if ( i . blast && i . frame < 1 &&  ! i . box )  { 
  if ( coins <= 1 )  { 
 deleteActor ( id )  ; 
newActor ( WoodChunks , x , y )  ; 
stopSound ( sndBump )  ; 
popSound ( sndBump , 0 )  ; 
tileSetSolid ( x , y , oldsolid )  ; 
 if ( coins > 0 ) newActor ( CoinEffect , x , y - 16 )  ; 
 
 fireWeapon ( BoxHit , x , y - 8 , 1 , id )  ; 
 break ;  } 
  
  else  { 
 vspeed =  - 2 ; 
coins --  ; 
newActor ( CoinEffect , x , y - 16 )  ; 
stopSound ( sndBump )  ; 
popSound ( sndBump , 0 )  ; 
fireWeapon ( BoxHit , x , y - 8 , 1 , id )  ; 
 } 
  
  } 
  
  if ( i . owner != id )  { 
  if ( i . piercing == 0 ) deleteActor ( i . id )  ; 
 
  else i . piercing --  ; 
 
  } 
  
  } 
  
  } 
     }  }  
  if ( v ==  - 8 ) vspeed = 1 ; 
 
 v += vspeed ; 
drawSpriteZ ( 2 , sprWoodBox , 0 , x - 8 - camx , y - 8 - camy + v )  ; 
 if ( coins > 0 && game . difficulty == 0 )  { 
  if ( glimmerTimer > 0 ) glimmerTimer --  ; 
 
  else  { 
 glimmerTimer = randInt ( 30 )  ; 
newActor ( Glimmer , x - 8 + randInt ( 16 )  , y - 8 + randInt ( 16 )  )  ; 
 } 
  
  } 
  
  } ;  returnVal . destructor = function (  ) { fireWeapon ( BoxHit , x , y - 8 , 1 , id )  ; 
 } ;  returnVal . _typeof = function (  ) {  return "WoodBlock" ;
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . shape = 0 ; 
 squirrelClassFunction . slideshape = 0 ; 
 squirrelClassFunction . coins = 0 ; 
 squirrelClassFunction . v = 0.0 ; 
 squirrelClassFunction . vspeed = 0 ; 
 squirrelClassFunction . oldsolid = 0 ; 
 squirrelClassFunction . glimmerTimer = 0 ; 
 return squirrelClassFunction; })()) ; 
IceBlock =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . shape = 0 ; 
 returnVal . slideshape = 0 ; 
 returnVal . fireshape = 0 ; 
 returnVal . oldsolid = 0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
shape = Rec ( x , y , 7 , 9 , 0 )  ; 
slideshape = Rec ( x , y - 1 , 16 , 8 , 0 )  ; 
fireshape = Rec ( x , y , 12 , 12 , 0 )  ; 
oldsolid = tileGetSolid ( x , y )  ; 
tileSetSolid ( x , y , 40 )  ; 
 } ;  returnVal . run = function (  ) {  if ( gvPlayer )  { 
  if ( gvPlayer . vspeed < 0 )  if ( hitTest ( shape , gvPlayer . shape )  && gvPlayer . y > y + 4 )  { 
 gvPlayer . vspeed = 0 ; 
tileSetSolid ( x , y , oldsolid )  ; 
deleteActor ( id )  ; 
newActor ( IceChunks , x , y )  ; 
popSound ( sndBump , 0 )  ; 
fireWeapon ( BoxHit , x , y - 8 , 1 , id )  ; 
 } 
  
  
  if (  ( fabs ( gvPlayer . hspeed )  >= 3.5 ||  ( game . weapon == 4 && gvPlayer . vspeed >= 2 )  )  && gvPlayer . anim == gvPlayer . anSlide )  if ( hitTest ( slideshape , gvPlayer . shape )  )  { 
 gvPlayer . vspeed = 0 ; 
tileSetSolid ( x , y , oldsolid )  ; 
deleteActor ( id )  ; 
newActor ( IceChunks , x , y )  ; 
popSound ( sndBump , 0 )  ; 
fireWeapon ( BoxHit , x , y - 8 , 1 , id )  ; 
 } 
  
  
  if ( gvPlayer . rawin ( "anStomp" )  )  if ( hitTest ( gvPlayer . shape , shape )  && gvPlayer . anim == gvPlayer . anStomp )  { 
 gvPlayer . vspeed =  - 2.0 ; 
tileSetSolid ( x , y , oldsolid )  ; 
deleteActor ( id )  ; 
newActor ( IceChunks , x , y )  ; 
popSound ( sndBump , 0 )  ; 
fireWeapon ( BoxHit , x , y - 8 , 1 , id )  ; 
 } 
  
  
  } 
  
  if ( actor . rawin ( "WeaponEffect" )  )  {     var foreachOutput2 = squirrelForEach( actor [ "WeaponEffect" ]  );     while(true)     {        foreachOutput2.next();        if (foreachOutput2.isDone()) break; i = foreachOutput2.getValue();  if ( hitTest ( fireshape , i . shape )  &&  ( i . element == "fire" || i . blast )  &&  ! i . box )  { 
 tileSetSolid ( x , y , oldsolid )  ; 
deleteActor ( id )  ; 
i . piercing --  ; 
 if ( i . piercing == 0 ) deleteActor ( i . id )  ; 
 
  if ( i . element == "fire" )  { 
 newActor ( Poof , x , y )  ; 
stopSound ( sndFlame )  ; 
popSound ( sndFlame , 0 )  ; 
 } 
  
  if ( i . blast )  { 
 newActor ( IceChunks , x , y )  ; 
stopSound ( sndIceBreak )  ; 
popSound ( sndIceBreak , 0 )  ; 
 } 
  
  } 
  
     }  }  
 drawSpriteZ ( 2 , sprIceBlock , 0 , x - 8 - camx , y - 8 - camy )  ; 
 } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . shape = 0 ; 
 squirrelClassFunction . slideshape = 0 ; 
 squirrelClassFunction . fireshape = 0 ; 
 squirrelClassFunction . oldsolid = 0 ; 
 return squirrelClassFunction; })()) ; 
WoodChunks =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . h = 0.0 ; 
 returnVal . v = 0.0 ; 
 returnVal . vspeed =  - 3.0 ; 
 returnVal . timer = 30 ; 
 returnVal . a = 0 ; 
 
 with ( returnVal ) { 
  returnVal . run = function (  ) { vspeed += 0.2 ; 
v += vspeed ; 
h += 1 ; 
a += 4 ; 
drawSpriteExZ ( 2 , sprWoodChunks , 0 , x - camx - h - 2 , y - camy + v - 2 ,  - a , 0 , 1 , 1 , 1 )  ; 
drawSpriteExZ ( 2 , sprWoodChunks , 1 , x - camx + h + 2 , y - camy + v - 2 , a , 0 , 1 , 1 , 1 )  ; 
drawSpriteExZ ( 2 , sprWoodChunks , 2 , x - camx - h - 2 , y - camy + v + 2 + h ,  - a , 0 , 1 , 1 , 1 )  ; 
drawSpriteExZ ( 2 , sprWoodChunks , 3 , x - camx + h + 2 , y - camy + v + 2 + h , a , 0 , 1 , 1 , 1 )  ; 
timer --  ; 
 if ( timer == 0 ) deleteActor ( id )  ; 
 
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . h = 0.0 ; 
 squirrelClassFunction . v = 0.0 ; 
 squirrelClassFunction . vspeed =  - 3.0 ; 
 squirrelClassFunction . timer = 30 ; 
 squirrelClassFunction . a = 0 ; 
 return squirrelClassFunction; })()) ; 
ItemBlock =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . shape = 0 ; 
 returnVal . full = true ; 
 returnVal . v = 0.0 ; 
 returnVal . vspeed = 0.0 ; 
 returnVal . item = 0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
item = _arr ; 
shape = Rec ( x , y + 2 , 8 , 8 , 0 )  ; 
tileSetSolid ( x , y , 1 )  ; 
 } ;  returnVal . run = function (  ) {  if ( v > 0 )  { 
 vspeed = 0 ; 
v = 0 ; 
 } 
  
  if ( game . difficulty == 2 &&  ( item == 1 || item == 2 )  ) full = false ; 
 
  if ( v <=  - 8 )  { 
 vspeed = 1 ; 
 switch ( item )  {  case 0 : newActor ( CoinEffect , x , y - 16 )  ; 
 break ;  case 1 :  if ( game . difficulty == 3 )  { 
  var c = actor [ newActor ( CannonBob , x , y - 4 )  ]  ;
 c . hspeed =  (  ( gvPlayer . x - x )  / 96 )  ; 
 } 
  
  else newActor ( MuffinBlue , x , y - 16 , true )  ; 
 
  break ;  case 2 :  if ( game . difficulty == 3 )  { 
  var c = actor [ newActor ( CannonBob , x , y - 4 )  ]  ;
 c . hspeed =  (  ( gvPlayer . x - x )  / 96 )  ; 
 } 
  
  else newActor ( MuffinRed , x , y - 16 )  ; 
 
  break ;  case 3 : newActor ( MuffinEvil , x , y - 16 )  ; 
 break ;  case 4 : newActor ( FlowerFire , x , y - 16 )  ; 
 break ;  case 5 :  if ( game . difficulty >= 2 ) newActor ( MuffinEvil , x , y - 16 )  ; 
 
  else newActor ( Starnyan , x , y - 16 )  ; 
 
  break ;  case 6 : newActor ( FlowerIce , x , y - 16 )  ; 
 break ;  case 7 : newActor ( AirFeather , x , y - 16 )  ; 
 break ;  case 8 : newActor ( OneUp , x , y - 16 )  ; 
 break ;  case 9 : newActor ( MuffinBomb , x , y - 16 )  ; 
 break ;  case 10 : newActor ( EarthShell , x , y - 16 )  ; 
 break ;  }  } 
  
  if ( gvPlayer )  if ( hitTest ( shape , gvPlayer . shape )  )  if ( gvPlayer . vspeed < 0 && v == 0 )  if ( full )  { 
 gvPlayer . vspeed = 0 ; 
full = false ; 
vspeed =  - 2 ; 
popSound ( sndBump , 0 )  ; 
fireWeapon ( BoxHit , x , y - 8 , 1 , id )  ; 
 } 
  
  
  
  
 v += vspeed ; 
 if ( full || vspeed < 0 ) drawSpriteZ ( 2 , sprBoxItem , getFrames (  )  / 8 , x - 8 - camx , y - 8 - camy + v )  ; 
 
  else drawSpriteZ ( 2 , sprBoxEmpty , 0 , x - 8 - camx , y - 8 - camy + v )  ; 
 
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . shape = 0 ; 
 squirrelClassFunction . full = true ; 
 squirrelClassFunction . v = 0.0 ; 
 squirrelClassFunction . vspeed = 0.0 ; 
 squirrelClassFunction . item = 0 ; 
 return squirrelClassFunction; })()) ; 
TriggerBlock =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . shape = 0 ; 
 returnVal . full = true ; 
 returnVal . v = 0.0 ; 
 returnVal . vspeed = 0.0 ; 
 returnVal . item = 0 ; 
 returnVal . code = "" ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = "" ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
code = _arr ; 
shape = Rec ( x , y + 2 , 8 , 8 , 0 )  ; 
tileSetSolid ( x , y , 1 )  ; 
 } ;  returnVal . run = function (  ) {  if ( v > 0 )  { 
 vspeed = 0 ; 
v = 0 ; 
 } 
  
  if ( v <=  - 8 )  { 
 vspeed = 0.5 ; 
dostr ( code )  ; 
 } 
  
  if ( gvPlayer )  if ( hitTest ( shape , gvPlayer . shape )  )  if ( gvPlayer . vspeed < 0 && v == 0 )  if ( full )  { 
 gvPlayer . vspeed = 0 ; 
full = false ; 
vspeed =  - 1 ; 
popSound ( sndBump , 0 )  ; 
 } 
  
  
  
  
 v += vspeed ; 
 if ( full || vspeed < 0 ) drawSpriteZ ( 2 , sprBoxRed , getFrames (  )  / 8 , x - 8 - camx , y - 8 - camy + v )  ; 
 
  else drawSpriteZ ( 2 , sprBoxEmpty , 0 , x - 8 - camx , y - 8 - camy + v )  ; 
 
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . shape = 0 ; 
 squirrelClassFunction . full = true ; 
 squirrelClassFunction . v = 0.0 ; 
 squirrelClassFunction . vspeed = 0.0 ; 
 squirrelClassFunction . item = 0 ; 
 squirrelClassFunction . code = "" ; 
 return squirrelClassFunction; })()) ; 
InfoBlock =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . shape = 0 ; 
 returnVal . full = true ; 
 returnVal . v = 0.0 ; 
 returnVal . vspeed = 0.0 ; 
 returnVal . item = 0 ; 
 returnVal . text = "" ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = "" ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
text = _arr ; 
shape = Rec ( x , y + 2 , 8 , 8 , 0 )  ; 
tileSetSolid ( x , y , 1 )  ; 
 } ;  returnVal . run = function (  ) {  if ( v > 0 )  { 
 vspeed = 0 ; 
v = 0 ; 
 } 
  
  if ( v <=  - 8 )  { 
 vspeed = 0.5 ; 
 } 
  
  if ( gvPlayer )  { 
  if ( hitTest ( shape , gvPlayer . shape )  )  if ( gvPlayer . vspeed < 0 && v == 0 )  if ( full )  { 
 gvPlayer . vspeed = 0 ; 
vspeed =  - 1 ; 
popSound ( sndBump , 0 )  ; 
gvInfoBox = text ; 
 } 
  
  
  
  if ( gvInfoBox == text )  if (  ! inDistance2 ( x , y , gvPlayer . x , gvPlayer . y , 64 )  ) gvInfoBox = "" ; 
 
  
  } 
  
 v += vspeed ; 
drawSpriteZ ( 2 , sprBoxInfo , getFrames (  )  / 8 , x - 8 - camx , y - 8 - camy + v )  ; 
 } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . shape = 0 ; 
 squirrelClassFunction . full = true ; 
 squirrelClassFunction . v = 0.0 ; 
 squirrelClassFunction . vspeed = 0.0 ; 
 squirrelClassFunction . item = 0 ; 
 squirrelClassFunction . text = "" ; 
 return squirrelClassFunction; })()) ; 
KelvinScarf =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . shape = 0 ; 
 returnVal . text = "" ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = "" ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
text = _arr ; 
shape = Rec ( x , y , 8 , 8 , 0 )  ; 
 } ;  returnVal . run = function (  ) {  if (  ! devcom || gvTimeAttack )  return ; 
  
  if ( gvPlayer )  { 
  if ( devcom )  if ( hitTest ( shape , gvPlayer . shape )  )  { 
 gvInfoBox = text ; 
 } 
  
  
  if ( gvInfoBox == text )  { 
  if (  ! inDistance2 ( x , y , gvPlayer . x , gvPlayer . y , 64 )  ) gvInfoBox = "" ; 
 
  else  if ( gvPlayer . invincible <= 1 ) gvPlayer . invincible = 10 ; 
 
  
  } 
  
  } 
  
 drawSpriteZ ( 2 , sprKelvinScarf , getFrames (  )  / 16 , x - 8 - camx , y - 8 - camy )  ; 
 } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . shape = 0 ; 
 squirrelClassFunction . text = "" ; 
 return squirrelClassFunction; })()) ; 
BounceBlock =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . shape = 0 ; 
 returnVal . full = true ; 
 returnVal . v = 0.0 ; 
 returnVal . vspeed = 0.0 ; 
 returnVal . item = 0 ; 
 returnVal . text = "" ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
shape = Rec ( x , y , 8 , 9 , 0 )  ; 
tileSetSolid ( x , y , 1 )  ; 
 } ;  returnVal . run = function (  ) {  if ( v == 0 )  { 
 vspeed = 0 ; 
v = 0 ; 
 } 
  
  if ( v <=  - 8 )  { 
 vspeed = 0.5 ; 
 } 
  
  if ( v >= 8 )  { 
 vspeed =  - 0.5 ; 
 } 
  
  if ( gvPlayer )  { 
 shape . setPos ( x , y + 2 )  ; 
 if ( hitTest ( shape , gvPlayer . shape )  )  if ( gvPlayer . vspeed < 0 && v == 0 )  if ( full )  { 
 gvPlayer . vspeed = 1 ; 
vspeed =  - 1 ; 
popSound ( sndBump , 0 )  ; 
fireWeapon ( BoxHit , x , y - 8 , 1 , id )  ; 
 } 
  
  
  
 shape . setPos ( x , y - 1 )  ; 
 if ( hitTest ( shape , gvPlayer . shape )  )  if ( gvPlayer . vspeed >= 0 && v == 0 )  if ( full )  { 
 gvPlayer . vspeed =  - 4 ; 
 if ( getcon ( "jump" , "hold" )  ) gvPlayer . vspeed =  - 7.5 ; 
 
 vspeed = 1 ; 
popSound ( sndBump , 0 )  ; 
 } 
  
  
  
  if ( gvInfoBox == text )  if ( inDistance2 ( x , y , gvPlayer . x , gvPlayer . y , 64 )  ) gvInfoBox = "" ; 
 
  
  } 
  
 v += vspeed ; 
drawSpriteZ ( 2 , sprBoxBounce , getFrames (  )  / 8 , x - 8 - camx , y - 8 - camy + v )  ; 
 } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . shape = 0 ; 
 squirrelClassFunction . full = true ; 
 squirrelClassFunction . v = 0.0 ; 
 squirrelClassFunction . vspeed = 0.0 ; 
 squirrelClassFunction . item = 0 ; 
 squirrelClassFunction . text = "" ; 
 return squirrelClassFunction; })()) ; 
Checkpoint =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . shape = null ; 
 returnVal . found = false ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
shape = Rec ( x , y + 16 , 10 , 16 , 0 )  ; 
 } ;  returnVal . run = function (  ) {  if ( gvPlayer && found == false )  if ( hitTest ( shape , gvPlayer . shape )  )  { 
  {     var foreachOutput3 = squirrelForEach( actor [ "Checkpoint" ]  );     while(true)     {        foreachOutput3.next();        if (foreachOutput3.isDone()) break; i = foreachOutput3.getValue();  { 
 i . found = false ; 
 } 
     }  } found = true ; 
game . check = true ; 
game . chx = x ; 
game . chy = y ; 
popSound ( sndBell , 0 )  ; 
 if ( game . difficulty < 3 )  { 
  if ( game . health < game . maxHealth ) game . health += 4 ; 
 
  else  if ( game . subitem == 0 ) game . subitem = 5 ; 
 
  
  } 
  
  } 
  
  
  if ( found ) drawSprite ( sprCheckBell , getFrames (  )  / 8 , x - camx , y - camy )  ; 
 
  else drawSprite ( sprCheckBell , 0 , x - camx , y - camy )  ; 
 
  } ;  returnVal . _typeof = function (  ) {  return "Checkpoint" ;
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . shape = null ; 
 squirrelClassFunction . found = false ; 
 return squirrelClassFunction; })()) ; 
TNT =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . shape = null ; 
 returnVal . gothit = false ; 
 returnVal . hittime = 0.0 ; 
 returnVal . frame = 0.0 ; 
 returnVal . fireshape = null ; 
 returnVal . oldsolid = 0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
shape = Rec ( x , y , 10 , 10 , 0 )  ; 
fireshape = Rec ( x , y , 14 , 12 , 0 )  ; 
oldsolid = tileGetSolid ( x , y )  ; 
tileSetSolid ( x , y , 1 )  ; 
 } ;  returnVal . run = function (  ) {  if ( gothit )  { 
 hittime += 2 ; 
frame += 0.002 * hittime ; 
 if ( hittime >= 150 )  { 
 tileSetSolid ( x , y , oldsolid )  ; 
deleteActor ( id )  ; 
fireWeapon ( ExplodeF , x , y , 0 , id )  ; 
 } 
  
  } 
  
  else  { 
  if ( gvPlayer )  if ( hitTest ( shape , gvPlayer . shape )  )  { 
 gothit = true ; 
stopSound ( sndFizz )  ; 
popSound ( sndFizz , 0 )  ; 
 } 
  
  
  } 
  
  if ( actor . rawin ( "WeaponEffect" )  )  {     var foreachOutput4 = squirrelForEach( actor [ "WeaponEffect" ]  );     while(true)     {        foreachOutput4.next();        if (foreachOutput4.isDone()) break; i = foreachOutput4.getValue();  if ( hitTest ( fireshape , i . shape )  &&  ( i . blast || i . element == "fire" )  )  { 
  if ( i . rawin ( "frame" )  && i . blast )  { 
  if ( i . frame >= 1 )  { 
 tileSetSolid ( x , y , oldsolid )  ; 
deleteActor ( id )  ; 
fireWeapon ( ExplodeF , x , y , 0 , id )  ; 
i . piercing --  ; 
 } 
  
  } 
  
  else  { 
 tileSetSolid ( x , y , oldsolid )  ; 
deleteActor ( id )  ; 
fireWeapon ( ExplodeF , x , y , 0 , id )  ; 
i . piercing --  ; 
 } 
  
  } 
  
     }  }  
  if ( gothit )  { 
  if ( hittime > 120 ) drawSpriteExZ ( 2 , sprTNT , frame , x - 8 - camx +  (  ( randInt ( 8 )  - 4 )  / 4 )  -  (  ( 2.0 / 150.0 )  * hittime )  , y - 8 - camy +  (  ( randInt ( 8 )  - 4 )  / 4 )  -  (  ( 2.0 / 150.0 )  * hittime )  , 0 , 0 , 1.0 +  (  ( 0.25 / 150.0 )  * hittime )  , 1.0 +  (  ( 0.25 / 150.0 )  * hittime )  , 1 )  ; 
 
  else drawSpriteZ ( 2 , sprTNT , frame , x - 8 - camx +  (  ( randInt ( 8 )  - 4 )  / 4 )  , y - 8 - camy +  (  ( randInt ( 8 )  - 4 )  / 4 )  )  ; 
 
  } 
  
  else drawSpriteZ ( 2 , sprTNT , frame , x - 8 - camx , y - 8 - camy )  ; 
 
  } ;  returnVal . _typeof = function (  ) {  return "TNT" ;
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . shape = null ; 
 squirrelClassFunction . gothit = false ; 
 squirrelClassFunction . hittime = 0.0 ; 
 squirrelClassFunction . frame = 0.0 ; 
 squirrelClassFunction . fireshape = null ; 
 squirrelClassFunction . oldsolid = 0 ; 
 return squirrelClassFunction; })()) ; 
C4 =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . shape = null ; 
 returnVal . gothit = false ; 
 returnVal . hittime = 0.0 ; 
 returnVal . frame = 0.0 ; 
 returnVal . fireshape = null ; 
 returnVal . oldsolid = 0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
shape = Rec ( x , y , 10 , 10 , 0 )  ; 
oldsolid = tileGetSolid ( x , y )  ; 
tileSetSolid ( x , y , 1 )  ; 
fireshape = Rec ( x , y , 16 , 16 , 0 )  ; 
 } ;  returnVal . run = function (  ) {  if ( actor . rawin ( "WeaponEffect" )  )  {     var foreachOutput5 = squirrelForEach( actor [ "WeaponEffect" ]  );     while(true)     {        foreachOutput5.next();        if (foreachOutput5.isDone()) break; i = foreachOutput5.getValue();  if ( hitTest ( fireshape , i . shape )  &&  ( i . blast && i . element == "fire" )  )  { 
  if ( i . rawin ( "frame" )  )  { 
  if ( i . frame >= 1 )  { 
 tileSetSolid ( x , y , oldsolid )  ; 
deleteActor ( id )  ; 
newActor ( ExplodeF , x , y )  ; 
i . piercing --  ; 
 } 
  
  } 
  
  else  { 
 tileSetSolid ( x , y , oldsolid )  ; 
deleteActor ( id )  ; 
newActor ( ExplodeF , x , y )  ; 
i . piercing --  ; 
 } 
  
  } 
  
     }  }  
 drawSpriteZ ( 2 , sprC4 , frame , x - 8 - camx , y - 8 - camy )  ; 
 } ;  returnVal . _typeof = function (  ) {  return "TNT" ;
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . shape = null ; 
 squirrelClassFunction . gothit = false ; 
 squirrelClassFunction . hittime = 0.0 ; 
 squirrelClassFunction . frame = 0.0 ; 
 squirrelClassFunction . fireshape = null ; 
 squirrelClassFunction . oldsolid = 0 ; 
 return squirrelClassFunction; })()) ; 
ColorBlock =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . color = null ; 
 returnVal . filled = 0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
 if ( _arr == null ) color = 0 ; 
 
  else color = _arr ; 
 
  if ( color != null )  if ( game . colorswitch [ color ]  ) filltile (  )  ; 
 
  
  } ;  returnVal . filltile = function (  ) {  var wl = null ;
  for (  var i = 0 ;
 i < gvMap . data . layers . len (  )  ; i ++  )  { 
  if ( gvMap . data . layers [ i ]  . type == "tilelayer" && gvMap . data . layers [ i ]  . name == "solid" )  { 
 wl = gvMap . data . layers [ i ]  ; 
 break ;  } 
  
  } 
  var cx = floor ( x / 16 )  ;
  var cy = floor ( y / 16 )  ;
  var tile = cx +  ( cy * wl . width )  ;
  if ( tile >= 0 && tile < wl . data . len (  )  ) wl . data [ tile ] = gvMap . solidfid ; 
 
 filled = 1 ; 
 } ;  returnVal . run = function (  ) { drawSpriteZ ( 2 , sprColorBlock ,  ( color * 2 )  + filled , x - camx , y - camy )  ; 
 if ( color != null )  if ( game . colorswitch [ color ]  ) filltile (  )  ; 
 
  
  } ;  returnVal . _typeof = function (  ) {  return "ColorBlock" ;
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . color = null ; 
 squirrelClassFunction . filled = 0 ; 
 return squirrelClassFunction; })()) ; 
ColorSwitch =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . color = 0 ; 
 returnVal . shape = null ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
 if ( _arr == null ) color = 0 ; 
 
  else color = _arr . tointeger (  )  ; 
 
 shape = Rec ( x , y , 16 , 16 , 0 )  ; 
 } ;  returnVal . run = function (  ) {  if ( game . colorswitch [ color ]  ) drawSprite ( sprColorSwitch ,  ( color * 2 )  + 1 , x - camx , y - camy )  ; 
 
  else  { 
 drawSprite ( sprColorSwitch , color * 2 , x - camx , y - camy )  ; 
 if ( gvPlayer )  if ( hitTest ( shape , gvPlayer . shape )  && gvPlayer . y < y - 16 && gvPlayer . vspeed > 0 )  { 
 gvPlayer . vspeed =  - 1.5 ; 
game . colorswitch [ this . color ] = true ; 
 if ( isWebBrowserVersion ) dostr ( "/*js*/saveGame()" )  ; 
 
  else dostr ( "saveGame()" )  ; 
 
  if ( actor . rawin ( "ColorBlock" )  )  {     var foreachOutput6 = squirrelForEach( actor [ "ColorBlock" ]  );     while(true)     {        foreachOutput6.next();        if (foreachOutput6.isDone()) break; i = foreachOutput6.getValue();  { 
 i . filltile (  )  ; 
 } 
     }  }  
  } 
  
  
  } 
  
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . color = 0 ; 
 squirrelClassFunction . shape = null ; 
 return squirrelClassFunction; })()) ; 
EvilBlock =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . shape = 0 ; 
 returnVal . slideshape = 0 ; 
 returnVal . oldsolid = 0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
shape = Rec ( x , y + 2 , 8 , 8 , 0 )  ; 
oldsolid = tileGetSolid ( x , y )  ; 
tileSetSolid ( x , y , 1 )  ; 
slideshape = Rec ( x , y - 1 , 12 , 8 , 0 )  ; 
 } ;  returnVal . run = function (  ) {  if ( gvPlayer )  { 
  if ( gvPlayer . vspeed < 0 )  if ( hitTest ( shape , gvPlayer . shape )  )  { 
 gvPlayer . vspeed = 0 ; 
tileSetSolid ( x , y , oldsolid )  ; 
deleteActor ( id )  ; 
newActor ( Poof , x , y )  ; 
popSound ( sndBump , 0 )  ; 
newActor ( Darknyan , x , y - 16 )  ; 
 } 
  
  
  } 
  
 drawSpriteZ ( 2 , sprBoxItem , getFrames (  )  / 16 , x - 8 - camx , y - 8 - camy )  ; 
 } ;  returnVal . _typeof = function (  ) {  return "EvilBlock" ;
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . shape = 0 ; 
 squirrelClassFunction . slideshape = 0 ; 
 squirrelClassFunction . oldsolid = 0 ; 
 return squirrelClassFunction; })()) ; 
EvilBlockB =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . shape = 0 ; 
 returnVal . slideshape = 0 ; 
 returnVal . oldsolid = 0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
shape = Rec ( x , y + 2 , 8 , 8 , 0 )  ; 
oldsolid = tileGetSolid ( x , y )  ; 
tileSetSolid ( x , y , 1 )  ; 
slideshape = Rec ( x , y - 1 , 12 , 8 , 0 )  ; 
 } ;  returnVal . run = function (  ) {  if ( gvPlayer )  { 
  if ( gvPlayer . vspeed < 0 )  if ( hitTest ( shape , gvPlayer . shape )  )  { 
 gvPlayer . vspeed = 0 ; 
tileSetSolid ( x , y , oldsolid )  ; 
deleteActor ( id )  ; 
newActor ( Poof , x , y )  ; 
popSound ( sndBump , 0 )  ; 
newActor ( MuffinBomb , x , y - 16 )  ; 
 } 
  
  
  } 
  
 drawSpriteZ ( 2 , sprBoxItem , getFrames (  )  / 16 , x - 8 - camx , y - 8 - camy )  ; 
 } ;  returnVal . _typeof = function (  ) {  return "EvilBlockB" ;
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . shape = 0 ; 
 squirrelClassFunction . slideshape = 0 ; 
 squirrelClassFunction . oldsolid = 0 ; 
 return squirrelClassFunction; })()) ; 
BreakBlock =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . shape = 0 ; 
 returnVal . slideshape = 0 ; 
 returnVal . tile = 0 ; 
 returnVal . solidtile = 0 ; 
 returnVal . layer = 0 ; 
 returnVal . solidlayer = 0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
shape = Rec ( x , y + 2 , 8 , 8 , 0 )  ; 
tileSetSolid ( x , y , 1 )  ; 
slideshape = Rec ( x , y - 1 , 12 , 8 , 0 )  ; 
 for (  var i = 0 ;
 i < gvMap . data . layers . len (  )  ; i ++  )  { 
  if ( gvMap . data . layers [ i ]  . type == "tilelayer" && gvMap . data . layers [ i ]  . name == "fg" )  { 
 layer = gvMap . data . layers [ i ]  ; 
 break ;  } 
  
  } 
  var cx = floor ( x / 16 )  ;
  var cy = floor ( y / 16 )  ;
 tile = cx +  ( cy * layer . width )  ; 
 for (  var i = 0 ;
 i < gvMap . data . layers . len (  )  ; i ++  )  { 
  if ( gvMap . data . layers [ i ]  . type == "tilelayer" && gvMap . data . layers [ i ]  . name == "solid" )  { 
 solidlayer = gvMap . data . layers [ i ]  ; 
 break ;  } 
  
  } 
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . shape = 0 ; 
 squirrelClassFunction . slideshape = 0 ; 
 squirrelClassFunction . tile = 0 ; 
 squirrelClassFunction . solidtile = 0 ; 
 squirrelClassFunction . layer = 0 ; 
 squirrelClassFunction . solidlayer = 0 ; 
 return squirrelClassFunction; })()) ; 
LockBlock =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . color = 0 ; 
 returnVal . oldsolid = 0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
 if ( _arr == null ) color = 0 ; 
 
  else color = _arr . tointeger (  )  ; 
 
 oldsolid = tileGetSolid ( x , y )  ; 
tileSetSolid ( x , y , 1 )  ; 
 } ;  returnVal . run = function (  ) { drawSpriteZ ( 2 , sprLockBlock , color , x - camx , y - camy )  ; 
 if ( gvPlayer )  if ( inDistance2 ( x , y , gvPlayer . x , gvPlayer . y , 32 )  )  { 
  switch ( color )  {  case 0 :  if ( gvKeyCopper )  { 
 tileSetSolid ( x , y , oldsolid )  ; 
deleteActor ( id )  ; 
newActor ( Poof , x , y )  ; 
stopSound ( sndBump )  ; 
popSound ( sndBump , 0 )  ; 
 } 
  
  break ;  case 1 :  if ( gvKeySilver )  { 
 tileSetSolid ( x , y , oldsolid )  ; 
deleteActor ( id )  ; 
newActor ( Poof , x , y )  ; 
stopSound ( sndBump )  ; 
popSound ( sndBump , 0 )  ; 
 } 
  
  break ;  case 2 :  if ( gvKeyGold )  { 
 tileSetSolid ( x , y , oldsolid )  ; 
deleteActor ( id )  ; 
newActor ( Poof , x , y )  ; 
stopSound ( sndBump )  ; 
popSound ( sndBump , 0 )  ; 
 } 
  
  break ;  case 3 :  if ( gvKeyMythril )  { 
 tileSetSolid ( x , y , oldsolid )  ; 
deleteActor ( id )  ; 
newActor ( Poof , x , y )  ; 
stopSound ( sndBump )  ; 
popSound ( sndBump , 0 )  ; 
 } 
  
  break ;  }  } 
  
  
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . color = 0 ; 
 squirrelClassFunction . oldsolid = 0 ; 
 return squirrelClassFunction; })()) ; 
BossDoor =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . dy = 0 ; 
 returnVal . moving = false ; 
 returnVal . delay = 0 ; 
 returnVal . opening = false ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
 if ( _arr != "" ) delay = _arr . tointeger (  )  ; 
 
  } ;  returnVal . run = function (  ) {  if ( gvWarning <= 10 && dy == 0 )  { 
 moving = true ; 
tileSetSolid ( x , y , 1 )  ; 
tileSetSolid ( x , y - 16 , 1 )  ; 
tileSetSolid ( x , y - 32 , 1 )  ; 
tileSetSolid ( x , y - 48 , 1 )  ; 
 } 
  
  if ( moving && dy < 32 &&  ! opening )  { 
  if ( delay > 0 ) delay --  ; 
 
  else dy ++  ; 
 
  } 
  
  else  if ( opening && dy > 0 )  { 
 dy --  ; 
tileSetSolid ( x , y , 0 )  ; 
tileSetSolid ( x , y - 16 , 0 )  ; 
tileSetSolid ( x , y - 32 , 0 )  ; 
tileSetSolid ( x , y - 48 , 0 )  ; 
 } 
  
  
 drawSpriteZ ( 4 , sprBossDoor , 0 , x - camx , y - camy - dy + 16 )  ; 
drawSpriteZ ( 4 , sprBossDoor , 0 , x - camx , y - camy - 80 + dy )  ; 
 } ;  returnVal . _typeof = function (  ) {  return "BossDoor" ;
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . dy = 0 ; 
 squirrelClassFunction . moving = false ; 
 squirrelClassFunction . delay = 0 ; 
 squirrelClassFunction . opening = false ; 
 return squirrelClassFunction; })()) ; 
Fishy =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . shape = 0 ; 
 returnVal . slideshape = 0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
tileSetSolid ( x , y , 1 )  ; 
shape = Rec ( x , y + 2 , 8 , 8 , 0 )  ; 
slideshape = Rec ( x , y - 1 , 12 , 8 , 0 )  ; 
 } ;  returnVal . run = function (  ) {  if ( gvPlayer )  { 
  if ( inDistance2 ( x , y , gvPlayer . x , gvPlayer . y , 64 )  )  if ( game . maxRedCoins == game . redCoins )  { 
 deleteActor ( id )  ; 
newActor ( Poof , x , y )  ; 
tileSetSolid ( x , y , 0 )  ; 
popSound ( sndBump , 0 )  ; 
 } 
  
  
  } 
  
 drawSprite ( sprFishBlock , 0 , x - 8 - camx , y - 8 - camy )  ; 
 } ;  returnVal . _typeof = function (  ) {  return "Fishy" ;
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . shape = 0 ; 
 squirrelClassFunction . slideshape = 0 ; 
 return squirrelClassFunction; })()) ; 
FireBlock =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . shape = 0 ; 
 returnVal . slideshape = 0 ; 
 returnVal . fireshape = 0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
shape = Rec ( x , y + 2 , 8 , 8 , 0 )  ; 
slideshape = Rec ( x , y - 1 , 12 , 8 , 0 )  ; 
fireshape = Rec ( x , y , 16 , 16 , 0 )  ; 
tileSetSolid ( x , y , 1 )  ; 
 } ;  returnVal . run = function (  ) {  if ( actor . rawin ( "WeaponEffect" )  )  {     var foreachOutput7 = squirrelForEach( actor [ "WeaponEffect" ]  );     while(true)     {        foreachOutput7.next();        if (foreachOutput7.isDone()) break; i = foreachOutput7.getValue();  if ( hitTest ( fireshape , i . shape )  && i . element == "fire" )  { 
 tileSetSolid ( x , y , 0 )  ; 
deleteActor ( id )  ; 
deleteActor ( i . id )  ; 
newActor ( Flame , x , y )  ; 
popSound ( sndFlame , 0 )  ; 
 } 
  
     }  }  
  if ( actor . rawin ( "Flame" )  )  {     var foreachOutput8 = squirrelForEach( actor [ "Flame" ]  );     while(true)     {        foreachOutput8.next();        if (foreachOutput8.isDone()) break; i = foreachOutput8.getValue();  if ( inDistance2 ( x , y , i . x , i . y , 16 )  && i . frame >= 6 )  { 
 tileSetSolid ( x , y , 0 )  ; 
deleteActor ( id )  ; 
newActor ( Flame , x , y )  ; 
popSound ( sndFlame , 0 )  ; 
 } 
  
     }  }  
 drawSprite ( sprFireBlock , 0 , x - 8 - camx , y - 8 - camy )  ; 
 } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . shape = 0 ; 
 squirrelClassFunction . slideshape = 0 ; 
 squirrelClassFunction . fireshape = 0 ; 
 return squirrelClassFunction; })()) ; 
CharSwapper =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . shape = 0 ; 
 returnVal . full = true ; 
 returnVal . character = "Tux" ; 
 returnVal . v = 0.0 ; 
 returnVal . vspeed = 0.0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
 if ( _arr != null ) character = _arr ; 
 
 shape = Rec ( x , y + 2 , 8 , 8 , 0 )  ; 
tileSetSolid ( x , y , 1 )  ; 
 } ;  returnVal . run = function (  ) {  if ( v > 0 )  { 
 vspeed = 0 ; 
v = 0 ; 
 } 
  
  if ( gvPlayer &&  ! hitTest ( shape , gvPlayer . shape )  ) tileSetSolid ( x , y , 1 )  ; 
 
  if ( v <=  - 8 )  { 
 vspeed = 1 ; 
 var nx = gvPlayer . x ;
  var ny = gvPlayer . y ;
  var nf = gvPlayer . flip ;
  var nh = gvPlayer . hspeed ;
  var nv = gvPlayer . vspeed ;
 deleteActor ( gvPlayer . id )  ; 
gvPlayer = actor [ newActor ( getroottable (  )  [ character ]  , nx , ny )  ]  ; 
gvPlayer . tftime = 0 ; 
gvPlayer . flip = nf ; 
gvPlayer . hspeed = nh ; 
gvPlayer . vspeed = nv ; 
tileSetSolid ( x , y , 0 )  ; 
popSound ( sndHeal , 0 )  ; 
 } 
  
 full =  ( game . characters . rawin ( character )  && gvPlayer &&  squirrelTypeOf ( gvPlayer )  != character )  ; 
 if ( gvPlayer )  if ( hitTest ( shape , gvPlayer . shape )  )  if ( gvPlayer . vspeed < 0 && v == 0 )  if ( full )  { 
 gvPlayer . vspeed = 0 ; 
vspeed =  - 2 ; 
popSound ( sndBump , 0 )  ; 
 } 
  
  
  
  
 v += vspeed ; 
 if ( full || vspeed < 0 )  { 
 drawSpriteZ ( 2 , sprBoxShop , getFrames (  )  / 8 , x - 8 - camx , y - 8 - camy + v )  ; 
drawSpriteZ ( 2 , getroottable (  )  [ game . characters [ character ]  [ "doll" ]  ]  , 0 , x - camx , y - camy + v )  ; 
 } 
  
  else drawSpriteZ ( 2 , sprBoxEmpty , 0 , x - 8 - camx , y - 8 - camy + v )  ; 
 
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . shape = 0 ; 
 squirrelClassFunction . full = true ; 
 squirrelClassFunction . character = "Tux" ; 
 squirrelClassFunction . v = 0.0 ; 
 squirrelClassFunction . vspeed = 0.0 ; 
 return squirrelClassFunction; })()) ; 
Crumbler =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . shape = 0 ; 
 returnVal . timer = 0 ; 
 returnVal . oldsolid = 0 ; 
 returnVal . broken = false ; 
 returnVal . alpha = 1.0 ; 
 returnVal . wasStepped = false ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
oldsolid = tileGetSolid ( x , y )  ; 
tileSetSolid ( x , y , 1 )  ; 
shape = Rec ( x , y - 1 , 8 , 8 , 0 )  ; 
 } ;  returnVal . run = function (  ) {  if (  ! broken )  { 
  if ( alpha < 1.0 ) alpha += 0.1 ; 
 
  if ( gvPlayer && hitTest ( shape , gvPlayer . shape )  &&  ! wasStepped ) wasStepped = true ; 
 
  if ( wasStepped ) timer ++  ; 
 
  if ( timer == 30 )  { 
 broken = true ; 
tileSetSolid ( x , y , oldsolid )  ; 
timer = 0 ; 
alpha = 0.0 ; 
 if ( sprCrumbleRock == sprCrumbleIce ) newActor ( IceChunks , x , y )  ; 
 
  } 
  
 drawSpriteExZ ( 7 , sprCrumbleRock , timer / 8 , x - camx , y - camy , 0 , 0 , 1 , 1 , alpha )  ; 
 } 
  
  else  { 
  if ( timer < 300 ) timer ++  ; 
 
  if ( gvPlayer &&  ! hitTest ( shape , gvPlayer . shape )  && timer == 300 )  { 
 broken = false ; 
tileSetSolid ( x , y , 1 )  ; 
timer = 0 ; 
wasStepped = false ; 
 } 
  
  } 
  
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . shape = 0 ; 
 squirrelClassFunction . timer = 0 ; 
 squirrelClassFunction . oldsolid = 0 ; 
 squirrelClassFunction . broken = false ; 
 squirrelClassFunction . alpha = 1.0 ; 
 squirrelClassFunction . wasStepped = false ; 
 return squirrelClassFunction; })()) ; 



}; 
