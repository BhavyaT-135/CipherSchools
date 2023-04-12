import "./toggle.css";
import Sun from "../../assets/sun.png";
import Moon from "../../assets/moon.png";


const Toggle = () => {

    return (
        <div className="t">
            <img src={Sun} alt="" className="t-icon" />
            <img src={Moon} alt="" className="t-icon" />
            <div className="t-button">
            </div>
        </div>
    )
}

export default Toggle;