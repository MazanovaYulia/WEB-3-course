export default function Bridge(props) {
    const style = {
        color: '#000000'
    }

    return (
        <h2 style={style}>Задание № {props.taskList.join(', ')}</h2>
    );
}