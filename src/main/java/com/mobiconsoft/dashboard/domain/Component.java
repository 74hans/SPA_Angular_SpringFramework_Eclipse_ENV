package com.mobiconsoft.dashboard.domain;

import java.io.Serializable;

public class Component implements Serializable {

	private static final long serialVersionUID = 1L;
	
	private int id;
	private String compType;
	private String compCfg;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getCompType() {
		return compType;
	}
	public void setCompType(String compType) {
		this.compType = compType;
	}
	public String getCompCfg() {
		return compCfg;
	}
	public void setCompCfg(String compCfg) {
		this.compCfg = compCfg;
	}


}
