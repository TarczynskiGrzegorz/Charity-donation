package pl.coderslab.charity.donation;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import pl.coderslab.charity.user.UserRepository;
import pl.coderslab.charity.user.UserService;

@Controller
public class DonationController {
    private final UserService userService;
    private final UserRepository userRepository;

    public DonationController(UserService userService, UserRepository userRepository) {

        this.userService = userService;
        this.userRepository = userRepository;
    }
    @GetMapping("/form")
    public String showForm(){


        return "form";
    }

}
