package com.mobiconsoft.dashboard.service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import org.springframework.stereotype.Service;
import com.mobiconsoft.dashboard.domain.Person;

@Service
public class PersonServiceImpl implements PersonService {

	private List<Person> list = new ArrayList();
	
	private Person getPerson(int id) {
		Person person = null;
		for(Iterator<Person> it = list.iterator() ; it.hasNext(); ) {
			person = it.next();
			if(person.getId() == id) {
				return person;
			}
		}
		return null;
	}
	
	@Override
	public List<Person> getPersons() {
		return list;
	}

	@Override
	public Person getById(Integer id) {
		return getPerson(id.intValue());
	}

	@Override
	public Person save(Person person) {
		// TODO Auto-generated method stub
		person.setName(person.getName());
		list.add(person);
		
		return person;
	}
	
	@Override
	public Person update(Person person) {
		// TODO Auto-generated method stub
		Person oldPerson = getPerson(person.getId());
		oldPerson.setName(person.getName());

		return oldPerson;
	}
	
	@Override
	public void delete(Integer id) {
		list.remove(getPerson(id.intValue()));
	}
}
