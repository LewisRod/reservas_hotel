import { useState, useEffect } from "react";
import { getReserva,deleteReserva } from "../services/reservaService";
import ReservaForm from "../components/ReservaForm";

function Reserva() {
    const [reservas, setReservas] = useState([])
    
    async function loadReserva() {
        const data = await getReserva()
        setReservas(data)
    }

    useEffect(() => {
        loadReserva()
    }, [])

    async function handleDelete(id) {
        const data = await deleteReserva(id)
        setReservas(data)
        loadReserva()
    }

    return (
        <div>
            <h1>RESERVAS</h1>

            <ReservaForm onSave={loadReserva}/>
            {reservas.map((reserva) => (
                <div key={reserva.id}>
                    <h2>{reserva.cliente}</h2>
                    <br />
                    <p>Dias de estancia = {reserva.dias}</p>
                    <br />
                    <p>Habitacion = {reserva.habitacion}</p>
                    <br />
                    <p>Precio noche = {reserva.precio_por_noche}</p>
                    <br />
                    <p>Costo Hospedaje = {reserva.costo_hospedaje}</p>
                    <br />
                    <p>Impuesto = {reserva.impuesto}</p>
                    <br />
                    <p>Total pagado = {reserva.total}</p>
                    <br />
                    <p>{reserva.tipo_reserva}</p>
                    <br />
                    <button onClick={() => handleDelete(reserva.id)}>Eliminar Reserva</button>
                    <br />
                    <hr />
                </div>
            ))}
        </div>
    )
}
export default Reserva