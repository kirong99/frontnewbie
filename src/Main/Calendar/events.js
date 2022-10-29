import EventList from "./EventList";

const Events = ( { dataList } ) =>{
  return(
    <div>
      {dataList && dataList.map((it,idx)=>(
        <EventList key={idx} {...it}/>
      ))}
    </div>
  )
}

export default Events;