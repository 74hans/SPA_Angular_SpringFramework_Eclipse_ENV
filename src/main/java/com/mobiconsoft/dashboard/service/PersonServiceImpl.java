package com.mobiconsoft.dashboard.service;

import org.springframework.stereotype.Service;
import com.mobiconsoft.dashboard.domain.Person;

@Service
public class PersonServiceImpl implements PersonService {

	@Override
	public Person getPersons() {
		Person person = new Person();
		person.setId(1);
		person.setName("youngsik");
		
		return person;
	}

	@Override
	public Person getById(Integer id) {
		Person person = new Person();
		person.setId(id.intValue());
		person.setName("dowon");
		
		return person;
	}

	@Override
	public Person save(Person person) {
		// TODO Auto-generated method stub
		person.setName("Save-"+person.getName());

		return person;
	}
	
	@Override
	public Person update(Person person) {
		// TODO Auto-generated method stub
		person.setName("Update-"+person.getName());

		return person;
	}
	
	@Override
	public void delete(Integer id) {
		
	}
}
