package pl.coderslab.charity.user;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import javax.validation.Valid;

@Controller
public class UserController {

    private final UserService userService;
    private final UserRepository userRepository;

    public UserController(UserService userService, UserRepository userRepository) {

        this.userService = userService;
        this.userRepository = userRepository;
    }

    @GetMapping("/registry")
//    @ResponseBody
    public String showForm(Model model) {
//        User user = new User();
//        user.setUsername("Grzegorz");
//        user.setPassword("Grzegorz");
//        userService.saveUser(user);
//        return "Grzegorz";
        model.addAttribute("user", new User());
        return "registry";
    }

    @PostMapping("/registry")
    public String createUser(@Valid User user, BindingResult result, Model model) {
        if (userRepository.findByEmail(user.getEmail()) != null) {
            result.addError(new FieldError("user","email","This user exists"));
//            model.addAttribute("exists",true);
            return "registry";
        }
        userService.saveUser(user);
        return "redirect:login";
    }

    @GetMapping("/login")
    public String loginUser() {
        return "login";
    }
    @GetMapping("/form")
    public String showForm(){
        return "form";
    }

}