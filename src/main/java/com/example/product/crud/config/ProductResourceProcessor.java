package com.example.product.crud.config;

import com.example.product.crud.entity.Product;
import org.springframework.hateoas.Link;
import org.springframework.hateoas.Resource;
import org.springframework.hateoas.ResourceProcessor;
import org.springframework.stereotype.Component;

/**
 * @author Igor Rybak
 */
@Component
public class ProductResourceProcessor implements ResourceProcessor<Resource<Product>> {
    @Override
    public Resource<Product> process(Resource<Product> resource) {
        Long productId = resource.getContent().getId();
        String url = "http://localhost:8080/api/comments/search/product?id=" + productId + "&sort=date,desc"; //horrible)
        resource.add(new Link(url, "sorted-comments"));
        return resource;
    }


}
