package com.gestion.client.backend.controller;

import com.gestion.client.backend.model.Cliente;
import com.gestion.client.backend.service.ClienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/api/v1")
public class ClienteController {

    @Autowired
    private ClienteService objClienteService;

    @GetMapping("/clientes")
    public List<Cliente> consultarClientesActivos()
    {
        return objClienteService.obtenerClientesActivos();
    }

    @PostMapping("/clientes")
    public Cliente crearCliente(@RequestBody Cliente cliente)
    {
        return objClienteService.guardarCliente(cliente);
    }

    @GetMapping("/clientes/{Id}")
    public ResponseEntity<Cliente> obtenerListClientById(@PathVariable Long Id)
    {  Cliente objCliente = objClienteService.obtenerClientePorId(Id);
        return ResponseEntity.ok().body(objCliente);
    }

    @PutMapping("/clientes/{Id}")
    public ResponseEntity<Cliente> actualizarCliente(@PathVariable Long Id, @RequestBody Cliente objRequest)
    {
        Cliente objClienteActualizado = objClienteService.actualizarCliente(Id, objRequest);
        return ResponseEntity.ok().body(objClienteActualizado);
    }

    @DeleteMapping("/clientes/{Id}")
    public ResponseEntity<Map<String,Boolean>> eliminarCliente(@PathVariable Long Id)
    {
        boolean blResultado = objClienteService.eliminarCliente(Id);
        Map<String, Boolean> response = new HashMap<>();
        response.put("eliminado", blResultado);
        return ResponseEntity.ok(response);
    }
}
