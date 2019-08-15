package com.congenial.meme.aplicacion.juegos;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ControladorBase {

    @RequestMapping(value = "/")
    public String index() {
        return "index";
    }
}
