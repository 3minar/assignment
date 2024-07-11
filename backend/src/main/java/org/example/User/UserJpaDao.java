package org.example.User;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserJpaDao extends JpaRepository<User, Integer> {
    boolean existsByUsernameAndPassword(String username, String password);
}
