package com.example.product.crud.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

/**
 * @author Igor Rybak
 */
@Entity
@Table(name = "products")
@Setter
@Getter
public class Product implements Serializable {

    @Id
    @GeneratedValue
    private Long id;

    @Column(name = "vendor", nullable = false)
    private String vendor;

    @Column(name = "model", nullable = false)
    private String model;

    @Column(name = "price", nullable = false)
    private int price;

    @Column(name = "memory")
    private int memory;

    @Column(name = "weight")
    private float weight;

    @Column(name = "color")
    private String color;

    @Column(name = "image_url")
    private String imageUrl;

    @Column(name = "date")
    @Temporal(value = TemporalType.TIMESTAMP)
    private Date date;

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL)
    private Set<Comment> comments = new HashSet<>();

}
