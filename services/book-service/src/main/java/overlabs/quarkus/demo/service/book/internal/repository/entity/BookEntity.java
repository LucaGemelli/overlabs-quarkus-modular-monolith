package overlabs.quarkus.demo.service.book.internal.repository.entity;

import io.quarkus.hibernate.orm.panache.PanacheEntityBase;
import jakarta.persistence.*;
import java.util.UUID;
import lombok.*;

@Entity(name = "Book")
@Table(name = "book", schema = "book")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BookEntity extends PanacheEntityBase {

    @Id
    @GeneratedValue
    private UUID id;

    @Column(name = "name")
    private String name;

}
