package es.upm.dit.isst.soa;

import java.util.Collection;

import javax.ws.rs.DefaultValue;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;

import org.json.JSONArray;
import org.json.JSONObject;

import es.upm.dit.isst.dao.PoliticoDAOImplementation;
import es.upm.dit.isst.model.Politico;

@Path("getPoliticosByRegion")
public class GetPoliticosByRegion {
	
	@GET
	@Produces({ "application/json"})
	public String getPoliticosByRegion(@DefaultValue("León") @QueryParam("region") String region) {

		JSONArray pols = new JSONArray();
		Collection<Politico> politicos = PoliticoDAOImplementation.getInstance().readByRegion(region);
		for (Politico politico:politicos) {
		JSONObject p = new JSONObject();
		p.put("name", politico.getName());
		p.put("party", politico.getParty());
		p.put("photo", politico.getPhoto());
		p.put("region", politico.getRegion());
		pols.put(p);
		}

		return pols.toString();

	}

}
