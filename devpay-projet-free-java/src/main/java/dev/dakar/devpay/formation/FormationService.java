package dev.dakar.devpay.formation;

import org.springframework.stereotype.Service;



@Service
public class FormationService {

    private final FormationRepository formationRepository;

    public FormationService(FormationRepository formationRepository) {
        this.formationRepository = formationRepository;
    }

    public Formation getFormation(Long id) {
    if (id == null) {
        throw new IllegalArgumentException("ID ne peut pas être null");
    }

    return formationRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Formation non trouvée"));
}
    
}