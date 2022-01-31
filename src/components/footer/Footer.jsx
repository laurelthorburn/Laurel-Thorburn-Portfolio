import './footer.css'
import LinkedIn from '../../media/linkedin.png';
import Github from '../../media/github.png';
import Youtube from '../../media/youtube.png';


export const Footer = () => {
  return (
  <div className="foot">
      <div className="footIcons">
        <a href="https://github.com/laurelthorburn" target="_blank">
          <img src={Github} alt="Github Icon" className="footImg1 ghLogo" />
        </a>
        <a href="https://www.linkedin.com/in/laurel-thorburn-651592219/" target="_blank">
          <img src={LinkedIn} alt="LinkedIn Icon" className="footImg imgBorder" />
        </a>
        <a href="https://www.youtube.com/channel/UCFj06f9ol1b55YGUuLwSU_Q" target="_blank">
          <img src={Youtube} alt="Youtube Icon" className="footImg imgBorder" />
        </a>
      </div>

  </div>
  )
};


export default Footer
