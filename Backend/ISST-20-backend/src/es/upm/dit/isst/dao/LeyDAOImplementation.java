package es.upm.dit.isst.dao;

import java.util.Collection;

import org.hibernate.query.Query;

import es.upm.dit.isst.model.Ley;
import es.upm.dit.isst.model.Politico;

import org.hibernate.Session;

public class LeyDAOImplementation implements LeyDAO {

	private static LeyDAOImplementation instancia = null;
	private LeyDAOImplementation() {
	}

	public static LeyDAOImplementation getInstance() {
		if( null == instancia ) 
	      instancia = new LeyDAOImplementation();
	    return instancia;
	}

	
	@SuppressWarnings("unchecked")
	@Override
	public void create(Ley ley) {
		Session session = SessionFactoryService.get().openSession();
		session.beginTransaction();
		session.save(ley);
		session.getTransaction().commit();
		session.close();
	}
	
	@SuppressWarnings("unchecked")
	@Override
	public Ley read(String name) {
		Session session = SessionFactoryService.get().openSession();
		System.out.print(session);
		session.beginTransaction();
		Ley ley = session.get(Ley.class, name);
		session.getTransaction().commit();
		session.close();
		return ley;
	}

	@SuppressWarnings("unchecked")
	@Override
	public void update(Ley ley) {
		Session session = SessionFactoryService.get().openSession();
		session.beginTransaction();
		session.saveOrUpdate(ley);
		session.getTransaction().commit();
		session.close();
	}

	@SuppressWarnings("unchecked")
	@Override
	public void delete(Ley ley) {
		Session session = SessionFactoryService.get().openSession();
		session.beginTransaction();
		session.delete(ley);
		session.getTransaction().commit();
		session.close();
	}

	@SuppressWarnings("unchecked")
	@Override
	public Collection<Ley> readAll() {
		Session session = SessionFactoryService.get().openSession();
		session.beginTransaction();
		Collection<Ley> leyes = session.createQuery("from Ley").list();
		session.getTransaction().commit();
		session.close();
		return leyes;
	}

}
