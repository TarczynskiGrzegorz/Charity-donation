package pl.coderslab.charity;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import pl.coderslab.charity.donation.Donation;
import pl.coderslab.charity.donation.DonationRepository;
import pl.coderslab.charity.institution.Institution;
import pl.coderslab.charity.institution.InstitutionRepository;

import java.util.List;


@Controller
public class HomeController {
    private final DonationRepository donationRepository ;
    private final InstitutionRepository institutionRepository ;

    public HomeController(DonationRepository donationRepository, InstitutionRepository institutionRepository){
        this.donationRepository=donationRepository;
        this.institutionRepository=institutionRepository;
    }


    @RequestMapping("/")
    public String homeAction(Model model){

       List<Donation> donations =  donationRepository.findAll();
       int bags = donations.stream().map(v->v.getQuantity()).reduce(0, (sub, el)->sub+el);
       model.addAttribute("bags",bags);
       model.addAttribute("donationsAmount",donations.size());
       List<Institution> institutions = institutionRepository.findAll();
       model.addAttribute("institutions",institutions);
        return "index";
    }
}
