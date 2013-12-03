package com.mobiconsoft.dashboard.domain;

import java.io.Serializable;

public class Component implements Serializable {

	private static final long serialVersionUID = 1L;
	
	private int id;
	private String name;
	private String type;
	private String cfg;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getCfg() {
		return cfg;
	}
	public void setCfg(String cfg) {
		this.cfg = cfg;
	}
	public String toString() {
		return this.id + "," + this.name + ", " + this.type;
	}
}
