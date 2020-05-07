package es.upm.dit.isst.soa;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.QueryParam;

import org.json.JSONObject;

import es.upm.dit.isst.dao.PartidoDAOImplementation;
import es.upm.dit.isst.model.Partido;

@Path("createPartido")
public class CreatePartido {

	@POST
	@Consumes({ "text/plain" })
	public String createPartido(String json) {
		
		JSONObject p = new JSONObject(json);
		String party = p.getString("party");
		String logo = p.getString("logo");

		Partido partido = new Partido();
		partido.setParty(party);
		partido.setLogo(logo);
		PartidoDAOImplementation.getInstance().create(partido);

		return "Done";

	}
}
