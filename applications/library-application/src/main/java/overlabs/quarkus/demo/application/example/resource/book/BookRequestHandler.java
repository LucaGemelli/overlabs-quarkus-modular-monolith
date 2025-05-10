package overlabs.quarkus.demo.application.example.resource.book;

import jakarta.enterprise.context.ApplicationScoped;
import java.util.List;
import overlabs.quarkus.demo.application.example.resource.book.request.AddBookRequest;
import overlabs.quarkus.demo.application.example.resource.book.response.BookResponse;
import overlabs.quarkus.demo.service.book.BookService;
import lombok.AllArgsConstructor;

@ApplicationScoped
@AllArgsConstructor
public class BookRequestHandler {
    BookService bookService;

    BookResponseMapper bookResponseMapper;

    public List<BookResponse> getBooks() {
        return bookService.findAllBooks().stream().map(bookResponseMapper::toBookResponse).toList();
    }

    public BookResponse createBook(AddBookRequest addBookRequest) {
        return bookResponseMapper.toBookResponse(bookService.addBook(addBookRequest.name()));
    }
}
