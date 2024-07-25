package pl.coderslab.charity.donation;

import org.springframework.data.jpa.repository.JpaRepository;

public interface DonationRepository extends JpaRepository<Donation, Long> {

//    select sum(d.quantity) from Donation d
}
