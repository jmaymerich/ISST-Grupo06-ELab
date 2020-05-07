package es.upm.dit.isst.soa;

import java.util.Collection;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.Path;
import javax.ws.rs.QueryParam;

import org.json.JSONObject;

import es.upm.dit.isst.dao.PartidoDAOImplementation;
import es.upm.dit.isst.dao.PoliticoDAOImplementation;
import es.upm.dit.isst.model.Partido;
import es.upm.dit.isst.model.Politico;

@Path("deletePartido")
public class DeletePartido {

	@DELETE
	public String deletePartido(@QueryParam("party") String party) {

		Partido partido = PartidoDAOImplementation.getInstance().read(party);
		Collection<Politico> politicos = PoliticoDAOImplementation.getInstance().readByParty(party);
		for (Politico politico : politicos) {
			PoliticoDAOImplementation.getInstance().delete(politico);
		}
		PartidoDAOImplementation.getInstance().delete(partido);

		return "Done";

	}

}
