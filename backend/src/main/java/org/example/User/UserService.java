package org.example.User;

import org.apache.logging.log4j.util.Strings;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    UserDao userDao;

    public UserService(UserDao userDao) {
        this.userDao = userDao;
    }

    public boolean addUser(User user) {
        if (Strings.isNotEmpty(user.getName()) && Strings.isNotEmpty(user.getUsername()) && Strings.isNotEmpty(user.getPassword())) {
            return userDao.insertUser(user);
        }
        return false;
    }

    public boolean login(UserLoginDto userLogin) {
        if (Strings.isNotEmpty(userLogin.username()) && Strings.isNotEmpty(userLogin.password())) {
            return userDao.loginUser(userLogin);
        }
        return false;
    }

    public List<User> userList() {
        return userDao.getAllUsers();
    }
}
