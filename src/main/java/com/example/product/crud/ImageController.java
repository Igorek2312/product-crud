package com.example.product.crud;

import org.springframework.core.io.InputStreamResource;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.io.InputStream;
import java.util.concurrent.ThreadLocalRandom;

/**
 * @author Igor Rybak
 */
@RestController
@RequestMapping("/api")
public class ImageController {
    @RequestMapping(value = "/random-image", method = RequestMethod.GET, produces = MediaType.IMAGE_JPEG_VALUE)
    public InputStreamResource getRandomImage() {
        int i = ThreadLocalRandom.current().nextInt(1, 11);
        InputStream input = getClass().getResourceAsStream("/images/laptop" + i + ".jpg");
        return new InputStreamResource(input);
    }
}
