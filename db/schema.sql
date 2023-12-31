DROP DATABASE IF EXISTS user_db;
CREATE DATABASE user_db;

Use user_db;

CREATE TABLE blogPosts (
    user_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    post_topic VARCHAR(255) NOT NULL,
    post_content VARCHAR(255) NOT NULL,
    post_comment VARCHAR(255) NOT NULL,
    date_created DATETIME NOT NULL
) ;