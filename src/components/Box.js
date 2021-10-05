function Box(props) {
    return(
        <div className="box">
            <img src={props.img} className="finderfoto" alt=""/>
            <h2 className="main-title">{props.title}</h2>
            <span className="main-text">{props.text}</span>
            <div className="numbers">
                <p>{props.boards}</p>
                <p>{props.tasks}</p>
            </div>
            <div className="test">
                <p>Boards</p>
                <p>Tasks</p>
            </div>
            <p className="fot-text">I task overdue!</p>
        </div>
    )
}

export default Box;