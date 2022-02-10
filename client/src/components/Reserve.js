import React, { useEffect, useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import es from "date-fns/locale/es";
import "react-datepicker/dist/react-datepicker.css";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import axios from "axios";
import ReservaForm from "./ReservaForm";
import "../styles/css/estilos.css";
registerLocale("es", es);

const Reserve = () => {
  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 0), 14)
  );
  const [disponible, setDisponible] = useState(false);
  const [personas, setPersonas] = useState(2);
  const [turnoId, setTurnoId] = useState("");
  const [times, setTimes] = useState([]);

  useEffect(() => {
    const hora = new Date().getHours();
    const includedTimes = [];
    for (let i = 14; i <= 22; i += 2) {
      includedTimes.push(setHours(setMinutes(new Date(), 0), i));
    }
    setTimes(includedTimes);

    const uuid =
      startDate.getFullYear().toString() +
      ("0" + (startDate.getMonth() + 1)).slice(-2).toString() +
      ("0" + startDate.getDate()).slice(-2).toString() +
      startDate.getHours().toString() +
      "00";
    const check = async () => {
      try {
        const turno = await axios.post("/api/reserva/check", {
          turnoId: uuid,
          personas: personas,
        });
        console.log(turno.data.available);

        setDisponible(turno.data.available);
      } catch (err) {
        console.log(err);
      }
    };
    check();
  }, []);

  const onDatePick = async (date) => {
    setStartDate(date);
    const uuid =
      date.getFullYear().toString() +
      ("0" + (date.getMonth() + 1)).slice(-2).toString() +
      ("0" + date.getDate()).slice(-2).toString() +
      date.getHours().toString() +
      "00";
    console.log(uuid);
    setTurnoId(uuid);

    try {
      const turno = await axios.post("/api/reserva/check", {
        turnoId: uuid,
        personas: personas,
      });
      console.log(turno.data.available);

      setDisponible(turno.data.available);
    } catch (err) {
      console.log(err);
      setDisponible(false);
    }
  };

  const personasChange = async (e) => {
    e.preventDefault();
    const p = e.target.value;
    setPersonas(p);
    try {
      const turno = await axios.post("/api/reserva/check", {
        turnoId: turnoId,
        personas: p,
      });
      console.log(turno.data.available);

      setDisponible(turno.data.available);
    } catch (err) {
      console.log(err);
      setDisponible(false);
    }
  };
  return (
    <div className="text-center bg-dark reserve">
      <label className="text-primary bg-dark fila" htmlFor="number">
        N° Personas&nbsp;(mínimo 2, máximo 8)&nbsp;
      </label>
      <input
        className="text-primary"
        type={"number"}
        name="number"
        defaultValue={personas}
        min={"2"}
        max={"8"}
        onChange={(e) => personasChange(e)}
      />
      <DatePicker
        className="fila date-picker"
        selected={startDate}
        onChange={(date) => onDatePick(date)}
        minDate={new Date()}
        locale="es"
        withPortal
        showTimeSelect
        includeTimes={times}
        dateFormat="MMMM d, yyyy h:mm aa"
      />

      {disponible ? (
        <ReservaForm personas={personas} turnoId={turnoId} />
      ) : <h3 className="text-primary">Lo sentimos, no hay mesas disponibles. Por favor, intente otra fecha/hora.</h3>}
    </div>
  );
};

export default Reserve;
