package com.gestion.client.backend.repository;

import com.gestion.client.backend.model.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ClienteRepository extends JpaRepository<Cliente, Long>
{

    @Query("SELECT c FROM Cliente c WHERE c.strEstado = 'Activo'")
    List<Cliente> findAllActivos();
}
