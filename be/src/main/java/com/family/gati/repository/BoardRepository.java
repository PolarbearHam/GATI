package com.family.gati.repository;

import com.family.gati.entity.Board;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BoardRepository extends JpaRepository<Board, Integer> {
    List<Board> findByGroupId(Integer groupId);
    List<Board> findByGroupIdOrderByCreateTimeDesc(Integer groupId);
}
