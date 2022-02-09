import React, { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import es from "date-fns/locale/es";
import "react-datepicker/dist/react-datepicker.css";
import FiestaForm from "./FiestaForm";
registerLocale("es", es);

const Party = () => {
  let tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const [startDate, setStartDate] = useState(tomorrow);

  const onDatePick = async (date) => {
    setStartDate(date);
  };

  return (
    <div className="bg-dark text-center">
      <DatePicker
        selected={startDate}
        onChange={(date) => onDatePick(date)}
        minDate={tomorrow}
        locale="es"
        withPortal
        dateFormat="MMMM d, yyyy"
      />
      <FiestaForm fecha={startDate} />
    </div>
  );
};

export default Party;
