package com.dev.taskflow.controller;

import java.util.Map;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dev.taskflow.service.AuthService;

@RestController
@PreAuthorize("permitAll()")
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @GetMapping("/server")
    @PreAuthorize("permitAll()")
    public Map<String, String> getServer() {
        return authService.getServer();
}
    // public String getServer() {
    //     return authService.getServer();
    // }
}
