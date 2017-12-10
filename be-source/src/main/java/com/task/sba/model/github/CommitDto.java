package com.task.sba.model.github;


import lombok.Data;

@Data
public class CommitDto {

    private AuthorDto author;
    private AuthorDto committer;
    private String message;
    private CommitTreeDto tree;
    private String url;

}
