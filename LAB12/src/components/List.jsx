export default function List() {
    const foodList = ['Суп (борщ)', 'Суши', 'Поке', 'Лапша (любая)', 'Салат (Наполеон) -_-'];
    const listItems = foodList.map((food, index) => <li key={index}>{food}</li>);

    return <ul>{listItems}</ul>;
}