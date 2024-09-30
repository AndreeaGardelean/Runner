package com.gardeleandreea.runner.repository;

import org.springframework.data.repository.CrudRepository;

import com.gardeleandreea.runner.model.User;

public interface UserRepository extends CrudRepository<User, Long> {
  User getAllUser();
}
