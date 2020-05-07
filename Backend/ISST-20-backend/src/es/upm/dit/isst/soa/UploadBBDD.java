package es.upm.dit.isst.soa;

import java.awt.image.BufferedImage;
import java.io.BufferedReader;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Base64;
import java.util.Collection;

import javax.imageio.ImageIO;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

import org.json.JSONArray;

import es.upm.dit.isst.dao.LeyDAOImplementation;
import es.upm.dit.isst.dao.PartidoDAOImplementation;
import es.upm.dit.isst.dao.PoliticoDAOImplementation;
import es.upm.dit.isst.model.Ley;
import es.upm.dit.isst.model.Partido;
import es.upm.dit.isst.model.Politico;

@Path("uploadBBDD")
public class UploadBBDD {

	@GET
	@Produces({ "text/html" })
	public String uploadBBDD() throws org.apache.tomcat.util.json.ParseException {
		
		Collection<Partido> partidos = PartidoDAOImplementation.getInstance().readAll();
		for (Partido partido : partidos) {
			PartidoDAOImplementation.getInstance().delete(partido);
		}
		Collection<Politico> politicos = PoliticoDAOImplementation.getInstance().readAll();
		for (Politico politico : politicos) {
			PoliticoDAOImplementation.getInstance().delete(politico);
		}
		Collection<Ley> leyes = LeyDAOImplementation.getInstance().readAll();
		for (Ley ley : leyes) {
			LeyDAOImplementation.getInstance().delete(ley);
		}

		String jsonData = "";
		BufferedReader br = null;
		try {
			String line;
			br = new BufferedReader(new InputStreamReader(new FileInputStream("C:/Users/Gonzalo/Desktop/Data/Model.json"), "UTF-8"));
			while ((line = br.readLine()) != null) {
				jsonData += line + "\n";
			}
		} catch (IOException e) {
			e.printStackTrace();
		} finally {
			try {
				if (br != null)
					br.close();
			} catch (IOException ex) {
				ex.printStackTrace();
			}
		}
		
		JSONArray pol = new JSONArray(jsonData);

		for (int i = 0; i < 350; i++) {
			String name = pol.getJSONObject(i).getString("name");
			String party = pol.getJSONObject(i).getString("party");
			String region = pol.getJSONObject(i).getString("region");
			String photo = pol.getJSONObject(i).getString("photo");

			Politico politico = new Politico();
			politico.setName(name);
			politico.setParty(party);
			
			File file =new File("C:/Users/Gonzalo/Desktop/Data/Images/"+photo);
		      if(file.exists()){
		         try {
		            BufferedImage bufferedImage=ImageIO.read(file);
		            ByteArrayOutputStream byteOutStream = new ByteArrayOutputStream();
		            ImageIO.write(bufferedImage, "jpg", byteOutStream);
		            String encodedImage = Base64.getEncoder().encodeToString(byteOutStream.toByteArray());
		            politico.setPhoto(encodedImage);
		         } catch (IOException e) {
		            e.printStackTrace();
		         }
		      }
		    
			politico.setRegion(region);
			PoliticoDAOImplementation.getInstance().create(politico);
		}
		
		System.out.println("Uploaded politicos");

		jsonData = "";
		try {
			String line;
			br = new BufferedReader(new InputStreamReader(new FileInputStream("C:/Users/Gonzalo/Desktop/Data/Partidos.json"), "UTF-8"));
			while ((line = br.readLine()) != null) {
				jsonData += line + "\n";
			}
		} catch (IOException e) {
			e.printStackTrace();
		} finally {
			try {
				if (br != null)
					br.close();
			} catch (IOException ex) {
				ex.printStackTrace();
			}
		}
		
		JSONArray par = new JSONArray(jsonData);

		for (int i = 0; i < 19; i++) {
			String party = par.getJSONObject(i).getString("party");
			String logo = par.getJSONObject(i).getString("logo");

			Partido partido = new Partido();
			partido.setParty(party);
			
			File file =new File("C:/Users/Gonzalo/Desktop/Data/Images/"+logo);
		      if(file.exists()){
		         try {
		            BufferedImage bufferedImage=ImageIO.read(file);
		            ByteArrayOutputStream byteOutStream = new ByteArrayOutputStream();
		            ImageIO.write(bufferedImage, "png", byteOutStream);
		            String encodedImage = Base64.getEncoder().encodeToString(byteOutStream.toByteArray());
				    partido.setLogo(encodedImage);
		         } catch (IOException e) {
		            e.printStackTrace();
		         }
		      }
			
			PartidoDAOImplementation.getInstance().create(partido);
		}
		
		System.out.println("Uploaded partidos");
		
		jsonData = "";
		try {
			String line;
			br = new BufferedReader(new InputStreamReader(new FileInputStream("C:/Users/Gonzalo/Desktop/Data/Leyes.json"), "UTF-8"));
			while ((line = br.readLine()) != null) {
				jsonData += line + "\n";
			}
		} catch (IOException e) {
			e.printStackTrace();
		} finally {
			try {
				if (br != null)
					br.close();
			} catch (IOException ex) {
				ex.printStackTrace();
			}
		}
		
		JSONArray law = new JSONArray(jsonData);

		for (int i = 0; i < 5; i++) {
			String name = law.getJSONObject(i).getString("name");
			String description = law.getJSONObject(i).getString("description");

			Ley ley = new Ley();
			ley.setName(name);
			ley.setDescription(description);
			LeyDAOImplementation.getInstance().create(ley);
		}
		
		System.out.println("Uploaded leyes");
		
		return "Database Uploaded";

	}
}
