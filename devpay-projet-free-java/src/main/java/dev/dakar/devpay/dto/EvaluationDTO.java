package dev.dakar.devpay.dto;

import jakarta.validation.constraints.NotNull;

public class EvaluationDTO {

    @NotNull
    private Double note;

    public Double getNote() { return note; }
    public void setNote(Double note) { this.note = note; }
}