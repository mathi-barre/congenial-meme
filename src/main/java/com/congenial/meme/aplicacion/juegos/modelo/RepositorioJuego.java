package com.congenial.meme.aplicacion.juegos.modelo;

import org.springframework.data.repository.CrudRepository;

/**
 * Este es el repositorio de Juegos que nos proporciona funcionalidades preestablecidas de JPA
 * @author mathi
 *
 */
public interface RepositorioJuego extends CrudRepository<Juego, Integer> {
    
}
