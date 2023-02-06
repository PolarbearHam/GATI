package com.family.gati.repository;

import com.family.gati.entity.Plan;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlanRepository extends JpaRepository<Plan, Long> {
    Plan findByGroupId(int groupId);
//    Plan deletePlanById(int id);
}
