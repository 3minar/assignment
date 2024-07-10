package org.example.User;

import java.util.List;

public interface UserDao {
    boolean insertUser(User user);

    boolean loginUser(UserLoginDto user);

    List<User> getAllUsers();
}
