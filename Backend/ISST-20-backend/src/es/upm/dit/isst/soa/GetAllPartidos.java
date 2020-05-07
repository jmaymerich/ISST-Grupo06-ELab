package es.upm.dit.isst.soa;

import java.util.Collection;

import javax.ws.rs.DefaultValue;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;

import org.json.JSONArray;
import org.json.JSONObject;

import es.upm.dit.isst.dao.PartidoDAOImplementation;
import es.upm.dit.isst.model.Partido;

@Path("getAllPartidos")
public class GetAllPartidos {

	@GET
	@Produces({ "application/json " })
	public String getAllPartidos() {

		JSONArray pars = new JSONArray();
		Collection<Partido> partidos = PartidoDAOImplementation.getInstance().readAll();
		for (Partido partido : partidos) {
			JSONObject p = new JSONObject();
			p.put("name", partido.getParty());
			p.put("logo", partido.getLogo());
			pars.put(p);
		}

		return pars.toString();

	}

}
