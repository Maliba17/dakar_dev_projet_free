package dev.dakar.devpay.inscription;

import dev.dakar.devpay.entity.Etudiant;
import dev.dakar.devpay.formation.Formation;
import jakarta.persistence.*;

@Entity
public class Inscription {

   
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private Etudiant etudiant;

    @ManyToOne
    private Formation formation;

    private String statut = "EN_COURS";

    private Double noteQuiz;

    private String statutEvaluation;

    public Inscription() {}

    // getters et setters
    public Double getNoteQuiz() {
    return noteQuiz;
}

public void setNoteQuiz(Double noteQuiz) {
    this.noteQuiz = noteQuiz;
}

public String getStatutEvaluation() {
    return statutEvaluation;
}

public void setStatutEvaluation(String statutEvaluation) {
    this.statutEvaluation = statutEvaluation;

}
public String getStatut() {
    return statut;
}

public void setStatut(String statut) {
    this.statut = statut;
}
public Long getId() { return id; }

public Etudiant getEtudiant() { return etudiant; }
public void setEtudiant(Etudiant etudiant) { this.etudiant = etudiant; }

public Formation getFormation() { return formation; }
public void setFormation(Formation formation) { this.formation = formation; }
}