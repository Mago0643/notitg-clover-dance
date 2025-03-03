This thing can be deleted anytime, if devs doesn't want to see this.

and nobody will not know this even existed...

# What is this?
This is NotITG mod for appearing clover dance during gameplay.

Clover is placed on overlay, so they does not affected by Shaders, ActorFrameTextures.

*(But can be affected by using [DISPLAY:ShaderFuck](https://craftedcart.gitlab.io/notitg_docs/lua_api/rage_display.html#RageDisplay.ShaderFuck))*

# How to Install
**This is not a theme!** This mod is an overlay that must be applied to an existing theme.

1. Click the green `Code` button at the top, then select `Download ZIP` to download the files.
2. Navigate to the NotITG theme folder you want to modify. (Example: `NotITG/Themes/simply-love-oat-fork-master`)
3. Extract the `Screens` folder into the theme folder.
Open `default.xml` inside the `Screens/Overlay` folder and add the following code above `</children>`:
```xml
<Layer File = "Overlay" />
```

Here's an example:
```xml
<ActorFrame 
    OnCommand="effectperiod,0/1;luaeffect,Update"
    UpdateCommand="%function(self) stitch('lua.event').Update(self) end"
    OverlayReadyMessageCommand="%function(self) stitch.RequireEnv('lua.setup', {self = self}) end" >
    <children>
        <!-- Feel free to add more overlays here -->
        <Layer File="Aft" />
		<Layer File="Death" />
        <Layer File="Console"/>
        <Layer File="ViewGC" />
        <Layer File="Overlay" /> <! -- Add it like this --> 
    </children>
</ActorFrame>
```

5. Go to the `Death` folder in the current directory, open `default.xml`, and add the following code above `</children></ActorFrame>`:

```xml
<Layer File = "CloverDeath" />
```

Here's an example (this can be different with your file):
```xml
<ActorFrame Condition="FUCK_EXE" OverlayReadyMessageCommand="%function(self) stitch('lua.death').Ready(self) end" ><children>
	<Layer File="Go2Brazil" />
	<Layer File="YouDied" />
	<Layer File="Wasted" />
	<Layer File="Fortnite" />
	<Layer File="FortniteCover" />
	<Layer File="SSBMGame" />
	<Layer File="CloverDeath" /> <!-- Like this --> 
</children></ActorFrame>
```

That's it! Now launch the game and enjoy!

List of Files After Installation:

```
Screens/
└── Overlay/
    ├── Overlay/
    │   ├── default.xml
    │   └── bloom.frag
    └── Death/
        └── CloverDeath/
            ├── default.xml
            └── ok.gif
```

# Info
You you can set FailOverlay to Clover dead *(yes, really)* by pressing Action5 *(default is 5, not numpad)* Button in Main Menu.

If you're making modfiles, and don't want to clover dances at your file, Just call [`MESSAGEMAN:Broadcast`](https://craftedcart.gitlab.io/notitg_docs/lua_api/message_manager.html#MessageManager.Broadcast)`('CloverDead')`, It hides them.

## CREDITS
[Undertale Yellow](https://gamejolt.com/games/UndertaleYellow/136925) by Team Undertale Yellow

[NotITG](https://www.noti.tg) by Taro

Me - code