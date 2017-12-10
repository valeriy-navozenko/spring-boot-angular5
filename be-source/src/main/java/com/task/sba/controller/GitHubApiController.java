package com.task.sba.controller;

import com.task.sba.model.github.CommitResponse;
import com.task.sba.service.GitHubApiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api")
public class GitHubApiController {

    private static final String DEFAULT_SCAN_REPOSITORY = "angular/angular";

    @Autowired
    GitHubApiService githubApiService;

    @RequestMapping(value = "/commits", method = RequestMethod.GET)
    public List<CommitResponse> greeting(@RequestParam(value = "repo", defaultValue = DEFAULT_SCAN_REPOSITORY) String name) {
        return githubApiService.getLastCommitsForRepo(name);
    }

}
