package com.example.product.crud.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

/**
 * @author Igor Rybak
 */
@Entity
@Table(name = "comments")
@Setter
@Getter
public class Comment implements Serializable {
    @Id
    @GeneratedValue
    private Long id;

    @Column(name = "email",length = 64)
    private String email;

    @Column(name = "content",length = 1000)
    private String content;

    @Column(name = "date")
    @Temporal(TemporalType.TIMESTAMP)
    private Date date;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "product_id", nullable = false)
    private Product product;

}
