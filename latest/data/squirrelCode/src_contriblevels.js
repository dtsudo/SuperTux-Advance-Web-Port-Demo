if (!window.superTuxAdvanceWebVersion) window.superTuxAdvanceWebVersion = {}; 
if (!window.superTuxAdvanceWebVersion.squirrelFiles) window.superTuxAdvanceWebVersion.squirrelFiles = {}; 

window.superTuxAdvanceWebVersion.squirrelFiles['src/contriblevels.nut'] = function () { 


meContribLevels =  [  ]  ; 
lastLevelsCounted =  { "contribFolder" : null , "completed" : null , "total" : null , "percentage" : null }  ; 
selectContrib =  function (  ) { meContribLevels =  [  ]  ; 
 if ( fileExists ( "contrib" )  )  { 
  var contrib = lsdir ( "contrib" )  ;
  {     var foreachOutput1 = squirrelForEach( contrib );     while(true)     {        foreachOutput1.next();        if (foreachOutput1.isDone()) break; item = foreachOutput1.getValue();  { 
  if ( item != "." && item != ".." && isdir ( "contrib/" + item )  && fileExists ( "contrib/" + item + "/info.json" )  )  { 
  var data = jsonRead ( fileRead ( "contrib/" + item + "/info.json" )  )  ;
 meContribLevels . push (  { contribFolder : item , contribName : data [ "name" ]  , contribWorldmap : data [ "worldmap" ]  , name :  (  function ( x ) {  return  function (  ) {  return x ;
  }  ;
  }  )  ( data [ "name" ]  )  , func :  (  function ( contribFolder , contribWorldmap ) {  return  function (  ) { lastLevelsCounted =  { "contribFolder" : null , "completed" : null , "total" : null , "percentage" : null }  ; 
game = clone ( gameDefault )  ; 
game . completed . clear (  )  ; 
game . allCoins . clear (  )  ; 
game . allEnemies . clear (  )  ; 
game . allSecrets . clear (  )  ; 
game . bestTime . clear (  )  ; 
game . file = contribFolder ; 
game . path = "contrib/" + contribFolder + "/" ; 
game . world = contribWorldmap ; 
tileSearchDir . push ( "contrib/" + contribFolder + "/gfx" )  ; 
gvDoIGT = false ; 
 if ( fileExists ( "contrib/" + contribFolder + "/" + config . lang + ".json" )  )  { 
 gvLangObj = mergeTable ( gvLangObj , jsonRead ( fileRead ( "contrib/" + contribFolder + "/" + config . lang + ".json" )  )  )  ; 
print ( "Found text.json" )  ; 
 } 
  
  else  if ( fileExists ( "contrib/" + contribFolder + "/text.json" )  )  { 
 gvLangObj = mergeTable ( gvLangObj , jsonRead ( fileRead ( "contrib/" + contribFolder + "/text.json" )  )  )  ; 
print ( "Found text.json" )  ; 
 } 
  
  
  if ( fileExists ( "contrib/" + contribFolder + "/script.nut" )  )  if (  ! contribDidRun . rawin ( contribFolder )  )  { 
 donut ( "contrib/" + contribFolder + "/script.nut" )  ; 
contribDidRun [ contribFolder ] = true ; 
 } 
  
  
  if ( fileExists ( "save/" + contribFolder + ".json" )  ) loadGame ( contribFolder )  ; 
 
  else startOverworld ( "contrib/" + contribFolder + "/" + contribWorldmap )  ; 
 
  }  ;
  }  )  ( item , data [ "worldmap" ]  )  , desc :  (  function ( contribFolder , contribWorldmap ) {  return  function (  ) {  if ( lastLevelsCounted [ "contribFolder" ]  == contribFolder )  { 
  return "Progress: " + lastLevelsCounted [ "completed" ]  + "/" + lastLevelsCounted [ "total" ]  + " (" + lastLevelsCounted [ "percentage" ]  + "%)" ;
  } 
  
  var levels =  [  ]  ;
  var completedLevelsCount = 0 ;
  var contribWorldmapData = jsonRead ( fileRead ( "contrib/" + contribFolder + "/" + contribWorldmap )  )  ;
  var acttiles = null ;
  {     var foreachOutput2 = squirrelForEach( contribWorldmapData [ "tilesets" ]  );     while(true)     {        foreachOutput2.next();        if (foreachOutput2.isDone()) break; tile = foreachOutput2.getValue();  { 
  if ( tile [ "name" ]  == "actor" )  { 
 acttiles = tile [ "firstgid" ]  ; 
 break ;  } 
  
  } 
     }  }  if ( acttiles == null )  { 
 print ( "ERROR: Could not find actor tileset in worldmap!" )  ; 
 return "ERROR: Could not find actor tileset in worldmap!" ;
  } 
  
  {     var foreachOutput3 = squirrelForEach( contribWorldmapData [ "layers" ]  );     while(true)     {        foreachOutput3.next();        if (foreachOutput3.isDone()) break; layer = foreachOutput3.getValue();  { 
  if (  ! layer . rawin ( "objects" )  ) continue ; 
 
  {     var foreachOutput4 = squirrelForEach( layer [ "objects" ]  );     while(true)     {        foreachOutput4.next();        if (foreachOutput4.isDone()) break; obj = foreachOutput4.getValue();  { 
  if (  ! obj . rawin ( "gid" )  ) continue ; 
 
  if ( obj [ "gid" ]  == acttiles + 1 && obj [ "visible" ]  ) levels . push ( obj [ "name" ]  )  ; 
 
  } 
     }  }  } 
     }  }  if ( fileExists ( "save/" + contribFolder + ".json" )  )  { 
  var contribWorldmapSaveData = jsonRead ( fileRead ( "save/" + contribFolder + ".json" )  )  ;
  {     var foreachOutput5 = squirrelForEach( contribWorldmapSaveData [ "completed" ]  );     while(true)     {        foreachOutput5.next();        if (foreachOutput5.isDone()) break; level = foreachOutput5.getKey(); levelCompleted = foreachOutput5.getValue();  { 
  if ( levelCompleted )  { 
  var wasFound = false ;
  for (  var searchIndex = 0 ;
 searchIndex < levels . len (  )  ; searchIndex ++  )  { 
  if ( levels [ searchIndex ]  == level ) wasFound = true ; 
 
  } 
  if ( wasFound ) completedLevelsCount ++  ; 
 
  } 
  
  } 
     }  }  } 
  
  var percentage = floor ( completedLevelsCount * 100 / levels . len (  )  )  ;
 lastLevelsCounted =  { "contribFolder" : contribFolder , "completed" : completedLevelsCount , "total" : levels . len (  )  , "percentage" : percentage }  ; 
 return "Progress: " + completedLevelsCount + "/" + levels . len (  )  + " (" + percentage + "%)" ;
  }  ;
  }  )  ( item , data [ "worldmap" ]  )  }  )  ; 
 } 
  
  } 
     }  }  } 
  
  if ( meContribLevels . len (  )  == 0 )  { 
 meContribLevels . push (  { name :  function (  ) {  return gvLangObj [ "contrib-menu" ]  [ "empty" ]  ;
  }  , disabled : true }  )  ; 
 } 
  
  else meContribLevels . sort (  function ( a , b ) {  if ( a . name (  )  > b . name (  )  )  return 1 ;
  
  if ( a . name (  )  < b . name (  )  )  return  - 1 ;
  
  return 0 ;
  }  )  ; 
 
 meContribLevels . push (  { name :  function (  ) {  return gvLangObj [ "menu-commons" ]  [ "back" ]  ;
  }  , func :  function (  ) { menu = meMain ; 
cursor = 2 ; 
 }  , back :  function (  ) { menu = meMain ; 
cursor = 2 ; 
 }  }  )  ; 
menu = meContribLevels ; 
 }  ; 



}; 
