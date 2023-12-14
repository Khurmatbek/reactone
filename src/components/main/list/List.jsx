import "./list.css";
import Item from "./cards/Cards";

const array = Array(8).fill(1);
const List = () => {
    return <ul className="list">
        {array.map(item => <Item></Item>)}
    </ul>
}
export default List;