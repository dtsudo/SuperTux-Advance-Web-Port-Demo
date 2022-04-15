if (!window.superTuxAdvanceWebVersion) window.superTuxAdvanceWebVersion = {}; 
if (!window.superTuxAdvanceWebVersion.squirrelFiles) window.superTuxAdvanceWebVersion.squirrelFiles = {}; 

window.superTuxAdvanceWebVersion.squirrelFiles['tux.brx'] = function () { 


isWebBrowserVersion = true ; 
donut ( "src/util.nut" )  ; 
donut ( "src/text.nut" )  ; 
donut ( "src/shapes.nut" )  ; 
donut ( "src/tilemap.nut" )  ; 
donut ( "src/assets.nut" )  ; 
donut ( "src/global.nut" )  ; 
donut ( "src/controls.nut" )  ; 
donut ( "src/menus.nut" )  ; 
donut ( "src/gmmain.nut" )  ; 
donut ( "src/gmplay.nut" )  ; 
donut ( "src/gmpause.nut" )  ; 
donut ( "src/physactor.nut" )  ; 
donut ( "src/tux.nut" )  ; 
donut ( "src/konqi.nut" )  ; 
donut ( "src/items.nut" )  ; 
donut ( "src/effects.nut" )  ; 
donut ( "src/enemies.nut" )  ; 
donut ( "src/bosses.nut" )  ; 
donut ( "src/debug.nut" )  ; 
donut ( "src/bg.nut" )  ; 
donut ( "src/trigger.nut" )  ; 
donut ( "src/water.nut" )  ; 
donut ( "src/levelend.nut" )  ; 
donut ( "src/platforms.nut" )  ; 
donut ( "src/blocks.nut" )  ; 
donut ( "src/weapons.nut" )  ; 
donut ( "src/overworld.nut" )  ; 
donut ( "src/secret.nut" )  ; 
donut ( "src/npc.nut" )  ; 
donut ( "src/languagemenu.nut" )  ; 
donut ( "src/contriblevels.nut" )  ; 
donut ( "src/save.nut" )  ; 
donut ( "src/zlist.nut" )  ; 
donut ( "src/pickchar.nut" )  ; 
donut ( "src/weather.nut" )  ; 
donut ( "src/light.nut" )  ; 
donut ( "src/credits.nut" )  ; 
donut ( "src/cursor.nut" )  ; 
donut ( "src/shop.nut" )  ; 
 var modlist = lsdir ( "mods" )  ;
  for (  var i = 0 ;
 i < modlist . len (  )  ; i ++  )  if ( modlist [ i ]  != "." && modlist [ i ]  != ".." ) donut ( "mods/" + modlist [ i ]  )  ; 
 
  if ( fileExists ( "config.json" )  ) config = mergeTable ( config , jsonRead ( fileRead ( "config.json" )  )  )  ; 
 
 setSoundVolume ( config . soundVolume )  ; 
setMusicVolume ( config . musicVolume )  ; 
 var disres = displayW (  )  . tofloat (  )  / displayH (  )  . tofloat (  )  ;
  var reschoice = 0 ;
  var aspects =  [  ( 16.0 / 9.0 )  ,  ( 5.0 / 3.0 )  ,  ( 4.0 / 3.0 )  ]  ;
  var resdiff = 100 ;
  for (  var i = 0 ;
 i < aspects . len (  )  ; i ++  )  { 
  if ( abs ( disres - aspects [ i ]  )  < resdiff )  { 
 resdiff = abs ( disres - aspects [ i ]  )  ; 
reschoice = i ; 
 } 
  
  } 
  switch ( reschoice )  {  case 0 : setResolution ( 424 , 240 )  ; 
 break ;  case 1 : setResolution ( 400 , 240 )  ; 
 break ;  case 2 : setResolution ( 320 , 240 )  ; 
 break ;  default : setResolution ( 320 , 240 )  ; 
 break ;  } gvTextW = floor ( screenW (  )  / 6 )  - 1 ; 
 if ( config . fullscreen ) toggleFullscreen (  )  ; 
 
  if ( config . usefilter ) setScalingFilter ( 1 )  ; 
 
 gvScreen = newTexture ( screenW (  )  , screenH (  )  )  ; 
bgPause = newTexture ( screenW (  )  , screenH (  )  )  ; 
setScalingFilter ( 0 )  ; 
gvPlayScreen = newTexture ( screenW (  )  , screenH (  )  )  ; 
gvLightScreen = newTexture ( screenW (  )  , screenH (  )  )  ; 
textureSetBlendMode ( gvLightScreen , bm_sub )  ; 
setWindowTitle ( "SuperTux Advance" )  ; 
setWindowIcon ( "icon.png" )  ; 
tileSearchDir . push ( "res" )  ; 
tileSearchDir . push ( "res/gfx" )  ; 
tileSearchDir . push ( "res/map" )  ; 
tileSearchDir . push ( "res/snd" )  ; 
setFPS ( 60 )  ; 
gvLangObj = jsonRead ( fileRead ( "lang/en.json" )  )  ; 
gvLangObj = mergeTable ( gvLangObj , jsonRead ( fileRead ( "lang/" + config . lang + ".json" )  )  )  ; 
strDifficulty =  [ gvLangObj [ "difficulty-levels" ]  [ "easy" ]  , gvLangObj [ "difficulty-levels" ]  [ "normal" ]  , gvLangObj [ "difficulty-levels" ]  [ "hard" ]  , gvLangObj [ "difficulty-levels" ]  [ "super" ]  ]  ; 
print ( "Launching SuperTux Advance v." + gvVersion + "..." )  ; 
startMain (  )  ; 
menu = meMain ; 
config . playerChar = "Tux" ; 
 if (  ! isWebBrowserVersion )  { 
  while (  ! getQuit (  )  &&  ! gvQuit )  { 
  if ( keyPress ( k_f11 )  )  { 
 toggleFullscreen (  )  ; 
config . fullscreen =  ! config . fullscreen ; 
fileWrite ( "config.json" , jsonWrite ( config )  )  ; 
 } 
  
  if ( getcon ( "pause" , "press" )  && levelEndRunner == 0 && gvGameMode != gmMain ) togglePause (  )  ; 
 
 gvGameMode (  )  ; 
 if ( keyPress ( k_tick )  ) debugConsole (  )  ; 
 
 update (  )  ; 
 } 
  
  } 
  
 


}; 
