package com.task.sba.model.github;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class AuthorDto {
    String login;
    String name;
    String email;
    String date;
    String url;

    @JsonProperty("avatar_url")
    String avatarUrl;
}
