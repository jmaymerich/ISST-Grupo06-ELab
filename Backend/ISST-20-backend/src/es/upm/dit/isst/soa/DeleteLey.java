package es.upm.dit.isst.soa;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.Path;
import javax.ws.rs.QueryParam;

import es.upm.dit.isst.dao.LeyDAOImplementation;
import es.upm.dit.isst.model.Ley;

@Path("deleteLey")
public class DeleteLey {

	@DELETE
	public String deleteLey(@QueryParam("name") String name) {

		Ley ley = LeyDAOImplementation.getInstance().read(name);
		LeyDAOImplementation.getInstance().delete(ley);

		return "Done";

	}

}
