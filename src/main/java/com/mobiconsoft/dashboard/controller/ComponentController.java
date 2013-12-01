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
import com.mobiconsoft.dashboard.domain.Component;
import com.mobiconsoft.dashboard.service.ComponentService;

@Controller
@RequestMapping("/v1")
public class ComponentController {
	
	@Autowired
	ComponentService componentService;
	
	private static final Logger logger = LoggerFactory.getLogger(ComponentController.class);

	// this method responses to GET request http://localhost:8080/api/vi/component
	// return Component object as json
	@RequestMapping(value = "/component", method = RequestMethod.GET)
	@ResponseBody
	public List<Component> getComponents() {
		logger.info("Select all call: "+ this.componentService.getComponents());
		return this.componentService.getComponents();
	}
	
	// this method responses to GET request http://localhost:8080/api/vi/component/{id}
	// return Component object as json
	@RequestMapping(value = "/component/{id}", method = RequestMethod.GET)
	@ResponseBody
	public Component getById(@PathVariable Integer id) {
		Component component = this.componentService.getById(id);
		logger.info("Select one call: "+ component.getId() + ", " + component.getCompType());
		return component;
	}

	// this method response to POST request http://localhost:8080/api/v1/Component
	// receives json data sent by client --> map it to Component object
	// return Component object as json
	@RequestMapping(value = "/component", method = RequestMethod.POST)
	@ResponseBody
	public Component saveComponent(@RequestBody Component component) {
		logger.info("Save call: "+ component.getId() + ", " + component.getCompType());
		return this.componentService.save(component);
	}
	
	@RequestMapping(value = "/component", method = RequestMethod.PUT)
	@ResponseBody
	public Component updateComponent(@RequestBody Component component) {
		logger.info("Update call: "+ component.getId() + ", " + component.getCompType());
		return this.componentService.update(component);
	}
	
	@RequestMapping(value = "/component/{id}", method = RequestMethod.DELETE)
	@ResponseBody
	public void deleteComponent(@PathVariable Integer id) {
		logger.info("Delete call: "+ id);
		this.componentService.delete(id);
	}
}