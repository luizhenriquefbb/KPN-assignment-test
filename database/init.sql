-- public."Gender" definition
-- Drop table
-- DROP TABLE public."Gender";
CREATE TABLE public."Gender" (
    id SERIAL NOT NULL PRIMARY KEY,
    "name" varchar NOT NULL
);

-- public."Product" definition
-- Drop table
-- DROP TABLE public."Product";
CREATE TABLE public."Product" (
    id SERIAL NOT NULL PRIMARY KEY,
    "name" varchar NOT NULL
);
INSERT INTO public."Gender" (id, "name") VALUES(1, 'male');
INSERT INTO public."Gender" (id, "name") VALUES(2, 'female');
INSERT INTO public."Gender" (id, "name") VALUES(3, 'other');
INSERT INTO public."Gender" (id, "name") VALUES(4, 'decline ot answer');



-- public."User" definition
-- Drop table
-- DROP TABLE public."User";
CREATE TABLE public."User" (
    id SERIAL NOT NULL PRIMARY KEY,
    lastname varchar NOT NULL,
    firstname varchar NOT NULL,
    birth date NOT NULL,
    gender int4 NOT NULL,
    housenumber varchar NULL,
    zipcode varchar NULL,
    streetname varchar NULL,
    city varchar NOT NULL,
    mobilenumber varchar NOT NULL,
    email varchar NOT NULL,
    CONSTRAINT "User_email_key" UNIQUE (email),
    CONSTRAINT user_fk FOREIGN KEY (gender) REFERENCES public."Gender"(id)
);
