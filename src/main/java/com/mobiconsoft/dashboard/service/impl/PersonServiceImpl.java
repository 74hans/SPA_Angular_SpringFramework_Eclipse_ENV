package com.mobiconsoft.dashboard.service.impl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.mobiconsoft.dashboard.dao.PersonDAO;
import com.mobiconsoft.dashboard.domain.Person;
import com.mobiconsoft.dashboard.service.PersonService;

@Service
public class PersonServiceImpl implements PersonService {

	@Autowired
	PersonDAO personDAO;
	
	@Override
	public List<Person> getPersons() {
		return personDAO.getPersons();
	}

	@Override
	public Person getById(Integer id) {
		return personDAO.getPerson(id);
	}

	@Override
	@Transactional
	public Person save(Person person) {
		personDAO.savePerson(person);
		return person;
	}
	
	@Override
	@Transactional
	public Person update(Person person) {
		personDAO.updatePerson(person);
		return person;
	}
	
	@Override
	@Transactional
	public void delete(Integer id) {
		personDAO.deletePerson(id);
	}
}
