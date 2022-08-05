import yelpcampPic from "../Pictures/yelpcampPic.png";
import MUDPic from "../Pictures/MUDPic.png";
import PRISMPic from "../Pictures/PRISMPic.jpg";
import SitePic from "../Pictures/SitePic.png";

const ProjectsData = [
     {
          projectName: "MarmaniosCodes",
          projectPicture: SitePic,
          projectURL: "www.marmanios.codes",
          projectText: 
          <p>
               This is the site you're on right now, also known as marmanios codes. 
               This site was handmade using <b>React and various react hooks and libraries</b>.
               If you're interested, an old version of the site can be found through the following <a target="_blank" rel="noreferrer" href="https://github.com/marmanios/mageds_site_old">link</a>
          </p>
     },
     {
          projectName: "YelpCamp",
          projectPicture: yelpcampPic,
          projectURL: "https://github.com/marmanios/YelpCamp",
          projectText:
          <p>
               A campground sharing site for those passionate about camping to share, browse, and review campground locations around the world.
          </p>
     },
     {
          projectName: "PRISM Game",
          projectPicture: PRISMPic,
          projectURL: "https://github.com/marmanios/PRISM-GAME",
          projectText: 
     <p>
          PRISM is a PyGame that is centered around young Dylan Park, a boy lost in an arcade.
          In PRISM, the player has to complete a sequence of minigames in order to escape the arcade and find his mom again.
          The game features its own <a target="_blank" rel="noreferrer" href="https://sites.google.com/view/foogames">website</a> and <a target="_blank" rel="noreferrer" href="https://github.com/marmanios/PRISM-GAME">github page</a> with daily dev blogs and trailers.
          Enjoy 5 minigames, an original soundtrack, saving, and a high score counter courtesy of SQLLite.
     </p>
     },
     {
          projectName: "McMaster Unity Developers Discord Bot",
          projectPicture: MUDPic,
          projectURL: "https://github.com/marmanios/Unity-Developers-Bot",
          projectText: 
     <p>
          The McMaster Unity Developers bot (or MUD Bot) was designed to automate tasks within the  club discord.
          The bot automated the assignment of discord roles and created voice channels upon demond.
          Additionally, the bot displayed the latest news article from McMaster's news site and sent it to the discord chat.
          All of this was accomplished using Discord.Py, beautifulSoup4 python webscraping library, and SQLLite.
     </p>
     },
    ]

export default ProjectsData;