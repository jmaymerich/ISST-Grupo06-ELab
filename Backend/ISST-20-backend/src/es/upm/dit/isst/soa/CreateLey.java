package es.upm.dit.isst.soa;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

import org.json.JSONObject;

import es.upm.dit.isst.dao.LeyDAOImplementation;
import es.upm.dit.isst.model.Ley;

@Path("createLey")
public class CreateLey {

	@POST
	@Consumes({ "text/plain" })
	@Produces({ "application/json" })
	public String createLey(String json) {
		JSONObject p = new JSONObject(json);
		String name = p.getString("name");
		String description = p.getString("description");
		
		Ley ley = new Ley();
		ley.setName(name);
		ley.setDescription(description);
		LeyDAOImplementation.getInstance().create(ley);

		return "Done";

	}
}
