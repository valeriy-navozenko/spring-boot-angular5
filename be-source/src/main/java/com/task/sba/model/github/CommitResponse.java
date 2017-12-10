package com.task.sba.model.github;

import lombok.Data;

@Data
public class CommitResponse {
    private String url;
    private String sha;
    private CommitDto commit;
    private AuthorDto author;
}
