import EventItem from "./EventItem";

const EventModal = ({ eventList,onEdit,onRemove,setVisible }) => {
    console.log(eventList)
    const closeModal = () => {
        setVisible(false);
    };
    return (
        <div className="EventList">
            <h2>일정 리스트</h2>
            <button onClick={closeModal} style={{position: "relative",left: "13.5%" ,bottom: "25px", border: "none", background: "#fff", cursor:"pointer"}}>X</button>
            <div className="EventItemBox">
                {eventList && eventList.map((it,idx)=>(
                    <EventItem onEdit={onEdit} onRemove={onRemove} key={idx} {...it}/>
                ))}
            </div>
        </div>
    )
}



export default EventModal;