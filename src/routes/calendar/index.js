import React from "react";
import {Calendar, momentLocalizer} from 'react-big-calendar'
import moment from 'moment'
import events from "./events";

const localizer = momentLocalizer(moment);

const CalendarPage = (props) => {
  return (
    <div className="gx-main-content">
      <div className="gx-rbc-calendar">
        <h3 className="callout">
          Click an event to see more info, or
          drag the mouse over the calendar to select a date/time range.
        </h3>
        <Calendar
          localizer={localizer}
          {...props}
          events={events}
          step={60}
          defaultDate={new Date(2015, 3, 1)}/>
      </div>
    </div>
  )
};

export default CalendarPage;
