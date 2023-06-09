package com.family.gati.service;

import com.family.gati.dto.MissionDto;
import com.family.gati.dto.MissionImageDto;
import com.family.gati.dto.MissionImageUpdateDto;

import java.util.List;

public interface MissionImageService {
    List<MissionImageDto> findByMissionId(Integer missionId);
    MissionImageDto insertMissionImage(MissionImageDto missionImageDto);
    MissionImageDto updateMissionImage(MissionImageUpdateDto missionImageUpdateDto);
    MissionDto deleteMissionImageById(Integer id);
    MissionImageDto findById(Integer id);
}
