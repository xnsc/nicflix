import {ReactElement} from "react";
import nicflixLogo from './images/nicflix-logo.png'

const Landing = (): ReactElement => {
    return (
        <div>
            <img src={nicflixLogo} alt="nicflix-logo"></img>
        </div>
    );
}

export default Landing;