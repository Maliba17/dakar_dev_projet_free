package dev.dakar.devpay.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(RuntimeException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public Map<String, String> handle(RuntimeException ex) {
        return Map.of("error", ex.getMessage());
    }
}