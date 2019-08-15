package com.congenial.meme.aplicacion.juegos.modelo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

/**
 * Esta es la entidad que representa al Juego en nuestro sistema
 * @author mathi
 *
 */
@Entity
public class Juego {

    private @Id @GeneratedValue Long id;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
    
}
