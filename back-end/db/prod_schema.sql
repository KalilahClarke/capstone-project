DROP DATABASE IF EXISTS task_capstone;
DROP TABLE IF EXISTS users, requests, ratings, reviews;
CREATE DATABASE task_capstone;

\c task_capstone;
CREATE TABLE users (
    uuid TEXT PRIMARY KEY UNIQUE NOT NULL,
    firstname TEXT NOT NULL,
    lastname TEXT NOT NULL,
    dob TEXT NOT NULL,
    address TEXT NOT NULL,
    unit TEXT,
    city TEXT NOT NULL,
    state TEXT NOT NULL,
    zipcode VARCHAR(5) NOT NULL,
    phonenumber VARCHAR(10) NOT NULL,
    email TEXT NOT NULL,
    verified BOOLEAN default false,
    user_type TEXT NOT NULL,
    profilephoto TEXT UNIQUE,  
    languages TEXT,
    verification_type TEXT
);

CREATE TABLE requests (
    id SERIAL PRIMARY KEY UNIQUE,
    elder_id TEXT REFERENCES users(uuid),
    elder_img TEXT REFERENCES users(profilephoto),
    volunteer_id TEXT REFERENCES users(uuid) DEFAULT NULL,
    volunteer_img TEXT REFERENCES users(profilephoto) DEFAULT NULL,
    req_date TEXT NOT NULL,
    title TEXT,
    description TEXT NOT NULL,
    location TEXT NOT NULL,
    time TEXT,
    assigned BOOLEAN DEFAULT false,
    complete BOOLEAN DEFAULT false,
    image TEXT
);


CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    reviewer_id TEXT references users(uuid) DEFAULT NULL,
    reviewer_img TEXT references users(profilephoto),
    reviewed_id  TEXT references users(uuid),
    description TEXT NOT NULL,
    post_date DATE NOT NULL,
    request_id INT references requests(id)
);

-- CREATE TABLE favorites{
--     id SERIAL PRIMARY KEY,
--     user_favorite  TEXT references users(uuid),


-- }
-- CREATE TABLE ratings (
--     id SERIAL PRIMARY KEY,
--     rating INT NOT NULL,
--     request_id INT references requests(id),
--     rating_user_id TEXT references users(uuid),
--     rated_user_id TEXT references users(uuid) DEFAULT NULL
-- );