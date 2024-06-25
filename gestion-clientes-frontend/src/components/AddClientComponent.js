import React, { useEffect, useState } from 'react'
import ClienteService from '../services/ClienteService';
import { Link, useNavigate, useParams } from 'react-router-dom';

function AddClientComponent() {

    const [cliente, setCliente] = useState({
        intId: 0,
        strNombre: '', 
        strApellido: '',
        strCorreoElectronico: '',
        strEstado: null,
    });
    const navigate = useNavigate();
    const {id} = useParams();
    function cambiarNombre(e)
    {
        setCliente((valores) => ({
          ...valores,
          strNombre:e.target.value
        })) 
    }
    function cambiarApellido(e)
    {
        setCliente((valores) => ({
          ...valores,
          strApellido:e.target.value
        })) 
    }
    function cambiarCorreo(e)
    {
        setCliente((valores) => ({
          ...valores,
          strCorreoElectronico:e.target.value
        })) 
    }
    const saveOrUpdateCliente = (e) =>{
        e.preventDefault();
        
        const objCliente = {
            strNombre: e.target.nombre.value, 
            strApellido: e.target.apellido.value,
            strCorreoElectronico: e.target.correo.value};

        if(id)
        {
            ClienteService.updateCliente(id,cliente).then((response)=> 
                {
                    console.log(response.data);
                    navigate('/clientes');
                }).catch(error =>{
                    console.log(error);
                })
        }
        else 
        {
            ClienteService.createCliente(cliente).then((response)=> 
                {
                    console.log(response.data);
                    navigate('/clientes');
                }).catch(error =>{
                    console.log(error);
                })
        }            
    }

    
    const title =() =>{
        if(id)
        {
            return <h2 className='text-center'> Actualizar Cliente</h2>;       
        }
        else
        {
            
            return <h2 className='text-center'> Agregar Cliente</h2>;
        }
    }

    useEffect(() => {
        const fetchCliente = async () => {
            try {
                if (id) {
                    const response = await ClienteService.getClienteById(id);
                    const { strNombre, strApellido, strCorreoElectronico } = response.data;
                    console.log(response.data);
                    setCliente({
                        ...cliente,
                        strNombre,
                        strApellido,
                        strCorreoElectronico,
                    });
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchCliente();
    }, []); 

  return (
    <div>
        <div className='container'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                        { title() }
                    <div className='card-body'>
                        <form onSubmit={(e) => saveOrUpdateCliente(e)}>
                            <div className='form-group mb-2'>
                                <label className='form-label'> Nombre </label>
                                <input
                                    type="text"
                                    placeholder='Digite su nombre'
                                    name='nombre'
                                    className='form-control'
                                    value={cliente.strNombre}
                                    onChange={cambiarNombre}
                                />
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'> Apellido </label>
                                <input
                                    type="text"
                                    placeholder='Digite su apellido'
                                    name='apellido'
                                    className='form-control'
                                    value={cliente.strApellido}
                                    onChange={cambiarApellido}
                                />
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'> Correo Electronico </label>
                                <input
                                    type="text"
                                    placeholder='Digite su Correo Electronico'
                                    name='correo'
                                    className='form-control'
                                    value={cliente.strCorreoElectronico}
                                    onChange={cambiarCorreo}
                                />
                            </div>
                            <button className='btn btn-success' type='submit'> Guardar </button>
                            &nbsp;&nbsp;
                            <button className='btn btn-danger' onClick={() => navigate('/clientes')}> Cancelar </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

}

export default AddClientComponent