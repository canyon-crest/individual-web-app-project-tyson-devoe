function Message(props) {
    return (
        <div>
            <h1>{props.greeting}</h1>
            <p>From: {props.name}</p>
        </div>
    );
}

export default Message;