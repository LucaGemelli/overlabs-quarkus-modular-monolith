package overlabs.quarkus.demo.service.book;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.transaction.Transactional;
import lombok.extern.slf4j.Slf4j;
import overlabs.quarkus.demo.service.book.domain.Book;
import overlabs.quarkus.demo.service.book.internal.repository.BookRepository;
import overlabs.quarkus.demo.service.book.internal.repository.entity.BookEntity;
import overlabs.quarkus.demo.service.book.mapper.BookMapper;
import overlabs.quarkus.demo.service.book.external.OpenLibraryApi;

import org.eclipse.microprofile.rest.client.inject.RestClient;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@ApplicationScoped
@Slf4j
public class BookService {

    @Inject
    BookRepository bookRepository;
    @Inject
    BookMapper bookMapper;
    @RestClient
    @Inject
    OpenLibraryApi openLibraryApi;

    public List<Book> findAllBooks() {
        return bookRepository.findAll().list().stream().map(bookMapper::toBook).toList();
    }

    public Optional<Book> findBookById(UUID id) {
        return bookRepository.findByIdOptional(id).map(bookMapper::toBook);
    }

    @Transactional
    public Book addBook(String name) {
        BookEntity bookEntity = BookEntity.builder()
            .name(name)
            .build();
        bookRepository.persist(bookEntity);

        var restResponse = openLibraryApi.getBookByIsbn("0451526538");
        log.info("REST - OpenLibrary response: {}", restResponse);

        return bookMapper.toBook(bookEntity);
    }
}
