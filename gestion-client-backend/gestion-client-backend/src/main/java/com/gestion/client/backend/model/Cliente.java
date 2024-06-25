package com.gestion.client.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name="clientes")
public class Cliente {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "nombre")
    private String strNombre;

    @Column(name = "apellido")
    private String strApellido;

    @Column(name = "correo")
    private String strCorreoElectronico;

    @Column(name = "estado", columnDefinition = "varchar(40) default 'Activo'")
    private String strEstado;

    @PrePersist
    public void prePersist() {
        if (this.strEstado == null) {
            this.strEstado = "Activo";
        }
    }
}
