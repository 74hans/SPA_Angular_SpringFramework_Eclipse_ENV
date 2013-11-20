package com.mobiconsoft.dashboard.mapper;

import java.util.List;
import org.springframework.stereotype.Repository;
import com.mobiconsoft.dashboard.domain.Person;

@Repository(value="personMapper")
public interface PersonMapper {
	
	public List<Person> getPersons();
	public Person getPerson(int id);
	public void savePerson(Person person);
	public void updatePerson(Person person);
	public void deletePerson(int id);

}
