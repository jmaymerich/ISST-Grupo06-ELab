package es.upm.dit.isst.dao;

import java.util.Collection;

import org.hibernate.Session;

import es.upm.dit.isst.model.Politico;


public class PoliticoDAOImplementation implements PoliticoDAO {

	private static PoliticoDAOImplementation instancia = null;
	private PoliticoDAOImplementation() {
	}

	public static PoliticoDAOImplementation getInstance() {
		if( null == instancia ) 
	      instancia = new PoliticoDAOImplementation();
	    return instancia;
	}

	
	@SuppressWarnings("unchecked")
	@Override
	public void create(Politico politico) {
		Session session = SessionFactoryService.get().openSession();
		session.beginTransaction();
		session.save(politico);
		session.getTransaction().commit();
		session.close();
	}
	
	@SuppressWarnings("unchecked")
	@Override
	public Politico read(String name) {
		Session session = SessionFactoryService.get().openSession();
		System.out.print(session);
		session.beginTransaction();
		Politico politico = session.get(Politico.class, name);
		session.getTransaction().commit();
		session.close();
		return politico;
	}

	@SuppressWarnings("unchecked")
	@Override
	public void update(Politico politico) {
		Session session = SessionFactoryService.get().openSession();
		session.beginTransaction();
		session.saveOrUpdate(politico);
		session.getTransaction().commit();
		session.close();
	}

	@SuppressWarnings("unchecked")
	@Override
	public void delete(Politico politico) {
		Session session = SessionFactoryService.get().openSession();
		session.beginTransaction();
		session.delete(politico);
		session.getTransaction().commit();
		session.close();
	}

	@SuppressWarnings("unchecked")
	@Override
	public Collection<Politico> readAll() {
		Session session = SessionFactoryService.get().openSession();
		session.beginTransaction();
		Collection<Politico> politicos = session.createQuery("from Politico").list();
		session.getTransaction().commit();
		session.close();
		return politicos;
	}
	
	@SuppressWarnings("unchecked")
	public Collection<Politico> readByParty(String party){
		Session session = SessionFactoryService.get().openSession();
		session.beginTransaction();
		Collection<Politico> politicos = session.createQuery("from Politico where party='" +party+ "'").list();
		session.getTransaction().commit();
		session.close();
		return politicos;
	}
	
	@SuppressWarnings("unchecked")
	public Collection<Politico> readByRegion(String region){
		Session session = SessionFactoryService.get().openSession();
		session.beginTransaction();
		Collection<Politico> politicos = session.createQuery("from Politico where region='" +region+ "'").list();
		session.getTransaction().commit();
		session.close();
		return politicos;
	}

}
