package es.upm.dit.isst.soa;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.DefaultValue;
import javax.ws.rs.Path;
import javax.ws.rs.QueryParam;

import es.upm.dit.isst.dao.PoliticoDAOImplementation;
import es.upm.dit.isst.model.Politico;

@Path("deletePolitico")
public class DeletePolitico {

	@DELETE
	public String deletePolitico(@QueryParam("name") String name) {

		Politico politico = PoliticoDAOImplementation.getInstance().read(name);
		PoliticoDAOImplementation.getInstance().delete(politico);

		return "Done";

	}

}
