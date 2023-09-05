/*Connecting to the database automatically creates it*/
\connect go_party;

/*Create user table in public schema*/
CREATE TABLE public.user (
    id SERIAL PRIMARY KEY,
    name TEXT,
    created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

COMMENT ON TABLE public.user IS
'Forum users.';

/*Create events table in public schema*/
CREATE TABLE public.events (
  id SERIAL PRIMARY KEY,
  title TEXT,
  name TEXT,
  isActive boolean,
  goinTo json NULL,
  image bigint,
  picture json,
  video TEXT,
  price bigint,
  address TEXT,
  about TEXT,
  created TEXT,
  latitude double precision,
  longitude double precision,
  tags json,
  likes json,
  followers json
);

COMMENT ON TABLE public.user IS
'Forum events.';