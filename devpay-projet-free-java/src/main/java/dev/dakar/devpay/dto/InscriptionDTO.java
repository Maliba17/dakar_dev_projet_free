package dev.dakar.devpay.dto;

import jakarta.validation.constraints.NotNull;

public class InscriptionDTO {

    @NotNull
    private Long etudiantId;

    @NotNull
    private Long formationId;

    public Long getEtudiantId() { return etudiantId; }
    public void setEtudiantId(Long etudiantId) { this.etudiantId = etudiantId; }

    public Long getFormationId() { return formationId; }
    public void setFormationId(Long formationId) { this.formationId = formationId; }
}