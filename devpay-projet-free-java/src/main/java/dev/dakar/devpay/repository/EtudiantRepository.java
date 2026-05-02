package dev.dakar.devpay.repository;

import dev.dakar.devpay.entity.Etudiant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface EtudiantRepository extends JpaRepository<Etudiant, Long> {

}
