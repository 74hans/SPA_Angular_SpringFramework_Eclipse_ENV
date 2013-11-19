package com.mobiconsoft.dashboard.service;

import java.util.List;

import org.springframework.transaction.annotation.Transactional;

import com.mobiconsoft.dashboard.domain.Person;

public interface PersonService {
	public List<Person> getPersons();
  public Person getById(Integer id);
  
  @Transactional
  public Person save(Person person);
  
  @Transactional
  public Person update(Person person);
  
  @Transactional
  public void delete(Integer id);
}
