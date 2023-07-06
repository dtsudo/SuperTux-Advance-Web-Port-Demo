if (!window.superTuxAdvanceWebVersion) window.superTuxAdvanceWebVersion = {}; 
if (!window.superTuxAdvanceWebVersion.squirrelFiles) window.superTuxAdvanceWebVersion.squirrelFiles = {}; 

window.superTuxAdvanceWebVersion.squirrelFiles['src/menus.nut'] = function () { 


menu =  [  ]  ; 
menuLast =  [  ]  ; 
menuItemsPos =  [  ]  ; 
cursor = 0 ; 
cursorOffset = 0 ; 
cursorTimer = 30 ; 
menuMax = 8 ;
 fontW = 8 ;
 fontH = 14 ;
 menuY = 40 ;
 textMenu =  function (  ) {  if ( menu ==  [  ]  )  return ; 
  
  if ( menu != menuLast )  { 
 cursor = 0 ; 
cursorOffset = 0 ; 
 } 
  
 menuLast = menu ; 
menuItemsPos =  [  ]  ; 
 if ( menu . len (  )  > menuMax )  for (  var i = cursorOffset ;
 i < cursorOffset + menuMax ; i ++  )  { 
  var currFont = font2 ;
  if ( menu [ i ]  . rawin ( "disabled" )  && menu [ i ]  . disabled == true )  { 
 currFont = font2G ; 
 } 
  
  if ( cursor == i )  { 
 currFont = font2I ; 
drawSprite ( font2 , 97 ,  ( screenW (  )  / 2 )  -  ( menu [ i ]  . name (  )  . len (  )  * 4 )  - 16 , screenH (  )  - menuY -  ( menuMax * fontH )  +  (  ( i - cursorOffset )  * fontH )  )  ; 
drawSprite ( font2 , 102 ,  ( screenW (  )  / 2 )  +  ( menu [ i ]  . name (  )  . len (  )  * 4 )  + 7 , screenH (  )  - menuY -  ( menuMax * fontH )  +  (  ( i - cursorOffset )  * fontH )  )  ; 
 if ( menu [ i ]  . rawin ( "desc" )  )  { 
 setDrawColor ( 0x00000080 )  ; 
drawRec ( 0 , screenH (  )  - fontH - 10 , screenW (  )  , 12 , true )  ; 
drawText ( font ,  ( screenW (  )  / 2 )  -  ( menu [ i ]  . desc (  )  . len (  )  * 3 )  , screenH (  )  - fontH - 8 , menu [ i ]  . desc (  )  )  ; 
 } 
  
  } 
  
  var textX =  ( screenW (  )  / 2 )  -  ( menu [ i ]  . name (  )  . len (  )  * 4 )  ;
  var textY = screenH (  )  - menuY -  ( menuMax * fontH )  +  (  ( i - cursorOffset )  * fontH )  ;
 drawText ( currFont , textX , textY , menu [ i ]  . name (  )  )  ; 
menuItemsPos . append (  { index : i , x : textX , y : textY , len : menu [ i ]  . name (  )  . len (  )  * fontW }  )  ; 
 if ( cursorOffset > 0 )  for (  var ii = 0 ;
 ii < 4 ; ii ++  ) drawSprite ( font2 , 103 ,  ( screenW (  )  / 2 - 24 )  +  ( ii * 12 )  , screenH (  )  - menuY -  ( fontH *  ( menuMax + 1 )  )  )  ; 
 
  if ( cursorOffset < menu . len (  )  - menuMax )  for (  var ii = 0 ;
 ii < 4 ; ii ++  ) drawSprite ( font2 , 98 ,  ( screenW (  )  / 2 - 24 )  +  ( ii * 12 )  , screenH (  )  - menuY )  ; 
 
  } 
  
  else  for (  var i = 0 ;
 i < menu . len (  )  ; i ++  )  { 
  var currFont = font2 ;
  if ( menu [ i ]  . rawin ( "disabled" )  && menu [ i ]  . disabled == true )  { 
 currFont = font2G ; 
 } 
  
  if ( cursor == i )  { 
 currFont = font2I ; 
drawSprite ( font2 , 97 ,  ( screenW (  )  / 2 )  -  ( menu [ i ]  . name (  )  . len (  )  * 4 )  - 16 , screenH (  )  - menuY -  ( menu . len (  )  * fontH )  +  ( i * fontH )  )  ; 
drawSprite ( font2 , 102 ,  ( screenW (  )  / 2 )  +  ( menu [ i ]  . name (  )  . len (  )  * 4 )  + 7 , screenH (  )  - menuY -  ( menu . len (  )  * fontH )  +  ( i * fontH )  )  ; 
 if ( menu [ i ]  . rawin ( "desc" )  )  { 
 setDrawColor ( 0x00000080 )  ; 
drawRec ( 0 , screenH (  )  - fontH - 10 , screenW (  )  , 12 , true )  ; 
drawText ( font ,  ( screenW (  )  / 2 )  -  ( menu [ i ]  . desc (  )  . len (  )  * 3 )  , screenH (  )  - fontH - 8 , menu [ i ]  . desc (  )  )  ; 
 } 
  
  } 
  
  var textX =  ( screenW (  )  / 2 )  -  ( menu [ i ]  . name (  )  . len (  )  * 4 )  ;
  var textY = screenH (  )  - menuY -  ( menu . len (  )  * fontH )  +  ( i * fontH )  ;
 drawText ( currFont , textX , textY , menu [ i ]  . name (  )  )  ; 
menuItemsPos . append (  { index : i , x : textX , y : textY , len : menu [ i ]  . name (  )  . len (  )  * fontW }  )  ; 
 } 
  
 updateCursor (  )  ; 
 if ( mouseRelease ( 0 )  ) processCursorInput (  )  ; 
 
  if ( getcon ( "down" , "press" )  ||  ( getcon ( "down" , "hold" )  && cursorTimer <= 0 )  )  { 
 cursor ++  ; 
 if ( cursor >= cursorOffset + menuMax ) cursorOffset ++  ; 
 
  if ( cursor >= menu . len (  )  )  { 
 cursor = 0 ; 
cursorOffset = 0 ; 
 } 
  
  if ( getcon ( "down" , "press" )  ) cursorTimer = 40 ; 
 
  else cursorTimer = 10 ; 
 
 popSound ( sndMenuMove , 0 )  ; 
 } 
  
  if ( getcon ( "up" , "press" )  ||  ( getcon ( "up" , "hold" )  && cursorTimer <= 0 )  )  { 
 cursor --  ; 
 if ( cursor < cursorOffset ) cursorOffset --  ; 
 
  if ( cursor < 0 )  { 
 cursor = menu . len (  )  - 1 ; 
 if ( menu . len (  )  > menuMax ) cursorOffset = menu . len (  )  - menuMax ; 
 
  } 
  
  if ( getcon ( "up" , "press" )  ) cursorTimer = 40 ; 
 
  else cursorTimer = 10 ; 
 
 popSound ( sndMenuMove , 0 )  ; 
 } 
  
  if ( getcon ( "down" , "hold" )  || getcon ( "up" , "hold" )  ) cursorTimer --  ; 
 
  if ( getcon ( "jump" , "press" )  || getcon ( "accept" , "press" )  )  { 
  if ( menu [ cursor ]  . rawin ( "disabled" )  && menu [ cursor ]  . disabled == true )  return ; 
  
 popSound ( sndMenuSelect , 0 )  ; 
menu [ cursor ]  . func (  )  ; 
 } 
  
  if ( getcon ( "pause" , "press" )  )  { 
  for (  var i = 0 ;
 i < menu . len (  )  ; i ++  )  { 
  if ( menu [ i ]  . rawin ( "back" )  )  { 
 menu [ i ]  [ "back" ]  (  )  ; 
 break ;  } 
  
  } 
  } 
  
  if ( mouseWheelY (  )  < 0 && cursorOffset < menu . len (  )  - menuMax )  { 
 cursorOffset ++  ; 
cursor ++  ; 
 } 
  
  if ( mouseWheelY (  )  > 0 && cursorOffset > 0 )  { 
 cursorOffset --  ; 
cursor --  ; 
 } 
  
  }  ; 
meMain =  [  { name :  function (  ) {  return gvLangObj [ "main-menu" ]  [ "new" ]  ;
  }  , func :  function (  ) { gvTimeAttack = false ; 
menu = meDifficulty ; 
 }  }  ,  { name :  function (  ) {  return gvLangObj [ "main-menu" ]  [ "load" ]  ;
  }  , func :  function (  ) { gvTimeAttack = false ; 
selectLoadGame (  )  ; 
 }  }  ,  { name :  function (  ) {  return gvLangObj [ "main-menu" ]  [ "time-attack" ]  ;
  }  , func :  function (  ) { gvTimeAttack = true ; 
menu = meTimeAttack ; 
 }  }  ,  { name :  function (  ) {  return gvLangObj [ "main-menu" ]  [ "contrib-levels" ]  ;
  }  , func :  function (  ) { gvTimeAttack = false ; 
selectContrib (  )  ; 
 }  }  ,  { name :  function (  ) {  return gvLangObj [ "main-menu" ]  [ "options" ]  ;
  }  , func :  function (  ) { menu = meOptions ; 
 }  }  ,  { name :  function (  ) {  return gvLangObj [ "main-menu" ]  [ "extras" ]  ;
  }  , func :  function (  ) { menu = meExtras ; 
 }  }  ]  ; 
meExtras =  [  { name :  function (  ) {  return gvLangObj [ "extras-menu" ]  [ "achievements" ]  ;
  }  , func :  function (  ) { selectAchievements (  )  ; 
 }  }  ,  { name :  function (  ) {  return gvLangObj [ "extras-menu" ]  [ "credits" ]  ;
  }  , func :  function (  ) { startCredits ( "res" )  ; 
 }  }  ,  { name :  function (  ) {  return gvLangObj [ "menu-commons" ]  [ "back" ]  ;
  }  , func :  function (  ) { menu = meMain ; 
 }  , back :  function (  ) { menu = meMain ; 
 }  }  ]  ; 
meTimeAttack =  [  { name :  function (  ) {  return gvLangObj [ "level" ]  [ "full-game" ]  ;
  }  , func :  function (  ) { gvTAFullGame = true ; 
game . path = "res/map/" ; 
gvTAStart = "aurora-learn" ; 
menu = meDifficulty ; 
 }  , desc :  function (  ) {  return gvLangObj [ "options-menu-desc" ]  [ "fullgame" ]  ;
  }  }  ,  { name :  function (  ) {  return gvLangObj [ "level" ]  [ "overworld-0" ]  ;
  }  , func :  function (  ) { gvTAFullGame = false ; 
game . path = "res/map/" ; 
gvTAStart = "aurora-learn" ; 
menu = meDifficulty ; 
 }  }  ,  { name :  function (  ) {  return gvLangObj [ "menu-commons" ]  [ "back" ]  ;
  }  , func :  function (  ) { menu = meMain ; 
 }  , back :  function (  ) { menu = meMain ; 
 }  }  ]  ; 
mePausePlay =  [  { name :  function (  ) {  return gvLangObj [ "pause-menu" ]  [ "continue" ]  ;
  }  , func :  function (  ) { gvGameMode = gmPlay ; 
 }  }  ,  { name :  function (  ) {  return gvLangObj [ "pause-menu" ]  [ "restart" ]  ;
  }  , func :  function (  ) { gvIGT = 0 ; 
game . check = false ; 
startPlay ( gvMap . file , true , true )  ; 
 }  }  ,  { name :  function (  ) {  return gvLangObj [ "main-menu" ]  [ "options" ]  ;
  }  , func :  function (  ) { menu = meOptions ; 
 }  }  ,  { name :  function (  ) {  return gvLangObj [ "pause-menu" ]  [ "quit-level" ]  ;
  }  , func :  function (  ) {  if ( gvTimeAttack ) startMain (  )  ; 
 
  else startOverworld ( game . world )  ; 
 
  }  }  ]  ; 
mePauseTimeAttack =  [  { name :  function (  ) {  return gvLangObj [ "pause-menu" ]  [ "continue" ]  ;
  }  , func :  function (  ) { gvGameMode = gmPlay ; 
 }  }  ,  { name :  function (  ) {  return gvLangObj [ "pause-menu" ]  [ "restart" ]  ;
  }  , func :  function (  ) { gvIGT = 0 ; 
game . check = false ; 
startPlay ( gvMap . file , true , true )  ; 
 }  }  ,  { name :  function (  ) {  return gvLangObj [ "main-menu" ]  [ "options" ]  ;
  }  , func :  function (  ) { menu = meOptions ; 
 }  }  ,  { name :  function (  ) {  return gvLangObj [ "pause-menu" ]  [ "restart-run" ]  ;
  }  , func :  function (  ) { newTimeAttack (  )  ; 
 }  }  ,  { name :  function (  ) {  return gvLangObj [ "pause-menu" ]  [ "end-run" ]  ;
  }  , func :  function (  ) {  if ( gvTimeAttack ) startMain (  )  ; 
 
  else startOverworld ( game . world )  ; 
 
  }  }  ]  ; 
mePauseOver =  [  { name :  function (  ) {  return gvLangObj [ "pause-menu" ]  [ "continue" ]  ;
  }  , func :  function (  ) { gvGameMode = gmOverworld ; 
 }  }  ,  { name :  function (  ) {  return gvLangObj [ "pause-menu" ]  [ "save" ]  ;
  }  , func :  function (  ) { saveGame (  )  ; 
popSound ( sndHeal , 0 )  ; 
gvGameMode = gmOverworld ; 
 }  }  ,  { name :  function (  ) {  return gvLangObj [ "pause-menu" ]  [ "character" ]  ;
  }  , func :  function (  ) { pickCharInitialize (  )  ; 
gvGameMode = pickChar ; 
 }  }  ,  { name :  function (  ) {  return gvLangObj [ "main-menu" ]  [ "options" ]  ;
  }  , func :  function (  ) { menu = meOptions ; 
 }  }  ,  { name :  function (  ) {  return gvLangObj [ "pause-menu" ]  [ "quit-game" ]  ;
  }  , func :  function (  ) { saveGame (  )  ; 
startMain (  )  ; 
 }  }  ]  ; 
meOptions =  [  { name :  function (  ) {  var msg = gvLangObj [ "options-menu" ]  [ "cursor" ]  ;
  if ( config . showcursor ) msg += gvLangObj [ "menu-commons" ]  [ "on" ]  ; 
 
  else msg += gvLangObj [ "menu-commons" ]  [ "off" ]  ; 
 
  return msg ;
  }  , desc :  function (  ) {  return gvLangObj [ "options-menu-desc" ]  [ "cursor" ]  ;
  }  , func :  function (  ) { config . showcursor =  ! config . showcursor ; 
fileWrite ( "config.json" , jsonWrite ( config )  )  ; 
 }  }  ,  { name :  function (  ) {  return gvLangObj [ "options-menu" ]  [ "timers" ]  ;
  }  , desc :  function (  ) {  return gvLangObj [ "options-menu-desc" ]  [ "timers" ]  ;
  }  , func :  function (  ) { menu = meTimers ; 
 }  }  ,  { name :  function (  ) {  var msg = gvLangObj [ "options-menu" ]  [ "autorun" ]  ;
  if ( config . autorun ) msg += gvLangObj [ "menu-commons" ]  [ "on" ]  ; 
 
  else msg += gvLangObj [ "menu-commons" ]  [ "off" ]  ; 
 
  return msg ;
  }  , desc :  function (  ) {  return gvLangObj [ "options-menu-desc" ]  [ "autorun" ]  ;
  }  , func :  function (  ) { config . autorun =  ! config . autorun ; 
fileWrite ( "config.json" , jsonWrite ( config )  )  ; 
 }  }  ,  { name :  function (  ) {  return gvLangObj [ "options-menu" ]  [ "sound-volume" ]  ;
  }  , desc :  function (  ) {  if ( getcon ( "left" , "press" )  && getSoundVolume (  )  > 0 )  { 
 config . soundVolume -= 4 ; 
setSoundVolume ( config . soundVolume )  ; 
popSound ( sndMenuMove , 0 )  ; 
 } 
  
  if ( getcon ( "right" , "press" )  && getSoundVolume (  )  < 128 )  { 
 config . soundVolume += 4 ; 
setSoundVolume ( config . soundVolume )  ; 
popSound ( sndMenuMove , 0 )  ; 
 } 
  
  var vol = "VOL: [" ;
  for (  var i = 0 ;
 i < 16 ; i ++  )  { 
  if ( i < getSoundVolume (  )  / 8 ) vol += chint ( 8 )  ; 
 
  else vol += chint ( 7 )  ; 
 
  } 
 vol += "] (<-/->)" ; 
 return vol ;
  }  , func :  function (  ) {  }  }  ,  { name :  function (  ) {  return gvLangObj [ "options-menu" ]  [ "music-volume" ]  ;
  }  , desc :  function (  ) {  if ( getcon ( "left" , "press" )  && getMusicVolume (  )  > 0 )  { 
 config . musicVolume -= 4 ; 
setMusicVolume ( config . musicVolume )  ; 
popSound ( sndMenuMove , 0 )  ; 
 } 
  
  if ( getcon ( "right" , "press" )  && getMusicVolume (  )  < 128 )  { 
 config . musicVolume += 4 ; 
setMusicVolume ( config . musicVolume )  ; 
popSound ( sndMenuMove , 0 )  ; 
 } 
  
  var vol = "VOL: [" ;
  for (  var i = 0 ;
 i < 16 ; i ++  )  { 
  if ( i < getMusicVolume (  )  / 8 ) vol += chint ( 8 )  ; 
 
  else vol += chint ( 7 )  ; 
 
  } 
 vol += "] (<-/->)" ; 
 return vol ;
  }  , func :  function (  ) {  }  }  ,  { name :  function (  ) {  return gvLangObj [ "menu-commons" ]  [ "back" ]  ;
  }  , func :  function (  ) {  if ( gvGameMode == gmPause )  { 
  if ( gvPauseMode ) menu = mePauseOver ; 
 
  else menu = mePausePlay ; 
 
  } 
  
  else menu = meMain ; 
 
 fileWrite ( "config.json" , jsonWrite ( config )  )  ; 
 }  , back :  function (  ) {  if ( gvGameMode == gmPause )  { 
  if ( gvPauseMode ) menu = mePauseOver ; 
 
  else menu = mePausePlay ; 
 
  } 
  
  else menu = meMain ; 
 
 fileWrite ( "config.json" , jsonWrite ( config )  )  ; 
 }  }  ]  ; 
meKeybinds =  [  { name :  function (  ) {  return gvLangObj [ "controls-menu" ]  [ "up" ]  + ": " + gvLangObj [ "key" ]  [ config . key . up . tostring (  )  ]  ;
  }  , func :  function (  ) { rebindKeys ( 0 )  ; 
 }  }  ,  { name :  function (  ) {  return gvLangObj [ "controls-menu" ]  [ "down" ]  + ": " + gvLangObj [ "key" ]  [ config . key . down . tostring (  )  ]  ;
  }  , func :  function (  ) { rebindKeys ( 1 )  ; 
 }  }  ,  { name :  function (  ) {  return gvLangObj [ "controls-menu" ]  [ "left" ]  + ": " + gvLangObj [ "key" ]  [ config . key . left . tostring (  )  ]  ;
  }  , func :  function (  ) { rebindKeys ( 2 )  ; 
 }  }  ,  { name :  function (  ) {  return gvLangObj [ "controls-menu" ]  [ "right" ]  + ": " + gvLangObj [ "key" ]  [ config . key . right . tostring (  )  ]  ;
  }  , func :  function (  ) { rebindKeys ( 3 )  ; 
 }  }  ,  { name :  function (  ) {  return gvLangObj [ "controls-menu" ]  [ "jump" ]  + ": " + gvLangObj [ "key" ]  [ config . key . jump . tostring (  )  ]  ;
  }  , func :  function (  ) { rebindKeys ( 4 )  ; 
 }  }  ,  { name :  function (  ) {  return gvLangObj [ "controls-menu" ]  [ "shoot" ]  + ": " + gvLangObj [ "key" ]  [ config . key . shoot . tostring (  )  ]  ;
  }  , func :  function (  ) { rebindKeys ( 5 )  ; 
 }  }  ,  { name :  function (  ) {  return gvLangObj [ "controls-menu" ]  [ "run" ]  + ": " + gvLangObj [ "key" ]  [ config . key . run . tostring (  )  ]  ;
  }  , func :  function (  ) { rebindKeys ( 6 )  ; 
 }  }  ,  { name :  function (  ) {  return gvLangObj [ "controls-menu" ]  [ "sneak" ]  + ": " + gvLangObj [ "key" ]  [ config . key . sneak . tostring (  )  ]  ;
  }  , func :  function (  ) { rebindKeys ( 7 )  ; 
 }  }  ,  { name :  function (  ) {  return gvLangObj [ "controls-menu" ]  [ "pause" ]  + ": " + gvLangObj [ "key" ]  [ config . key . pause . tostring (  )  ]  ;
  }  , func :  function (  ) { rebindKeys ( 8 )  ; 
 }  }  ,  { name :  function (  ) {  return gvLangObj [ "controls-menu" ]  [ "item-swap" ]  + ": " + gvLangObj [ "key" ]  [ config . key . swap . tostring (  )  ]  ;
  }  , func :  function (  ) { rebindKeys ( 9 )  ; 
 }  }  ,  { name :  function (  ) {  return gvLangObj [ "controls-menu" ]  [ "menu-accept" ]  + ": " + gvLangObj [ "key" ]  [ config . key . accept . tostring (  )  ]  ;
  }  , func :  function (  ) { rebindKeys ( 10 )  ; 
 }  }  ,  { name :  function (  ) {  return gvLangObj [ "controls-menu" ]  [ "cam-left-peek" ]  + ": " + gvLangObj [ "key" ]  [ config . key . leftPeek . tostring (  )  ]  ;
  }  , func :  function (  ) { rebindKeys ( 11 )  ; 
 }  }  ,  { name :  function (  ) {  return gvLangObj [ "controls-menu" ]  [ "cam-right-peek" ]  + ": " + gvLangObj [ "key" ]  [ config . key . rightPeek . tostring (  )  ]  ;
  }  , func :  function (  ) { rebindKeys ( 12 )  ; 
 }  }  ,  { name :  function (  ) {  return gvLangObj [ "controls-menu" ]  [ "cam-down-peek" ]  + ": " + gvLangObj [ "key" ]  [ config . key . downPeek . tostring (  )  ]  ;
  }  , func :  function (  ) { rebindKeys ( 13 )  ; 
 }  }  ,  { name :  function (  ) {  return gvLangObj [ "controls-menu" ]  [ "cam-up-peek" ]  + ": " + gvLangObj [ "key" ]  [ config . key . upPeek . tostring (  )  ]  ;
  }  , func :  function (  ) { rebindKeys ( 14 )  ; 
 }  }  ,  { name :  function (  ) {  return gvLangObj [ "menu-commons" ]  [ "back" ]  ;
  }  , func :  function (  ) { menu = meOptions ; 
 }  , back :  function (  ) { menu = meOptions ; 
 }  }  ]  ; 
meJoybinds =  [  { name :  function (  ) {  return gvLangObj [ "controls-menu" ]  [ "jump" ]  + ": " +  ( config . joy . jump !=  - 1 ? config . joy . jump . tostring (  )  : "" )  ;
  }  , func :  function (  ) { rebindGamepad ( 4 )  ; 
 }  }  ,  { name :  function (  ) {  return gvLangObj [ "controls-menu" ]  [ "shoot" ]  + ": " +  ( config . joy . shoot !=  - 1 ? config . joy . shoot . tostring (  )  : "" )  ;
  }  , func :  function (  ) { rebindGamepad ( 5 )  ; 
 }  }  ,  { name :  function (  ) {  return gvLangObj [ "controls-menu" ]  [ "run" ]  + ": " + config . joy . run . tostring (  )  ;
  }  , func :  function (  ) { rebindGamepad ( 6 )  ; 
 }  }  ,  { name :  function (  ) {  return gvLangObj [ "controls-menu" ]  [ "sneak" ]  + ": " + config . joy . sneak . tostring (  )  ;
  }  , func :  function (  ) { rebindGamepad ( 7 )  ; 
 }  }  ,  { name :  function (  ) {  return gvLangObj [ "controls-menu" ]  [ "pause" ]  + ": " + config . joy . pause . tostring (  )  ;
  }  , func :  function (  ) { rebindGamepad ( 8 )  ; 
 }  }  ,  { name :  function (  ) {  return gvLangObj [ "controls-menu" ]  [ "item-swap" ]  + ": " + config . joy . swap . tostring (  )  ;
  }  , func :  function (  ) { rebindGamepad ( 9 )  ; 
 }  }  ,  { name :  function (  ) {  return gvLangObj [ "controls-menu" ]  [ "menu-accept" ]  + ": " + config . joy . accept . tostring (  )  ;
  }  , func :  function (  ) { rebindGamepad ( 10 )  ; 
 }  }  ,  { name :  function (  ) {  return gvLangObj [ "controls-menu" ]  [ "cam-left-peek" ]  + ": " + config . joy . leftPeek . tostring (  )  ;
  }  , func :  function (  ) { rebindGamepad ( 11 )  ; 
 }  }  ,  { name :  function (  ) {  return gvLangObj [ "controls-menu" ]  [ "cam-right-peek" ]  + ": " + config . joy . rightPeek . tostring (  )  ;
  }  , func :  function (  ) { rebindGamepad ( 12 )  ; 
 }  }  ,  { name :  function (  ) {  return gvLangObj [ "controls-menu" ]  [ "cam-down-peek" ]  + ": " + config . joy . downPeek . tostring (  )  ;
  }  , func :  function (  ) { rebindGamepad ( 13 )  ; 
 }  }  ,  { name :  function (  ) {  return gvLangObj [ "controls-menu" ]  [ "cam-up-peek" ]  + ": " + config . joy . upPeek . tostring (  )  ;
  }  , func :  function (  ) { rebindGamepad ( 14 )  ; 
 }  }  ,  { name :  function (  ) {  return gvLangObj [ "controls-menu" ]  [ "cam-peek-x" ]  + ": " + config . joy . xPeek . tostring (  )  ;
  }  , func :  function (  ) { rebindJoyPeek ( 0 )  ; 
 }  }  ,  { name :  function (  ) {  return gvLangObj [ "controls-menu" ]  [ "cam-peek-y" ]  + ": " + config . joy . yPeek . tostring (  )  ;
  }  , func :  function (  ) { rebindJoyPeek ( 1 )  ; 
 }  }  ,  { name :  function (  ) {  return gvLangObj [ "menu-commons" ]  [ "back" ]  ;
  }  , func :  function (  ) { menu = meOptions ; 
 }  , back :  function (  ) { menu = meOptions ; 
 }  }  ]  ; 
meTimers =  [  { name :  function (  ) {  return gvLangObj [ "timers-menu" ]  [ "speedrun-timer-level" ]  + ": " +  ( config . showleveligt ? gvLangObj [ "bool" ]  [ "on" ]  : gvLangObj [ "bool" ]  [ "off" ]  )  ;
  }  , func :  function (  ) { config . showleveligt =  ! config . showleveligt ; 
 }  }  ,  { name :  function (  ) {  return gvLangObj [ "timers-menu" ]  [ "speedrun-timer-global" ]  + ": " +  ( config . showglobaligt ? gvLangObj [ "bool" ]  [ "on" ]  : gvLangObj [ "bool" ]  [ "off" ]  )  ;
  }  , func :  function (  ) { config . showglobaligt =  ! config . showglobaligt ; 
 }  }  ,  { name :  function (  ) {  return gvLangObj [ "menu-commons" ]  [ "back" ]  ;
  }  , func :  function (  ) { menu = meOptions ; 
 }  , back :  function (  ) { menu = meOptions ; 
 }  }  ]  ; 
meDifficulty =  [  { name :  function (  ) {  return gvLangObj [ "difficulty-levels" ]  [ "easy" ]  ;
  }  , func :  function (  ) { game . difficulty = 0 ; 
 if ( gvTimeAttack ) newTimeAttack (  )  ; 
 
  else menu = meNewGame ; 
 
  }  }  ,  { name :  function (  ) {  return gvLangObj [ "difficulty-levels" ]  [ "normal" ]  ;
  }  , func :  function (  ) { game . difficulty = 1 ; 
 if ( gvTimeAttack ) newTimeAttack (  )  ; 
 
  else menu = meNewGame ; 
 
  }  }  ,  { name :  function (  ) {  return gvLangObj [ "difficulty-levels" ]  [ "hard" ]  ;
  }  , func :  function (  ) { game . difficulty = 2 ; 
 if ( gvTimeAttack ) newTimeAttack (  )  ; 
 
  else menu = meNewGame ; 
 
  }  }  ,  { name :  function (  ) {  return gvLangObj [ "difficulty-levels" ]  [ "super" ]  ;
  }  , func :  function (  ) { game . difficulty = 3 ; 
 if ( gvTimeAttack ) newTimeAttack (  )  ; 
 
  else menu = meNewGame ; 
 
  }  }  ,  { name :  function (  ) {  return gvLangObj [ "menu-commons" ]  [ "cancel" ]  ;
  }  , func :  function (  ) { menu = meMain ; 
 }  , back :  function (  ) { menu = meMain ; 
 }  }  ]  ; 
meNewGame =  [  { name :  function (  ) {  var m = "File 0" ;
  if ( fileExists ( "save/0.json" )  ) m += " " + gvLangObj [ "new-game-menu" ]  [ "file-exists" ]  ; 
 
  return m ;
  }  , func :  function (  ) { game . file = 0 ; 
 if ( fileExists ( "save/0.json" )  ) menu = meOverwrite ; 
 
  else newGame ( 0 )  ; 
 
  }  }  ,  { name :  function (  ) {  var m = "File 1" ;
  if ( fileExists ( "save/1.json" )  ) m += " " + gvLangObj [ "new-game-menu" ]  [ "file-exists" ]  ; 
 
  return m ;
  }  , func :  function (  ) { game . file = 1 ; 
 if ( fileExists ( "save/1.json" )  ) menu = meOverwrite ; 
 
  else newGame ( 1 )  ; 
 
  }  }  ,  { name :  function (  ) {  var m = "File 2" ;
  if ( fileExists ( "save/2.json" )  ) m += " " + gvLangObj [ "new-game-menu" ]  [ "file-exists" ]  ; 
 
  return m ;
  }  , func :  function (  ) { game . file = 2 ; 
 if ( fileExists ( "save/2.json" )  ) menu = meOverwrite ; 
 
  else newGame ( 2 )  ; 
 
  }  }  ,  { name :  function (  ) {  var m = "File 3" ;
  if ( fileExists ( "save/3.json" )  ) m += " " + gvLangObj [ "new-game-menu" ]  [ "file-exists" ]  ; 
 
  return m ;
  }  , func :  function (  ) { game . file = 3 ; 
 if ( fileExists ( "save/3.json" )  ) menu = meOverwrite ; 
 
  else newGame ( 3 )  ; 
 
  }  }  ,  { name :  function (  ) {  return gvLangObj [ "menu-commons" ]  [ "cancel" ]  ;
  }  , func :  function (  ) { menu = meMain ; 
 }  , back :  function (  ) { menu = meMain ; 
 }  }  ]  ; 
meOverwrite =  [  { name :  function (  ) { drawText ( font2 , screenW (  )  / 2 -  ( 15 * 4 )  , screenH (  )  / 2 , "Overwrite save?" )  ; 
 return gvLangObj [ "menu-commons" ]  [ "no" ]  ;
  }  , func :  function (  ) { menu = meNewGame ; 
 }  , back :  function (  ) { menu = meNewGame ; 
 }  }  ,  { name :  function (  ) {  return gvLangObj [ "menu-commons" ]  [ "yes" ]  ;
  }  , func :  function (  ) { newGame ( game . file )  ; 
 }  }  ]  ; 
meLoadGame =  [  ]  ; 



}; 
