package org.example;

import org.example.User.User;
import org.example.User.UserDao;
import org.example.User.UserJpaDao;
import org.example.User.UserLoginDto;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository("jpa")
public class UserJpaDaoImpl implements UserDao {

    UserJpaDao userJpaDao;

    public UserJpaDaoImpl(UserJpaDao userJpaDao) {
        this.userJpaDao = userJpaDao;
    }

    @Override
    public boolean insertUser(User user) {
        try {
            userJpaDao.save(user);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    @Override
    public boolean loginUser(UserLoginDto user) {
        return userJpaDao.existsByUsernameAndPassword(user.username(), user.password());
    }

    @Override
    public List<User> getAllUsers() {
        return userJpaDao.findAll();
    }
}
