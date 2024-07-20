package pl.coderslab.charity.donation;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import pl.coderslab.charity.category.Category;
import pl.coderslab.charity.category.CategoryRepository;
import pl.coderslab.charity.institution.Institution;
import pl.coderslab.charity.institution.InstitutionRepository;
import pl.coderslab.charity.user.UserRepository;
import pl.coderslab.charity.user.UserService;

import java.util.List;

@Controller
public class DonationController {
    private final UserService userService;
    private final UserRepository userRepository;
    private final CategoryRepository categoryRepository;
    private final InstitutionRepository institutionRepository;

    public DonationController(UserService userService, UserRepository userRepository, InstitutionRepository institutionRepository, CategoryRepository categoryRepository) {

        this.userService = userService;
        this.userRepository = userRepository;
        this.categoryRepository = categoryRepository;
        this.institutionRepository = institutionRepository;
    }

    @GetMapping("/form")
    public String showForm(Model model, @AuthenticationPrincipal UserDetails user) {
        Donation donation = new Donation();
        model.addAttribute("donation", donation);

        return "form";
    }
    @PostMapping("/form")
    @ResponseBody
    public String showInfo(Donation donation, Model model){
        return donation.toString();
    }

    @ModelAttribute("categories")
    public List<Category> getCategories() {
        return categoryRepository.findAll();
    }

    @ModelAttribute("institutions")
    public List<Institution> getInstitutions() {
        return institutionRepository.findAll();
    }

}
