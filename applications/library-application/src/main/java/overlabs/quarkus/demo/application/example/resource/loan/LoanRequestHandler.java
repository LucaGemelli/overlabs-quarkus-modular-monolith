package overlabs.quarkus.demo.application.example.resource.loan;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.ws.rs.NotFoundException;
import java.util.List;
import overlabs.quarkus.demo.application.example.resource.loan.request.AddLoanRequest;
import overlabs.quarkus.demo.application.example.resource.loan.response.LoanResponse;
import overlabs.quarkus.demo.service.book.BookService;
import overlabs.quarkus.demo.service.book.domain.Book;
import overlabs.quarkus.demo.service.loan.LoanService;
import overlabs.quarkus.demo.service.loan.domain.Loan;
import lombok.AllArgsConstructor;

@ApplicationScoped
@AllArgsConstructor
public class LoanRequestHandler {

    LoanService loanService;

    BookService bookService;

    LoanResponseMapper loanResponseMapper;

    public List<LoanResponse> getLoans() {
        return loanService.findAllLoans().stream()
            .map(loan -> loanResponseMapper.toLoanResponse(
                loan,
                bookService.findBookById(loan.bookId())
                    .orElseThrow(() -> new NotFoundException("Book not found " + loan.bookId()))
            ))
            .toList();
    }

    public LoanResponse addLoan(AddLoanRequest addLoanRequest) {
        Book book = bookService.findBookById(addLoanRequest.bookId())
            .orElseThrow(() -> new NotFoundException("Book not found " + addLoanRequest.bookId()));

        Loan loan = loanService.addLoan(
            addLoanRequest.bookId(),
            addLoanRequest.userId()
        );
        return loanResponseMapper.toLoanResponse(
            loan,
            book
        );
    }
}
