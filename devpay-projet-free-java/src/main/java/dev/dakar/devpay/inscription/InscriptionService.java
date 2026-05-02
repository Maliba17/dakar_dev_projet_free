package dev.dakar.devpay.inscription;

import org.springframework.stereotype.Service;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class InscriptionService {

    private final InscriptionRepository repo;

    public InscriptionService(InscriptionRepository repo) {
        this.repo = repo;
    }

    // ➕ Inscription
    public Inscription inscrire(Inscription insc) {
        return repo.save(insc);
    }

    // 📥 Liste
    public List<Inscription> getAll() {
        return repo.findAll();
    }

    // 🎯 Évaluation
    public Inscription evaluer(Long id, Double note) {
        Inscription insc = repo.findById(id)
                .orElseThrow(() -> new RuntimeException("Inscription non trouvée avec id : " + id));

        insc.setNoteQuiz(note);
        insc.setStatutEvaluation(note >= 10 ? "ADMIS" : "NON_ADMIS");

        return repo.save(insc);
    }

    // 📊 Statistiques
    public Map<String, Object> getStats() {

        List<Inscription> list = repo.findAll();

        long total = list.size();

        long admis = list.stream()
                .filter(i -> "ADMIS".equals(i.getStatutEvaluation()))
                .count();

        double moyenne = list.stream()
                .filter(i -> i.getNoteQuiz() != null)
                .mapToDouble(Inscription::getNoteQuiz)
                .average()
                .orElse(0.0);

        double tauxReussite = total == 0 ? 0.0 : (admis * 100.0 / total);

        Map<String, Object> stats = new HashMap<>();
        stats.put("total", total);
        stats.put("admis", admis);
        stats.put("moyenne", moyenne);
        stats.put("tauxReussite", tauxReussite);

        return stats;
    }
}