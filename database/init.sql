-- public."Gender" definition
-- Drop table
-- DROP TABLE public."Gender";
CREATE TABLE public."Gender" (
    id SERIAL NOT NULL PRIMARY KEY,
    "name" varchar NOT NULL
);
INSERT INTO public."Gender" ("name") VALUES('male');
INSERT INTO public."Gender" ("name") VALUES('female');
INSERT INTO public."Gender" ("name") VALUES('other');
INSERT INTO public."Gender" ("name") VALUES('decline to answer');

-- public."Product" definition
-- Drop table
-- DROP TABLE public."Product";
CREATE TABLE public."Product" (
    id SERIAL NOT NULL PRIMARY KEY,
    "name" varchar NOT NULL
);
INSERT INTO public."Product" ("name") VALUES('phones 1');
INSERT INTO public."Product" ("name") VALUES('phones 2');
INSERT INTO public."Product" ("name") VALUES('phones 3');
INSERT INTO public."Product" ("name") VALUES('modems 1');
INSERT INTO public."Product" ("name") VALUES('modems 2');
INSERT INTO public."Product" ("name") VALUES('modems 3');
INSERT INTO public."Product" ("name") VALUES('sim cards 1');
INSERT INTO public."Product" ("name") VALUES('sim cards 2');
INSERT INTO public."Product" ("name") VALUES('sim cards 3');

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
INSERT INTO public."User"
(lastname, firstname, birth, gender, housenumber, zipcode, streetname, city, mobilenumber, email)
VALUES('Barros', 'Luiz', '1994-02-12', 1, '123', '456', '789', 'João Pessoa', '+5583999322442', 'luizhenriquefbb@gmail.com');


CREATE TABLE public."UserProduct" (
    id serial NOT null primary KEY,
    "user" int NOT NULL,
    product int NOT NULL,
    CONSTRAINT newtable_fk FOREIGN KEY (product) REFERENCES public."Product"(id) ON DELETE CASCADE,
    CONSTRAINT UserProduct_fk FOREIGN KEY ("user") REFERENCES public."User"(id) ON DELETE CASCADE
);
INSERT INTO public."UserProduct" ("user", product) VALUES(1, 1);
