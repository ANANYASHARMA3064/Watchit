CREATE DATABASE watchlist;

CREATE TABLE watchlist (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    item_name VARCHAR(255) NOT NULL,
    item_type VARCHAR(100),
    created_at TIMESTAMP DEFAULT NOW()
);
