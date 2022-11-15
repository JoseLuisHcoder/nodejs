CREATE TABLE "users" (
  "id" uuid PRIMARY KEY,
  "first_name" varchar,
  "last_name" varchar,
  "email" varchar,
  "password" varchar,
  "age" int8,
  "country" char(3),
  "gender" varchar,
  "membership_id" int
);

CREATE TABLE "movies" (
  "id" uuid PRIMARY KEY,
  "title" varchar,
  "description" text,
  "year" int,
  "duration" int,
  "director" varchar,
  "score" float,
  "clasification" varchar,
  "url_video" varchar,
  "url_cover" varchar
);

CREATE TABLE "genres" (
  "id" serial PRIMARY KEY,
  "name" varchar(30)
);

CREATE TABLE "movie_genres" (
  "id" uuid PRIMARY KEY,
  "movie_id" uuid,
  "genre_id" int
);

CREATE TABLE "series" (
  "id" uuid PRIMARY KEY,
  "title" varchar,
  "description" text,
  "year" int,
  "seasons" int,
  "genre" varchar,
  "clasification" varchar,
  "director" varchar,
  "score" float,
  "url_cover" varchar
);

CREATE TABLE "serie_genres" (
  "id" uuid PRIMARY KEY,
  "genre_id" int,
  "serie_id" uuid
);

CREATE TABLE "episodes" (
  "id" uuid PRIMARY KEY,
  "title" varchar,
  "description" text,
  "cap_number" int,
  "duration" int,
  "url_video" varchar,
  "thumbnail_url" varchar,
  "season" int,
  "serie_id" uuid
);

CREATE TABLE "memberships" (
  "id" serial PRIMARY KEY,
  "name" varchar,
  "description" text,
  "price" money,
  "duration" int,
  "devices" int
);

CREATE TABLE "profiles" (
  "id" uuid PRIMARY KEY,
  "name" varchar,
  "url_cover" varchar,
  "user_id" uuid,
  "is_kid_profile" bool
);

ALTER TABLE "movie_genres" ADD FOREIGN KEY ("movie_id") REFERENCES "movies" ("id");

ALTER TABLE "movie_genres" ADD FOREIGN KEY ("genre_id") REFERENCES "genres" ("id");

ALTER TABLE "serie_genres" ADD FOREIGN KEY ("serie_id") REFERENCES "series" ("id");

ALTER TABLE "serie_genres" ADD FOREIGN KEY ("genre_id") REFERENCES "genres" ("id");

ALTER TABLE "episodes" ADD FOREIGN KEY ("serie_id") REFERENCES "series" ("id");

ALTER TABLE "profiles" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "users" ADD FOREIGN KEY ("membership_id") REFERENCES "memberships" ("id");
