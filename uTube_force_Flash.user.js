// ==UserScript==
// @name          uTube Force Flash
// @namespace     YT_flash_force
// @description   Force Flash player embed. Video settings are at the User Script Commands toolbar button submenu. If Flash does not load outright, reload the page. | Support inquiries should be opened here: github.com/juneyourtech/GM_YT_Flash/issues | Note, that the code might be buggy, and can cause conflicts with Flashblock. Acknowledgements to Alexander Nartov for providing the initial code, and to Victor Desfe and JAOOTPYKHA for improvements to it. This userscript requires that HTML5 playback be switched off in about:config . | Flash is a registered trademark of Adobe; YouTube that of Alphabet.
// @author        JuneYourTech | github.com/juneyourtech | and contributors
// @updateURL     https://raw.githubusercontent.com/juneyourtech/GM_YT_Flash/master/uTube_force_Flash.user.js
// @downloadURL   https://raw.githubusercontent.com/juneyourtech/GM_YT_Flash/master/uTube_force_Flash.user.js
// @version       0.4.2.1
// @encoding      utf-8
// @homepage      https://github.com/juneyourtech/GM_YT_Flash
// @supportURL    https://github.com/juneyourtech/GM_YT_Flash/issues
// @include       *.youtube.com/watch*
// @grant         GM_addStyle
// @grant         GM_getValue
// @grant         GM_setValue
// @grant         GM_registerMenuCommand
// @run-at        document-end
// ==/UserScript==
// Notes:
//   * is a wildcard character
//   .tld is magic that matches all top-level domains (e.g. .com, .co.uk, .us, etc.)
/* ____80_character_separator________________________________________________ */

/* 28.07.2017: Code to enable Flash Player, with huge thanks to 
   Alexander Nartov for the bulk of the code, and Victor Desfe for the 
   showinfo/autoplay line.
   Additional credits: JAOOTPYKHA for fixing height/width issues. 
   • Errata: Make sure you have HTML5 switched off for this to work. */

/* Menu commands, autoplay and video quality settings added on 03.08.2017. */
GM_registerMenuCommand('240p', vid_quality_small);
GM_registerMenuCommand('360p', vid_quality_medium);
GM_registerMenuCommand('480p', vid_quality_large);
GM_registerMenuCommand('720p', vid_quality_hd);
GM_registerMenuCommand('1080p', vid_quality_fullhd);
GM_registerMenuCommand('High Res', vid_quality_highres);
GM_registerMenuCommand('Default quality', vid_quality_default);
GM_registerMenuCommand('Autoplay ON', autoplay_on);
GM_registerMenuCommand('Autoplay OFF', autoplay_off);
GM_registerMenuCommand('Playlist ACTIVE', playlist_on);
GM_registerMenuCommand('Playlist INACTIVE', playlist_off);

function vid_quality_small() {
   GM_setValue("video_quality", "small");
   }; /* 240p */

function vid_quality_medium() {
   GM_setValue("video_quality", "medium");
   }; /* 360p */

function vid_quality_large() {
   GM_setValue("video_quality", "large");
   }; /* 480p */

function vid_quality_hd() {
   GM_setValue("video_quality", "hd720");
   }; /* HD/720p */

function vid_quality_fullhd() {
   GM_setValue("video_quality", "hd1080");
   }; /* FullHD/1080p */

function vid_quality_highres() {
   GM_setValue("video_quality", "highres");
   }; /* High resolution | greater than 1080p */

function vid_quality_default() {
   GM_setValue("video_quality", "default");
   };

function autoplay_on() {
   GM_setValue("autoplay", "1");
   };

function autoplay_off() {
   GM_setValue("autoplay", "0");
   };

function playlist_on() {
   GM_setValue("playlist_state", "on");
   autoplay_on();
   };

function playlist_off() {
   GM_setValue("playlist_state", "off");
   autoplay_off();
   };

var v_autoplay = GM_getValue('autoplay','1');
var v_video_quality = GM_getValue('video_quality','default');
var v_playlist = GM_getValue('playlist_state','on');
/* GM_getValue here has two parameter values: 
   get value from storage; if none exists, use second one as default. */

window.setTimeout(function() {
   var embedFrame = document.createElement("iframe");
   
   embedFrame.src = location.href.replace(/watch\?(?:.*)v=([A-Za-z0-9_-]{11}).*/, "embed/$1");
/* The first inner parentheses group is a non-capturing group, and is not 
   included in '$1'.
   The first group is in place to match stringdata after '\?' and before 'v=', 
   if there is any.
 • The second parentheses group _is_ a capturing group, and remembers the 
   captured data into '$1', which is then included after 'embed/'. It captures 
   11 alphanumeric characters, including an underscore and a dash.
 • This method cannot be used for a simpe regexp match. */
   
   embedFrame.src = embedFrame.src + ('?showinfo=0&autoplay=' + v_autoplay + '&vq=' + v_video_quality);
   
   embedFrame.style = "width: 100%; height: 100%;";
   var player = document.getElementById("player-api");
   
   /* grab the current dimensions of the player */
   var wid = player.clientWidth;
   var hei = player.clientHeight;

/* Deletes content previously inside #player-api. 
   It's probably the most contentious part of the code, 
   and might be responsible for the 90% CPU use (single-core, 1.46 GHz). 
   Yet not removing it causes even higher CPU use. */
   player.innerHTML = "";
   
   /* set the embedded player's dimensions to proper size */
   embedFrame.style.height=hei+'px';
   embedFrame.style.width=wid+'px';
   
/* Replacement code; contains the combined contents of the embedFrame variable. */
   player.appendChild(embedFrame);

/* Disables SPF (per Alexander Nartov). */
   unsafeWindow.spf.dispose();
},
1000);
/* setTimeout sets a delay until the function loads.
   1000 = 1 second
   3000 = 3 seconds, etc. */

/* 06.08.2017 */
function notice(message) {
   var divver = document.createElement("div");
   divver.style = 'display:block; width:100%; margin-right:1px; background-color:#1A1A1A; font-size:8pt; color:#B8B8B8;';
   divver.innerHTML = message;
   
   var appender = document.getElementById('watch7-speedyg-area');
   appender.innerHTML = "";
   appender.appendChild(divver);
   };

function jump_to_next() {
   /* get next video's URL */
   var nextvid = document.getElementsByClassName('currently-playing')[0].nextElementSibling.getElementsByTagName('a')[0].getAttribute('href');

   /* msg here */
   notice('Moving to next playlist item within 10 seconds from now...');
   
   window.setTimeout(function() {
      window.location.href = nextvid;
      },10000);
   };

function playlist_active() {
   /* playlist URL with video screen contains 'index'; search for that */
   var index_in_playlist = new RegExp(/index/);
   if (window.location.search.match(index_in_playlist)) {
      var flash_variables = document.getElementsByTagName('iframe')[0].contentWindow.document.getElementsByTagName('embed')[0].getAttribute('flashvars');
      var video_length = flash_variables.replace(/(?:.*)length_seconds=(\d+).*/, "$1");
      
      window.setTimeout(function() {jump_to_next();
      },((video_length * 1000) + 10000)); /* 1000 = 1 sec; 1000 x no. of seconds. +10 seconds to give some leeway. */
      };
   };

window.setTimeout(function() {
   var index_in_playlist = new RegExp(/index/);
   if (window.location.search.match(index_in_playlist)) {
      //Checks if playlist is active or not.
      //Double equals are mandatory here.
      if (v_playlist == 'on') {playlist_active();}
      else if (v_playlist == 'off') {return false;}
      };
   },7000);
/* The original 3-second delay is not enough, beacause the function then starts 
   well before all the elements have been loaded. The seven-second delay gives 
   some breathing time to gather all the information from DOM. */

/* 29.07.2017: disable static in player area (somewhat resource-intensive) */
GM_addStyle("DIV.ytp-error CANVAS.ytp-tv-static {display:none;}");
