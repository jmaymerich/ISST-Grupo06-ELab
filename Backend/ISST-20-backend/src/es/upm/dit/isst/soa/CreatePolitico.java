package es.upm.dit.isst.soa;

import javax.ws.rs.Consumes;
import javax.ws.rs.DefaultValue;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.QueryParam;

import org.json.JSONObject;

import es.upm.dit.isst.dao.PoliticoDAOImplementation;
import es.upm.dit.isst.model.Politico;

@Path("createPolitico")
public class CreatePolitico {

	@POST
	@Consumes({ "text/plain" })
	public String createPolitico(String json) {
		JSONObject p = new JSONObject(json);
		System.out.println(json);
		String name = p.getString("name");
		String party = p.getString("party");
		String photo = p.getString("photo");
		String region = p.getString("region");
		
		Politico politico = new Politico();
		politico.setName(name);
		politico.setParty(party);
		politico.setPhoto(photo);
		politico.setRegion(region);
		PoliticoDAOImplementation.getInstance().create(politico);

		return "Done";

	}
}
