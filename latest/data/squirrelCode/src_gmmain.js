if (!window.superTuxAdvanceWebVersion) window.superTuxAdvanceWebVersion = {}; 
if (!window.superTuxAdvanceWebVersion.squirrelFiles) window.superTuxAdvanceWebVersion.squirrelFiles = {}; 

window.superTuxAdvanceWebVersion.squirrelFiles['src/gmmain.nut'] = function () { 


startMain =  function (  ) { stopMusic (  )  ; 
songPlay ( musTheme )  ; 
game = createNewGameObject (  )  ; 
drawBG = dbgUnderwater ; 
gvGameMode = gmMain ; 
actor =  {  }  ; 
menu = meMain ; 
autocon =  { up : false , down : false , left : false , right : false }  ; 
 }  ; 
gmMain =  function (  ) { setDrawTarget ( gvScreen )  ; 
drawBG (  )  ; 
drawSprite ( sprTitle , 0 , screenW (  )  / 2 , 16 )  ; 
drawDebug (  )  ; 
drawText ( fontC , 0 , screenH (  )  - 8 , "Brux GDK " + bruxVersion (  )  + " - STA v" + gvVersion + " - " + getOS (  )  )  ; 
textMenu (  )  ; 
resetDrawTarget (  )  ; 
drawImage ( gvScreen , 0 , 0 )  ; 
 }  ; 



}; 
