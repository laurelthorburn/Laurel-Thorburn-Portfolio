import { useContext } from 'react';
import './toggle.css';
import { ThemeContext } from '../../context';

const Toggle = (props) => {

    const theme = useContext(ThemeContext)
    const handleClick = () => {
        theme.dispatch({type: "TOGGLE"})
    }
    return (
    <div className ="toggle">
        <img src="" alt="" />
        <img src="" alt="" />
        <div className="toggleButton" onCLick={handleClick}></div>
    </div>
    );
};



export default Toggle
