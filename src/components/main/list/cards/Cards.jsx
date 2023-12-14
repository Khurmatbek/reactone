
import "./cards.css";
import IMG from "../../../../assets/german.png";
const Item = () => {
    return <li className="item">
        <img className="image" width={267} height={160} src={IMG} alt="country image for germany" />
        <div className="item-wrapper">
            <h3 className="name">Germany</h3>
            <p className="desc"><strong className="bold-desc">Population:</strong> 81,770,900</p>
            <p className="desc"><strong className="bold-desc">Region:</strong>Europe</p>
            <p className="desc"><strong className="bold-desc">Capital:</strong>Berlin</p>
        </div>
    </li>
}


export default Item;