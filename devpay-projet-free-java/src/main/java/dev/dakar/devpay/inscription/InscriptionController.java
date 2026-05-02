package dev.dakar.devpay.inscription;

import dev.dakar.devpay.dto.EvaluationDTO;
import dev.dakar.devpay.dto.InscriptionDTO;
import dev.dakar.devpay.entity.Etudiant;
import dev.dakar.devpay.formation.Formation;
import dev.dakar.devpay.repository.EtudiantRepository;
import dev.dakar.devpay.formation.FormationRepository;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1")
public class InscriptionController {

    private final InscriptionService service;
    private final EtudiantRepository etudiantRepo;
    private final FormationRepository formationRepo;

    public InscriptionController(InscriptionService service,
                                 EtudiantRepository etudiantRepo,
                                 FormationRepository formationRepo) {
        this.service = service;
        this.etudiantRepo = etudiantRepo;
        this.formationRepo = formationRepo;
    }

    @PostMapping("/inscriptions")
    public Inscription inscrire(@RequestBody @Valid InscriptionDTO dto) {

        Etudiant etudiant = etudiantRepo.findById(dto.getEtudiantId())
                .orElseThrow(() -> new RuntimeException("Étudiant introuvable"));

        Formation formation = formationRepo.findById(dto.getFormationId())
                .orElseThrow(() -> new RuntimeException("Formation introuvable"));

        Inscription insc = new Inscription();
        insc.setEtudiant(etudiant);
        insc.setFormation(formation);

        return service.inscrire(insc);
    }

    @GetMapping("/inscriptions")
    public List<Inscription> getAll() {
        return service.getAll();
    }

    @PostMapping("/inscriptions/{id}/evaluer")
    public Inscription evaluer(@PathVariable Long id,
                              @RequestBody @Valid EvaluationDTO dto) {
        return service.evaluer(id, dto.getNote());
    }

    @GetMapping("/statistiques")
    public Map<String, Object> stats() {
        return service.getStats();
    }
}