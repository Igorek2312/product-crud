package com.example.product.crud;

import org.springframework.boot.Banner;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.core.env.Environment;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.hateoas.config.EnableEntityLinks;

import java.io.PrintStream;

@SpringBootApplication
@EnableJpaRepositories
@EnableAutoConfiguration
@ComponentScan("com.example.product.crud")
@EntityScan("com.example.product.crud.entity")
public class ProductCrudApplication {

    public static void main(String[] args) {
        SpringApplication.run(ProductCrudApplication.class, args);
       /* new SpringApplicationBuilder(ProductCrudApplication.class)
                .banner((environment, sourceClass, out) -> {
                    ClassLoader.getSystemResourceAsStream()
                })
                .run();*/
    }

}
