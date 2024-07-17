package pl.coderslab.charity.user;

import lombok.Getter;
import lombok.Setter;
import pl.coderslab.charity.role.Role;

import javax.persistence.*;
import java.util.Set;

@Entity
@Getter
@Setter
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false, unique = true, length = 60)
    private String email;
    private String password;
    private int enabled;
    @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinTable(name = "user_role", joinColumns = @JoinColumn(name = "user_id"),
                    inverseJoinColumns = @JoinColumn(name = "role_id"))
    private Set<Role> roles;
    //gettery, settery

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", email='" + email + '\'' +
                '}';
    }
}