import { getDate, parseISO } from "date-fns";

const events=[
    { title: 'event1', start: '2022-10-12'},
    { title: 'event2', start: getDate(parseISO("YEAR-MONTH-13T12:00:00"))}
  ]

function Date(dayString){
    const today = new Date();
    const year = today.getFullYear().toString();
    let month = (today.getMonth + 1).toString();

    if(month.length === 1){
        month = "0" + month
    }

    return (
        dayString.replace("YEAR",year).replace("MONTH",month)
    );
}

export default events;