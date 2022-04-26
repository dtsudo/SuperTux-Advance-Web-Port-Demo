if (!window.superTuxAdvanceWebVersion) window.superTuxAdvanceWebVersion = {}; 
if (!window.superTuxAdvanceWebVersion.squirrelFiles) window.superTuxAdvanceWebVersion.squirrelFiles = {}; 

window.superTuxAdvanceWebVersion.squirrelFiles['src/save.nut'] = function () { 


newGame =  function ( f ) {  var newdif = game . difficulty ;
 game = createNewGameObject (  )  ; 
game . file = f ; 
gvDoIGT = false ; 
game . difficulty = newdif ; 
 if ( game . difficulty > 1 ) game . maxHealth =  ( 4 - game . difficulty )  * 4 ; 
 
 startPlay ( "res/map/0-t0.json" )  ; 
 }  ; 
saveGame =  function (  ) { fileWrite ( "save/" + game . file . tostring (  )  + ".json" , jsonWrite ( game )  )  ; 
 }  ; 
loadGame =  function ( f ) {  if ( fileExists ( "save/" + f . tostring (  )  + ".json" )  )  { 
 game = mergeTable ( createNewGameObject (  )  , jsonRead ( fileRead ( "save/" + f . tostring (  )  + ".json" )  )  )  ; 
startOverworld ( game . world )  ; 
 } 
  
  }  ; 
selectLoadGame =  function (  ) {  var hasSaveFiles = false ;
 meLoadGame =  [  ]  ; 
 var dir = lsdir ( "save" )  ;
 dir . sort (  )  ; 
 for (  var i = 0 ;
 i < dir . len (  )  ; i ++  )  { 
  var f = "" ;
  if ( dir [ i ]  != "." && i != ".." && dir [ i ]  != "delete.me" && dir [ i ]  . find ( ".json" )  == dir [ i ]  . len (  )  - 5 && canint ( dir [ i ]  )  ) f = dir [ i ]  . slice ( 0 ,  - 5 )  ; 
 
  else continue ; 
 
 hasSaveFiles = true ; 
 var o =  {  }  ;
 o . name =  (  function ( f ) {  return  function (  ) {  return "File " + f ;
  }  ;
  }  )  ( f )  ; 
o . func =  (  function ( f ) {  return  function (  ) { loadGame ( f )  ; 
 }  ;
  }  )  ( f )  ; 
meLoadGame . push ( o )  ; 
 } 
  if (  ! hasSaveFiles )  { 
 meLoadGame . push (  { name :  function (  ) {  return gvLangObj [ "load-game-menu" ]  [ "empty" ]  ;
  }  , disabled : true }  )  ; 
 } 
  
 meLoadGame . push (  { name :  function (  ) {  return gvLangObj [ "menu-commons" ]  [ "cancel" ]  ;
  }  , func :  function (  ) { cursor = 1 ; 
menu = meMain ; 
 }  , back :  function (  ) { cursor = 1 ; 
menu = meMain ; 
 }  }  )  ; 
menu = meLoadGame ; 
 }  ; 



}; 
