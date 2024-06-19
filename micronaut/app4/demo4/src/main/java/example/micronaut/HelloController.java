package com.example.myfirstmicroservice;

import io.micronaut.http.annotation.Controller;
import io.micronaut.http.annotation.Get;

@Controller("/hello")
public class HelloController {

    @Get
    public String helloWorld() {
        return "Hello World! seri first micronaut!!! tryout";
    }
}