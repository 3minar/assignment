package org.example.User;

import org.example.GenderEnum;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository("list")
public class UserDaoImpl implements UserDao {

    public final static List<User> users = new ArrayList<>();

    static {
        users.add(new User("Alireza", 38, GenderEnum.MALE, "Dordrecht", "3minar", "Alirezamn"));
        users.add(new User("Malihe", 34, GenderEnum.FEMALE, "Dordrecht", "aaaaa", "Alirezamn"));
        users.add(new User("Maman", 60, GenderEnum.FEMALE, "Shiraz", "ssssss", "Alirezamn"));
        users.add(new User("Baba", 65, GenderEnum.MALE, "Shiraz", "dddddd", "Alirezamn"));
        users.add(new User("Ghasem", 36, GenderEnum.MALE, "Shiraz", "fffff", "Alirezamn"));
    }

    @Override
    public boolean insertUser(User user) {
        users.add(user);
        return true;
    }

    @Override
    public boolean loginUser(UserLoginDto user) {
        return users.stream().anyMatch(x -> x.getUsername().equalsIgnoreCase(user.username()) && x.getPassword().equals(user.password()));
    }

    @Override
    public List<User> getAllUsers() {
        return users;
    }
}
