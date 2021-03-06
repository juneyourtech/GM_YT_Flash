# GM_YT_Flash
Force Flash on YouTube

This userscript is meant to force the Flash Player-based video player in YouTube, which recently pulled its own Flash-based player from main video pages in favour of HTML5.

Despite that, the Flash-based player is more stable and reliable in Firefox due to the NPAPI-based plugin working out of process, and Flash having excellent support for older hardware and operating systems, including people stuck with Windows XP.

With this userscript, YouTube should remain accessible to more people.

# Contents
0. Installation
1. Requirements
2. Errata
3. Acknowledgements
4. Legal

# 0. Installation
   * You must already to have GreaseMonkey installed in Firefox.
   
     To install, browse to 
     https://github.com/juneyourtech/GM_YT_Flash/blob/master/uTube_force_Flash.user.js
     
     There, click on the Raw link/button. Further requirments are below, and should not be difficult.
     
     # 0.1 Menus and settings
     
     Settings can be changed through the User Script Commands submenu in the drop-down menu of the Greasemonkey toolbar button.
     
     Settings include video quality, Autoplay ON/OFF (video autostart), Playlist ACTIVE/INACTIVE. Playlist settings affect autoplay. The settings are stored in a separate Greasemonkey-related database file, and survive between sessions and profile cleanups. Settings take effect after reloading a video page, or browsing to a new video.

# 1. Requirements

   * Mozilla Firefox or another Gecko-based browser, including SeaMonkey, GNU IceCat, and Pale Moon.
   * Greasemonkey extension. Although this userscript might work on non-Gecko browsers with a similar extension, then I do not test with these.
   * HTML5 must be switched off in about:config —
   
   Toggle by doubleclicking:
   
    · media.mp4.enabled to false
    · media.autoplay.enabled to false
    · media.webm.enabled to false 
   
   Optional:
   
    · media.ogg.enabled to false
    · media.wave.enabled to false
   
   Extensions that may be of use:
   * YouTube Flash Player (version 1.8.0)
   * An adblocker to block in-video ads. This is useful with playlists, because jumping to the next video is timed according to actual video length, and time spent on video advertisements is not accounted for. If you so can, do support your favourite youtubers and creators.

   This userscript has been successfully tested with Firefox 39.0.3.

   The use of this usercript is predicated on the assumption, that NoScript and an adblocker are present. I use these extensions, because my computer is about ten years old.

# 2. Errata and considerations

   * This userscript can be buggy.
   * If the Flash-based player does not load outright, reload the page. You might need to do this every now and then.
   * It might conflict with the Flashblock extension, and/or those that are involved with YouTube, except YouTube Flash Player or a similar extension.
   * As of 06.08.2017, the playlist items now automatically advance from one to another in dark-coloured playlists. These should include all user-created playlists. This does not work in randomised playlists with YouTube's Autoplay function. That's still a known issue.
   * Because the userscript creates an embed, some YouTube videos won't play, as those are restricted by the channel or copyright owner from playing from within embeds. This includes videos administered by Vevo.
   * Embeds outside YouTube video watching pages (other sites that use YouTube embeds) do not show, as the userscript is currently limited only to certain URLs. Naturally, embeds should invoke the Flash-based player anyway.

   Do consider, that the code provided in this userscript was always meant as a stopgap measure.

# 3. Acknowledgements

   To Alexander Nartov for providing the initial code, to Victor Desfe for bugfixes, and to JAOOTPYKHA for fixes relating to player window height and width.

# 4. Legal

   Flash is a registered trademark of Adobe. YouTube is a registered trademark of Alphabet. Vevo is a registered trademark of Vevo, LLC. No copyright infringement (if any) is intended. This userscript has not been designed to block advertisements.
