
import "./header.css";
const Header = () => {
    return <header className="header">
        <div className="container">
            <div className="header__wrapper">
                <h2 className="header__title">
                    Where in the world?
                </h2>
                <button className="dark-mode__btn">
                    Dark Mode
                </button>
            </div>
        </div>
    </header>
}
export default Header;