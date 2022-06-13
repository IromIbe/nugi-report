import React, { useState } from "react";
import { Calendar } from "react-calendar";
// import "./calendar.css";
// import { ResponsiveCalendar } from "react-responsive-calendar";

function ProjectCalendar() {
  const [value, onChange] = useState(new Date());
  return (
    <div>
      {/* <ResponsiveCalendar /> */}
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}

export default ProjectCalendar;
