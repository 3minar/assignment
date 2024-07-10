package org.example.User;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("api/v1/")
public class UserController {

    UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("adduser")
    public ResponseEntity<Void> addUser(@RequestBody User user) {
        if (userService.addUser(user))
            return ResponseEntity.ok().build();
        else
            return ResponseEntity.badRequest().build();
    }

    @PostMapping("login")
    public ResponseEntity<Void> login(@RequestBody UserLoginDto user) {
        if (userService.login(user))
            return ResponseEntity.ok().build();
        else
            return ResponseEntity.notFound().build();
    }

    @GetMapping("usersList")
    public ResponseEntity<List<User>> userList() {
        return new ResponseEntity<>(userService.userList(), HttpStatus.OK);
    }
}