package com.mobiconsoft.dashboard.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.mobiconsoft.dashboard.domain.Component;
import com.mobiconsoft.dashboard.mapper.ComponentMapper;

@Service
public class ComponentService{
	
	@Autowired
	ComponentMapper ComponentMapper;
	
	public List<Component> getComponents() {
		return ComponentMapper.getComponents();
	}

	public Component getById(Integer id) {
		return ComponentMapper.getComponent(id);
	}

	@Transactional
	public Component save(Component component) {
	  ComponentMapper.saveComponent(component);
		return component;
	}
	
	@Transactional
	public Component update(Component component) {
		ComponentMapper.updateComponent(component);
		return component;
	}
	
	@Transactional
	public void delete(Integer id) {
		ComponentMapper.deleteComponent(id);
	}
}
