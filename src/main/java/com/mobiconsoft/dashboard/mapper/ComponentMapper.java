package com.mobiconsoft.dashboard.mapper;

import java.util.List;
import org.springframework.stereotype.Repository;
import com.mobiconsoft.dashboard.domain.Component;

@Repository(value="componentMapper")
public interface ComponentMapper {
	
	public List<Component> getComponents();
	public Component getComponent(int id);
	public void saveComponent(Component component);
	public void updateComponent(Component component);
	public void deleteComponent(int id);

}
