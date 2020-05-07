package es.upm.dit.isst.dao;

import java.util.Collection;

import org.hibernate.query.Query;

import es.upm.dit.isst.model.Partido;
import es.upm.dit.isst.model.Politico;

import org.hibernate.Session;

public class PartidoDAOImplementation implements PartidoDAO {

	private static PartidoDAOImplementation instancia = null;
	private PartidoDAOImplementation() {
	}

	public static PartidoDAOImplementation getInstance() {
		if( null == instancia ) 
	      instancia = new PartidoDAOImplementation();
	    return instancia;
	}

	
	@SuppressWarnings("unchecked")
	@Override
	public void create(Partido partido) {
		Session session = SessionFactoryService.get().openSession();
		session.beginTransaction();
		session.save(partido);
		session.getTransaction().commit();
		session.close();
	}
	
	@SuppressWarnings("unchecked")
	@Override
	public Partido read(String party) {
		Session session = SessionFactoryService.get().openSession();
		System.out.print(session);
		session.beginTransaction();
		Partido partido = session.get(Partido.class, party);
		session.getTransaction().commit();
		session.close();
		return partido;
	}

	@SuppressWarnings("unchecked")
	@Override
	public void update(Partido partido) {
		Session session = SessionFactoryService.get().openSession();
		session.beginTransaction();
		session.saveOrUpdate(partido);
		session.getTransaction().commit();
		session.close();
	}

	@SuppressWarnings("unchecked")
	@Override
	public void delete(Partido partido) {
		Session session = SessionFactoryService.get().openSession();
		session.beginTransaction();
		session.delete(partido);
		session.getTransaction().commit();
		session.close();
	}

	@SuppressWarnings("unchecked")
	@Override
	public Collection<Partido> readAll() {
		Session session = SessionFactoryService.get().openSession();
		session.beginTransaction();
		Collection<Partido> partidos = session.createQuery("from Partido").list();
		session.getTransaction().commit();
		session.close();
		return partidos;
	}

}
