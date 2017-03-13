package com.example.product.crud.config;

import com.example.product.crud.entity.Product;
import org.springframework.hateoas.Link;
import org.springframework.hateoas.PagedResources;
import org.springframework.hateoas.Resource;
import org.springframework.hateoas.ResourceProcessor;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;

/**
 * @author Igor Rybak
 */
@Component
public class ProductPageResourceProcessor implements ResourceProcessor<PagedResources<Resource<Product>>> {
    private static String getFullURL(HttpServletRequest request) {
        StringBuffer requestURL = request.getRequestURL();
        String queryString = request.getQueryString();

        if (queryString == null) {
            return requestURL.toString();
        } else {
            return requestURL.append('?').append(queryString).toString();
        }
    }

    @Override
    public PagedResources<Resource<Product>> process(PagedResources<Resource<Product>> resource) {
        HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getRequest();
        String url = getFullURL(request);
        resource.add(new Link(url, "current"));
        return resource;
    }

}
