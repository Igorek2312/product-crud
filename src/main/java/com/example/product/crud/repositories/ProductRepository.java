package com.example.product.crud.repositories;

import com.example.product.crud.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;

import java.util.List;

/**
 * @author Igor Rybak
 */
@RepositoryRestResource
public interface ProductRepository extends PagingAndSortingRepository<Product, Long> {
    @RestResource(path = "/exists", rel = "vendor")
    boolean existsByVendor(@Param("vendor") String vendor);

    List<Product> findByVendorContains(@Param("vendor") String vendor);
}
