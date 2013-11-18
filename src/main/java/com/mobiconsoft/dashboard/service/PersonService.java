package com.mobiconsoft.dashboard.service;

import com.mobiconsoft.dashboard.domain.Person;

public interface PersonService {
	public Person getPersons();
  public Person getById(Integer id);
  public Person save(Person person);
  public Person update(Person person);
  public void delete(Integer id);
}
