package es.upm.dit.isst.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Lob;

@Entity
public class Politico implements Serializable {
	
	private static final long serialVersionUID = 1L;
	 
	@Id
	private String name;
	private String party;
	private String region;
	
	@Lob
	private String photo;
	
	
	public Politico() {
		
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
	public String getParty() {
		return party;
	}

	public void setParty(String party) {
		this.party = party;
	}

	public String getRegion() {
		return region;
	}

	public void setRegion(String region) {
		this.region = region;
	}
	
	public String getPhoto() {
		return photo;
	}

	public void setPhoto(String photo) {
		this.photo = photo;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	 
	 
}
