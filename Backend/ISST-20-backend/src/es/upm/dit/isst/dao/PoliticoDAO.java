package es.upm.dit.isst.dao;

import java.util.Collection;

import es.upm.dit.isst.model.Politico;

public interface PoliticoDAO {
	public void create(Politico politico);
	public Politico read(String name);
	public void update(Politico politico);
	public void delete(Politico politico);
	public Collection<Politico> readAll();
	public Collection<Politico> readByParty(String party);
	public Collection<Politico> readByRegion(String region);
}
