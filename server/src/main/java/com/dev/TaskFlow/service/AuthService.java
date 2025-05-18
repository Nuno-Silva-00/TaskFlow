package com.dev.taskflow.service;

import java.util.Map;

import org.springframework.stereotype.Service;

// import com.dev.taskflow.repository.AuthRepository;
@Service
public class AuthService {

    // private final AuthRepository authRepo;
    // public AuthService(AuthRepository authRepo) {
    //     this.authRepo = authRepo;
    // }
    // public {message: String} getServer() {
    //     return {"message":"Server is running"}
    // }
    public Map<String, String> getServer() {
        return Map.of("message", "Server is running");
    }
}
