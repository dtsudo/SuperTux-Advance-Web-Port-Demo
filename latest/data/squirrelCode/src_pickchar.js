if (!window.superTuxAdvanceWebVersion) window.superTuxAdvanceWebVersion = {}; 
if (!window.superTuxAdvanceWebVersion.squirrelFiles) window.superTuxAdvanceWebVersion.squirrelFiles = {}; 

window.superTuxAdvanceWebVersion.squirrelFiles['src/pickchar.nut'] = function () { 


pickCharSettings =  {  }  ; 
pickCharInitialize =  function (  ) { pickCharSettings . charlist =  [  ]  ; 
 {     var foreachOutput1 = squirrelForEach( game . characters );     while(true)     {        foreachOutput1.next();        if (foreachOutput1.isDone()) break; key = foreachOutput1.getKey(); i = foreachOutput1.getValue();  { 
  var newitem =  [ key , i [ 2 ]  , i [ 3 ]  ]  ;
 pickCharSettings . charlist . push ( newitem )  ; 
 } 
     }  } pickCharSettings . charlist . sort (  function ( a , b ) {  if ( a [ 0 ]  > b [ 0 ]  )  return 1 ;
  
  if ( a [ 0 ]  < b [ 0 ]  )  return  - 1 ;
  
  return 0 ;
  }  )  ; 
pickCharSettings . didpick = false ; 
pickCharSettings . picktimer = 30 ; 
pickCharSettings . charslot = 0 ; 
 for (  var i = 0 ;
 i < pickCharSettings . charlist . len (  )  ; i ++  )  { 
  if ( pickCharSettings . charlist [ i ]  [ 0 ]  == game . playerChar )  { 
 pickCharSettings . charslot = i ; 
 break ;  } 
  
  } 
  }  ; 
pickChar =  function (  ) {  var didpick = pickCharSettings . didpick ;
  var charslot = pickCharSettings . charslot ;
  var charlist = pickCharSettings . charlist ;
  var picktimer = pickCharSettings . picktimer ;
  if ( getcon ( "pause" , "press" )  || picktimer <= 0 )  { 
 gvGameMode = gmOverworld ; 
 return ; 
  } 
  
 setDrawTarget ( gvScreen )  ; 
drawSprite ( bgCharSel , 0 , screenW (  )  / 2 , 0 )  ; 
 if (  ! didpick )  { 
  if ( getcon ( "right" , "press" )  ) charslot ++  ; 
 
  if ( getcon ( "left" , "press" )  ) charslot --  ; 
 
  if ( charslot < 0 ) charslot = charlist . len (  )  - 1 ; 
 
  if ( charslot >= charlist . len (  )  ) charslot = 0 ; 
 
  if ( getcon ( "accept" , "press" )  || getcon ( "jump" , "press" )  )  { 
 game . playerChar = charlist [ charslot ]  [ 0 ]  ; 
didpick = true ; 
 } 
  
  } 
  
  else  { 
 picktimer --  ; 
 } 
  
 drawText ( font2 ,  ( screenW (  )  / 2 )  -  ( gvLangObj [ "options-menu" ]  [ "charsel" ]  . len (  )  * 4 )  , 64 , gvLangObj [ "options-menu" ]  [ "charsel" ]  )  ; 
drawText ( font2 ,  ( screenW (  )  / 2 )  -  ( charlist [ charslot ]  [ 0 ]  . len (  )  * 4 )  , 80 , charlist [ charslot ]  [ 0 ]  )  ; 
 if ( didpick ) drawSprite ( getroottable (  )  [ charlist [ charslot ]  [ 1 ]  ]  , charlist [ charslot ]  [ 2 ]  [ 1 ]  , screenW (  )  / 2 , screenH (  )  - 64 )  ; 
 
  else drawSprite ( getroottable (  )  [ charlist [ charslot ]  [ 1 ]  ]  , charlist [ charslot ]  [ 2 ]  [ 0 ]  , screenW (  )  / 2 , screenH (  )  - 64 )  ; 
 
 resetDrawTarget (  )  ; 
drawImage ( gvScreen , 0 , 0 )  ; 
pickCharSettings . didpick = didpick ; 
pickCharSettings . charslot = charslot ; 
pickCharSettings . charlist = charlist ; 
pickCharSettings . picktimer = picktimer ; 
 }  ; 
addChar =  function ( char , overworld , doll , playable , frames ) {  if (  ! getroottable (  )  . rawin ( char )  )  { 
 print ( "No class for " + char + " has been defined!" )  ; 
 return ; 
  } 
  
  var newchar =  [ overworld , doll , playable , frames ]  ;
  if (  ! game . characters . rawin ( char )  ) game . characters [ char ] = newchar ; 
 
  }  ; 



}; 
