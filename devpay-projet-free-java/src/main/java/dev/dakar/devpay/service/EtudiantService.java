package dev.dakar.devpay.service;

import dev.dakar.devpay.entity.Etudiant;
import dev.dakar.devpay.repository.EtudiantRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EtudiantService {

    private final EtudiantRepository repository;

    public EtudiantService(EtudiantRepository repository) {
        this.repository = repository;
    }

    // 📥 Liste tous les étudiants
    public List<Etudiant> getAll() {
        return repository.findAll();
    }

    // 🔍 Trouver par ID
    public Etudiant getById(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Étudiant introuvable avec id : " + id));
    }

    // ➕ Créer étudiant
    public Etudiant create(Etudiant etudiant) {
        return repository.save(etudiant);
    }

    // ✏️ Modifier étudiant
    public Etudiant update(Long id, Etudiant etudiant) {
        Etudiant existing = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Étudiant introuvable avec id : " + id));

        existing.setNom(etudiant.getNom());
        existing.setPrenom(etudiant.getPrenom());
        existing.setEmail(etudiant.getEmail());

        return repository.save(existing);
    }

    // ❌ Supprimer étudiant
    public void delete(Long id) {
        if (!repository.existsById(id)) {
            throw new RuntimeException("Étudiant introuvable avec id : " + id);
        }
        repository.deleteById(id);
    }
}