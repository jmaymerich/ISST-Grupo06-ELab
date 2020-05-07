package es.upm.dit.isst.dao;

import java.util.Collection;

import es.upm.dit.isst.model.Partido;

public interface PartidoDAO {
	public void create(Partido partido);
	public Partido read(String party);
	public void update(Partido partido);
	public void delete(Partido partido);
	public Collection<Partido> readAll();
}
