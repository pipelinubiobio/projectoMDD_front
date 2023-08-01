import React, { useEffect, useState } from "react";
import { getAllImplementos, buscarImplemento, eliminarImplemento } from "./api/implementos";
import FormImplemento from "./formImplemento";

const Implementos = () => {
    const [implementos, setImplementos] = useState([]);
    const [estado, setEstado] = useState("");

    useEffect(() => {
        getAllImplementos().then((data) => setImplementos(data));
    }, []);

    useEffect(() => {
        if (estado === "") {
            getAllImplementos().then((data) => setImplementos(data));
        } else {
            buscarImplemento(estado).then((data) => setImplementos(data));
        }
    }, [estado]);
    
    return (
        <div>
        <h1>Implementos</h1>
        <h2>Crear implemento</h2>
        <div>
            <FormImplemento
                onSave={()=> getAllImplementos().then((data) => setImplementos(data))}
            />
        </div>
        <h2>Listado de implementos</h2>
        <div>
            Estado
            <select onChange={(e) => setEstado(e.target.value)}>
                <option value="">Todos</option>
                <option value="Operativo">Operativo</option>
                <option value="Inoperativo">No operativo</option>
            </select>
        </div>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>N° Serie</th>
                    <th>Estado</th>
                    <th>Descripción</th>
                    <th />
                </tr>
            </thead>
            <tbody>
                {implementos.map((implemento) => (
                    <tr key={implemento._id}>
                        <td>{implemento._id}</td>
                        <td>{implemento.numeroSerie}</td>
                        <td>{implemento.estado}</td>
                        <td>{implemento.descripcion}</td>
                        <td>
                            <button
                                onClick={() => {
                                    eliminarImplemento(implemento.numeroSerie).then(() => {
                                        getAllImplementos().then((data) => setImplementos(data));
                                    });
                                }}
                            >
                                Eliminar
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    );
    }

export default Implementos;