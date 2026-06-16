import { use, useState } from 'react';
import { createReserva } from '../services/reservaService';


function ReservaForm({onSave}) {
    const [cliente, setCliente] = useState("")
    const [dias, setDias] = useState("")
    const [habitacion, setHabitacion] = useState("")
    const [precio_por_noche, setPrecioNoche] = useState("")
    
    const costo_hospedaje = dias * precio_por_noche
    const impuesto = costo_hospedaje * 0.10
    const total = costo_hospedaje + impuesto
    const tipo_reserva = total > 50000 ? "Suite exclusiva" : "Suite sencilla"

    async function handleSave() {
        
        try {
            await createReserva({
                cliente,
                dias,
                habitacion,
                precio_por_noche,
                costo_hospedaje,
                impuesto,
                total,
                tipo_reserva
            })
            onSave()
            setCliente("")
            setDias("")
            setHabitacion("")
            setPrecioNoche("")
            
        } catch (error) {
            console.log(error)
        }
    }


    return (
      <div>
        <label>Cliente</label>
        <input
          type="text"
          placeholder="Nombre del cliente"
          value={cliente}
          onChange={(e) => setCliente(e.target.value)}
        />
        <br />

        <label>Dias</label>
        <input
          type="number"
          placeholder="Dias que reservara"
          value={dias}
          onChange={(e) => setDias(e.target.value)}
        />
        <br />

        <label>Habitacion</label>
        <input
          type="number"
          placeholder="Ej 501"
          value={habitacion}
          onChange={(e) => setHabitacion(e.target.value)}
        />
        <br />

        <label>Precio noche</label>
        <input
          type="number"
          placeholder="Precio de la suite"
          value={precio_por_noche}
          onChange={(e) => setPrecioNoche(e.target.value)}
            />
            <br />

            <p>Costo Hospedaje = {costo_hospedaje}  </p>
            <p>  {tipo_reserva}  </p>
            <p>  Impuesto = {impuesto}</p>
            <p>  Total a pagar = {total}</p>
            <br />
            <button onClick={handleSave}>Reservar</button>
            <br />
            <hr />
      </div>
    );
}

export default ReservaForm