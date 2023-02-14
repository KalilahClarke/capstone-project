//Dependencies
import Calendar from "react-calendar";

//CSS Import
import "./CalendarView.css";
import "react-calendar/dist/Calendar.css";

const CalendarView = ({ date, setDate }) => {

  
  return (
    <div className="calendar">
      <Calendar id="react-calendar" onChange={setDate} value={date} />
    </div>
  );
};

export default CalendarView;
