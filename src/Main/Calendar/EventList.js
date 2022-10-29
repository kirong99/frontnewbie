const EventList = ({title,date,setValue}) => {
    console.log({title,date});
    console.log({setValue})
    function send() {
        setValue({title,date})
    }
    return(
        <div>
            <button onClick={send}>전송</button>
        </div>
    )
}

export default EventList