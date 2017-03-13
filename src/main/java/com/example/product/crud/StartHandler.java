package com.example.product.crud;


import com.example.product.crud.entity.Product;
import com.example.product.crud.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.List;

/**
 * @author Igor Rybak
 */
@Component
//@Transactional
public class StartHandler implements ApplicationListener<ContextRefreshedEvent> {
    private ProductRepository productRepository;

    @Autowired
    public void setProductRepository(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    private void start() {
        Product product = new Product();
        product.setVendor("HP");
        product.setModel("4540s");
        product.setPrice(1000);
        product.setDate(new Date());

        productRepository.save(product);
    }

    @Override
    public void onApplicationEvent(ContextRefreshedEvent contextRefreshedEvent) {
        List<Product> products = productRepository.findByVendorContains("H");
        // start();
    }
}
