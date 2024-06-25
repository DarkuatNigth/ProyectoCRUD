import React, { useEffect, useState } from 'react'
import ClienteService from '../services/ClienteService';
import { Link } from 'react-router-dom';

function ListClienteComponent() {
    const  [clientes,setClientes] = useState([]);
    
    useEffect(() => {
        listarClientes();
    },[])

    const listarClientes = () => {
        ClienteService.getAllClientes().then(response =>
            {
                setClientes(response.data);
                console.log(response.data);
            }
        ).catch(error => {
            console.log(error);
        })
    }

    const deleteCliente = (clienteId) =>
        {
            ClienteService.deleteCliente(clienteId).then((response)=>{
                listarClientes();
            }).catch(error => {
                console.log(error);
            })
        }
  return (
        <div className='container'>
            <h2 className='text-center'>
                Lista de Empleados
                </h2>
                <Link to='/add-cliente' className='btn btn-primary mb-2'>
                Agregar Cliente</Link>
                <table className='table table-bordered table striped'>
                    <thead>
                        <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Correo Electronico</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            clientes.map(
                                cliente => 
                                    <tr key={cliente.id}>
                                        <td>{cliente.id}</td>
                                        <td>{cliente.strNombre}</td>
                                        <td>{cliente.strApellido}</td>
                                        <td>{cliente.strCorreoElectronico}</td>
                                        <td>{cliente.strEstado}</td>
                                        <td>
                                        <Link className='btn btn-info' to={`/edit-cliente/${cliente.id}`}>Actualizar</Link>
                                        <button style={{ marginLeft: "10px"}}
                                        className='btn btn-danger' onClick={() => deleteCliente(cliente.id)}>Eliminar</button>
                                        </td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            
        </div>
  )
}

export default ListClienteComponent