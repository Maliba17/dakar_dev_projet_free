package dev.dakar.devpay.formation;

import jakarta.persistence.*;

@Entity
public class Formation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String titre;
    private String description;

    public Formation() {}

    public Formation(String titre, String description) {
        this.titre = titre;
        this.description = description;
    }

    public Long getId() { return id; }

    public String getTitre() { return titre; }
    public void setTitre(String titre) { this.titre = titre; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
}