import './footer.css'
import Phone from '../../media/phone.png';
import Location from '../../media/needle.png';
import Email from '../../media/letter.png';
import LinkedIn from '../../media/linkedin.png';
import Github from '../../media/github.png';


export const Footer = () => {
  return (
  <div className="foot">
      <div className="footIcons">
        <img src={Github} alt="Github Icon" className="footImg" />
        <img src={LinkedIn} alt="LinkedIn Icon" className="footImg" />
        <img src={Github} alt="Instagram Icon" className="footImg" />
      </div>

  </div>
  )
};


export default Footer
