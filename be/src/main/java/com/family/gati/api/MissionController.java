package com.family.gati.api;

import com.family.gati.dto.MissionDto;
import com.family.gati.service.MissionService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiParam;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/missions")
@Api(tags = "Mission API")
public class MissionController {
    private final MissionService missionService;

    @GetMapping("/{groupId}")
    public ResponseEntity<?> getMissionsByGroupId(@ApiParam(value = "path로 groupId 전달받음")@PathVariable("groupId") Integer groupId) {
        List<MissionDto> findDtos = missionService.findByGroupId(groupId);
        return ResponseEntity.ok(findDtos);
    }

//    @GetMapping("/mission/{id}")
//    public ResponseEntity<?> getMissionById(@ApiParam(value = "path로 id 전달받음")@PathVariable("id") Integer id) {
//        MissionDto findDto = missionService.findById(id);
//        return ResponseEntity.ok(findDto);
//    }

    @PostMapping("/mission")
    public ResponseEntity<?> addMission(@RequestBody MissionDto missionDto) {
        MissionDto resultDto = missionService.insertMission(missionDto);
        return ResponseEntity.ok(resultDto);
    }

    @PutMapping("/mission")
    public ResponseEntity<?> updateMission(@RequestBody MissionDto missionDto) {
        MissionDto resultDto = missionService.updateMission(missionDto);
        return ResponseEntity.ok(resultDto);
    }

    @DeleteMapping("/mission/{id}")
    public ResponseEntity<?> deleteMission(@ApiParam(value = "삭제 할 missionId")@PathVariable("id") Integer id) {
        missionService.deleteMissionById(id);
        return ResponseEntity.ok(null);
    }
}
