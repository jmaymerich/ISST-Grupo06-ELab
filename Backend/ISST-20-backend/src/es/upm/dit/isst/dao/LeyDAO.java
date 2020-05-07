package es.upm.dit.isst.dao;

import java.util.Collection;

import es.upm.dit.isst.model.Ley;

public interface LeyDAO {
	public void create(Ley ley);
	public Ley read(String name);
	public void update(Ley ley);
	public void delete(Ley ley);
	public Collection<Ley> readAll();
}
