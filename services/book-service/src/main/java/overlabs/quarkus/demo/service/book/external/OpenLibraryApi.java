package overlabs.quarkus.demo.service.book.external;

import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import org.eclipse.microprofile.rest.client.inject.RegisterRestClient;

import java.util.Map;

@Path("/api/books")
@RegisterRestClient(configKey = "open-library-api")
@Produces(MediaType.APPLICATION_JSON)
public interface OpenLibraryApi {

    @GET
    @Path("?bibkeys=ISBN:{isbn}&format=json&jscmd=data")
    Map<String, Object> getBookByIsbn(@PathParam("isbn") String isbn);
}
