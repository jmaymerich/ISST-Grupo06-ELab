package es.upm.dit.isst.soa;

import java.util.Collection;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

import org.json.JSONArray;
import org.json.JSONObject;

import es.upm.dit.isst.dao.LeyDAOImplementation;
import es.upm.dit.isst.model.Ley;

@Path("getAllLeyes")
public class GetAllLeyes {

	@GET
	@Produces({ "application/json " })
	public String getAllLeyes() {

		JSONArray leys = new JSONArray();
		Collection<Ley> leyes = LeyDAOImplementation.getInstance().readAll();
		for (Ley ley : leyes) {
			JSONObject l = new JSONObject();
			l.put("name", ley.getName());
			l.put("description", ley.getDescription());
			leys.put(l);
		}

		return leys.toString();

	}

}
