package es.upm.dit.isst.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Lob;

@Entity
public class Partido implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	private String party;

	@Lob
	private String logo;

	public String getParty() {
		return party;
	}

	public void setParty(String party) {
		this.party = party;
	}

	public String getLogo() {
		return logo;
	}

	public void setLogo(String logo) {
		this.logo = logo;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

}
