package dev.dakar.devpay.controller;

import dev.dakar.devpay.dto.EtudiantDTO;
import dev.dakar.devpay.entity.Etudiant;
import dev.dakar.devpay.service.EtudiantService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/etudiants")
public class EtudiantController {

    private final EtudiantService service;

    public EtudiantController(EtudiantService service) {
        this.service = service;
    }

    @GetMapping
    public List<Etudiant> getAll() {
        return service.getAll();
    }

    @GetMapping("/{id}")
    public Etudiant getById(@PathVariable Long id) {
        return service.getById(id);
    }

    @PostMapping
    public Etudiant create(@RequestBody @Valid EtudiantDTO dto) {
        Etudiant e = new Etudiant();
        e.setNom(dto.getNom());
        e.setPrenom(dto.getPrenom());
        e.setEmail(dto.getEmail());
        return service.create(e);
    }

    @PutMapping("/{id}")
    public Etudiant update(@PathVariable Long id, @RequestBody @Valid EtudiantDTO dto) {
        Etudiant e = new Etudiant();
        e.setNom(dto.getNom());
        e.setPrenom(dto.getPrenom());
        e.setEmail(dto.getEmail());
        return service.update(id, e);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }
}