package es.upm.dit.isst.soa;

import javax.ws.rs.DefaultValue;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;

import org.json.JSONObject;

import es.upm.dit.isst.dao.PoliticoDAOImplementation;
import es.upm.dit.isst.model.Politico;

@Path("getPolitico")
public class GetPolitico {

	@GET
	@Produces({ "application/json" })
	public String getPolitico(@DefaultValue("Javier Alfonso Cendón") @QueryParam("name") String name) {

		Politico politico = PoliticoDAOImplementation.getInstance().read(name);
		JSONObject p = new JSONObject();
		p.put("name", name);
		p.put("party", politico.getParty());
		p.put("photo", politico.getPhoto());
		p.put("region", politico.getRegion());

		return p.toString();

	}
}