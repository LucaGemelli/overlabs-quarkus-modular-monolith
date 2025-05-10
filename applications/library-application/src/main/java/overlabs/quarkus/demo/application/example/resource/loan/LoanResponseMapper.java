package overlabs.quarkus.demo.application.example.resource.loan;

import overlabs.quarkus.demo.application.example.resource.book.BookResponseMapper;
import overlabs.quarkus.demo.application.example.resource.loan.response.LoanResponse;
import overlabs.quarkus.demo.service.book.domain.Book;
import overlabs.quarkus.demo.service.loan.domain.Loan;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingConstants;

@Mapper(componentModel = MappingConstants.ComponentModel.JAKARTA_CDI, uses = BookResponseMapper.class)
public interface LoanResponseMapper {
    @Mapping(target = "book", source = "book")
    @Mapping(target = "id", source = "loan.id")
    LoanResponse toLoanResponse(Loan loan, Book book);
}
