package com.example.product.crud.repositories;

import com.example.product.crud.entity.Comment;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;

import java.util.List;

/**
 * @author Igor Rybak
 */
@RepositoryRestResource
public interface CommentRepository extends PagingAndSortingRepository<Comment, Long> {
    @RestResource(path = "product", rel = "findByProductId")
    List<Comment> findByProductId(@Param("id") long productId, Pageable pageable);
}

