CREATE TABLE "health_checks" (
	"id" serial PRIMARY KEY NOT NULL,
	"status" varchar(50) NOT NULL,
	"checked_at" timestamp DEFAULT now() NOT NULL
);
