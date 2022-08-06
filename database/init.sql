-- public."Gender" definition
-- Drop table
-- DROP TABLE public."Gender";
CREATE TABLE public."Gender" (
    id SERIAL NOT NULL PRIMARY KEY,
    "name" varchar NOT NULL
);
INSERT INTO public."Gender" (id, "name") VALUES(1, 'male');
INSERT INTO public."Gender" (id, "name") VALUES(2, 'female');
INSERT INTO public."Gender" (id, "name") VALUES(3, 'other');
INSERT INTO public."Gender" (id, "name") VALUES(4, 'decline to answer');

-- public."Product" definition
-- Drop table
-- DROP TABLE public."Product";
CREATE TABLE public."Product" (
    id SERIAL NOT NULL PRIMARY KEY,
    "name" varchar NOT NULL
);
INSERT INTO public."Product" (id, "name") VALUES(1, 'phones 1');
INSERT INTO public."Product" (id, "name") VALUES(2, 'phones 2');
INSERT INTO public."Product" (id, "name") VALUES(3, 'phones 3');
INSERT INTO public."Product" (id, "name") VALUES(4, 'modems 1');
INSERT INTO public."Product" (id, "name") VALUES(5, 'modems 2');
INSERT INTO public."Product" (id, "name") VALUES(6, 'modems 3');
INSERT INTO public."Product" (id, "name") VALUES(7, 'sim cards 1');
INSERT INTO public."Product" (id, "name") VALUES(8, 'sim cards 2');
INSERT INTO public."Product" (id, "name") VALUES(9, 'sim cards 3');

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

CREATE TABLE public.UserProduct (
    id serial NOT null primary KEY,
    "user" int NOT NULL,
    product int NOT NULL,
    CONSTRAINT newtable_fk FOREIGN KEY (product) REFERENCES public."Product"(id) ON DELETE CASCADE,
    CONSTRAINT userproduct_fk FOREIGN KEY ("user") REFERENCES public."User"(id) ON DELETE CASCADE
);