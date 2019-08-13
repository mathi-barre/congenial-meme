package com.congenial.meme.application.data.loader;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.congenial.meme.application.games.model.GameRepository;

@Component
public class DatabaseLoader implements CommandLineRunner {
    
    private final GameRepository gameRepository;
    
    @Autowired
    public DatabaseLoader(final GameRepository gameRepository) {
        this.gameRepository = gameRepository;
    }

    @Override
    public void run(String... args) throws Exception {
    }

}
