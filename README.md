# GM_YT_Flash
Force Flash on YouTube

This userscript is meant to force the Flash Player-based video player in YouTube, which recently pulled its own Flash-based player from main video pages in favour of HTML5.

Despite that, the Flash-based player is more stable and reliable in Firefox due to the NPAPI-based plugin working out of process, and Flash having excellent support for older hardware and operating systems, including people stuck with Windows XP.

With this userscript, YouTube should remain accessible to more people.

# Contents
1. Requirements
2. Errata
3. Acknowledgements
4. Legal


# 1. Requirements

   * Mozilla Firefox or another Gecko-based browser, including SeaMonkey, GNU IceCat, and Pale Moon.
   * Greasemonkey extension. Although this userscript might work on non-Gecko browsers with a similar extension, then I do not test with these.
   * HTML5 must be switched off in about:config.
   
   Set:
   
    · media.mp4.enabled to false
    · media.autoplay.enabled to false
    · media.webm.enabled to false 
   
   Optional:
   
    · media.ogg.enabled to false
    · media.wave.enabled to false
   
   Other possible extensions that may be of use:
   * YouTube Flash Player (version 1.8.0)

   This userscript has been successfully tested with Firefox 39.0.3.

   The use of this usercript is predicated on the assumption, that NoScript and an adblocker are present. I use these extensions, because my computer is about ten years old.

# 2. Errata

   * This userscript can be buggy.
   * It might conflict with the Flashblock extension, and/or those that are involved with YouTube, except YouTube Flash Player or a similar extension.
   * The Flash-based embed does not automatically advance from one playlist item to another. This is a known issue.
   * Because the userscript creates an embed, some YouTube videos won't play, as those are restricted from playing within embeds by the channel or copyright owner.

   Do consider, that the code provided in this userscript was always meant as a stopgap measure.

# 3. Acknowledgements

   To Alexander Nartov for providing the initial code, to Victor Desfe for bugfixes, and to JAOOTPYKHA for fixes relating to player window height and width.

# 4. Legal

   Flash is a registered trademark of Adobe. YouTube is a registered trademark of Alphabet. No copyright infringement (if any) is intended. This userscript has not been designed to block advertisements.
