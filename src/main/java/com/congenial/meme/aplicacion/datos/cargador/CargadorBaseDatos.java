package com.congenial.meme.aplicacion.datos.cargador;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.congenial.meme.aplicacion.juegos.modelo.RepositorioJuego;

@Component
public class CargadorBaseDatos implements CommandLineRunner {
    
    private final RepositorioJuego gameRepository;
    
    @Autowired
    public CargadorBaseDatos(final RepositorioJuego gameRepository) {
        this.gameRepository = gameRepository;
    }

    @Override
    public void run(String... args) throws Exception {
    }

}
