package com.gestion.client.backend.service;

import com.gestion.client.backend.model.Cliente;
import com.gestion.client.backend.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class ClienteService {

    @Autowired
    private ClienteRepository objClienteRepository;

    public List<Cliente> obtenerClientesActivos() {
        return objClienteRepository.findAllActivos();
    }

    public Cliente guardarCliente(Cliente cliente) {
        return objClienteRepository.save(cliente);
    }

    public Cliente obtenerClientePorId(Long id) {
        return objClienteRepository.findById(id).orElseThrow();
    }

    public Cliente actualizarCliente(Long id, Cliente clienteRequest)
    {
        Cliente cliente = objClienteRepository.findById(id).orElseThrow();

        cliente.setStrNombre(clienteRequest.getStrNombre());
        cliente.setStrApellido(clienteRequest.getStrApellido());
        cliente.setStrCorreoElectronico(clienteRequest.getStrCorreoElectronico());

        return objClienteRepository.save(cliente);
    }

    public boolean eliminarCliente(Long id)
    {
        boolean blResultado = false;
        try{
            Cliente cliente = objClienteRepository.findById(id).orElseThrow();
            cliente.setStrEstado("Eliminado"); // Cambia el estado en lugar de borrar físicamente
            objClienteRepository.save(cliente);
            blResultado = true;

        }catch (Exception e)
        {
            e.printStackTrace();
            throw e;
        }
        return blResultado;
    }
}
