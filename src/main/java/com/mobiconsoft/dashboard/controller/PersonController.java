package com.mobiconsoft.dashboard.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import com.mobiconsoft.dashboard.domain.Person;
import com.mobiconsoft.dashboard.service.PersonService;

@Controller
@RequestMapping("/v1")
public class PersonController {
	
	@Autowired
	PersonService personService;
	
	private static final Logger logger = LoggerFactory.getLogger(PersonController.class);

	// this method responses to GET request http://localhost:8080/api/vi/person
	// return Person object as json
	@RequestMapping(value = "/person", method = RequestMethod.GET)
	@ResponseBody
	public List<Person> getPersons() {
		return this.personService.getPersons();
	}
	
	// this method responses to GET request http://localhost:8080/api/vi/person/{id}
	// return Person object as json
	@RequestMapping(value = "/person/{id}", method = RequestMethod.GET)
	@ResponseBody
	public Person getById(@PathVariable Integer id) {
		return this.personService.getById(id);
	}

	// this method response to POST request http://localhost:8080/api/v1/person
	// receives json data sent by client --> map it to Person object
	// return Person object as json
	@RequestMapping(value = "/person", method = RequestMethod.POST)
	@ResponseBody
	public Person savePerson(@RequestBody Person person) {
		logger.info("Save call: "+ person.getId() + ", " + person.getName());
		return this.personService.save(person);
	}
	
	@RequestMapping(value = "/person", method = RequestMethod.PUT)
	@ResponseBody
	public Person updatePerson(@RequestBody Person person) {
		logger.info("Update call: "+ person.getId() + ", " + person.getName());
		return this.personService.update(person);
	}
	
	@RequestMapping(value = "/person/{id}", method = RequestMethod.DELETE)
	@ResponseBody
	public void deletePerson(@PathVariable Integer id) {
		logger.info("Delete call: "+ id);
		this.personService.delete(id);
	}
}