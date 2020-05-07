package es.upm.dit.isst.soa;

import javax.ws.rs.DefaultValue;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;

import org.json.JSONObject;

import es.upm.dit.isst.dao.LeyDAOImplementation;
import es.upm.dit.isst.model.Ley;

@Path("getLey")
public class GetLey {

	@GET
	@Produces({ "application/json" })
	public String getLey(@DefaultValue("Ley del aborto") @QueryParam("name") String name) {

		Ley ley = LeyDAOImplementation.getInstance().read(name);
		JSONObject p = new JSONObject();
		p.put("name", name);
		p.put("description", ley.getDescription());

		return p.toString();

	}
}