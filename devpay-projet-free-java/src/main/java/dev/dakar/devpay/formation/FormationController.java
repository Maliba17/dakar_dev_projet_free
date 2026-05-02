package dev.dakar.devpay.formation;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/formations")
public class FormationController {

    private final FormationRepository repo;

    public FormationController(FormationRepository repo) {
        this.repo = repo;
    }

    @GetMapping
    public List<Formation> getAll() {
        return repo.findAll();
    }
}