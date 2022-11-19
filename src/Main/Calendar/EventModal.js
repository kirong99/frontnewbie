import EventItem from "./EventItem";

const EventModal = ({ eventList,onEdit,onRemove }) => {
    console.log(eventList)
    return (
        <div className="EventList">
            <h2>일정 리스트</h2>
            <div className="EventItemBox">
                {eventList.map((it,idx)=>(
                    <EventItem onEdit={onEdit} onRemove={onRemove} key={idx} {...it}/>
                ))}
            </div>
        </div>
    )
}



export default EventModal;