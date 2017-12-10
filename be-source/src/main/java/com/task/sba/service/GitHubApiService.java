package com.task.sba.service;

import com.task.sba.model.github.CommitResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.List;

@Service
public class GitHubApiService {

    private static final Logger logger = LoggerFactory.getLogger(GitHubApiService.class);
    private static final String API_REQUEST_URL = "https://api.github.com/repos/%s/commits";
    private static final Integer COMMITS_LIMIT = 25;

    @Autowired
    private RestTemplate restTemplate;

    public List<CommitResponse> getLastCommitsForRepo(final String repo) {
        logger.debug("Get commits for repository " + repo);
        String url = String.format(API_REQUEST_URL, repo);
        CommitResponse[] result = restTemplate.getForObject(url, CommitResponse[].class);
        List<CommitResponse> commits = Arrays.asList(result);

        if (result.length > COMMITS_LIMIT) {
            return commits.subList(0, COMMITS_LIMIT);
        }
        return commits;
    }
}
