if (!window.superTuxAdvanceWebVersion) window.superTuxAdvanceWebVersion = {}; 
if (!window.superTuxAdvanceWebVersion.squirrelFiles) window.superTuxAdvanceWebVersion.squirrelFiles = {}; 

window.superTuxAdvanceWebVersion.squirrelFiles['src/gmmain.nut'] = function () { 


startMain =  function (  ) { stopMusic (  )  ; 
songPlay ( musTheme )  ; 
game = clone ( gameDefault )  ; 
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
drawText ( font , 0 , screenH (  )  - 8 , "Brux GDK " + bruxVersion (  )  + " - STA v" + gvVersion )  ; 
textMenu (  )  ; 
resetDrawTarget (  )  ; 
drawImage ( gvScreen , 0 , 0 )  ; 
 }  ; 



}; 
