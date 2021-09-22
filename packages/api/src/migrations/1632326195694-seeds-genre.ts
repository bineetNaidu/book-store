import { MigrationInterface, QueryRunner } from 'typeorm';

export class seedsGenre1632326195694 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
insert into "genre" (name, "createdAt", "updatedAt") values ('Animation|Fantasy|Musical|IMAX', 'now()', 'now()');
insert into "genre" (name, "createdAt", "updatedAt") values ('Comedy|Crime|Drama|Mystery|Romance', 'now()', 'now()');
insert into "genre" (name, "createdAt", "updatedAt") values ('Action|Drama', 'now()', 'now()');
insert into "genre" (name, "createdAt", "updatedAt") values ('Documentary', 'now()', 'now()');
insert into "genre" (name, "createdAt", "updatedAt") values ('Crime|Thriller', 'now()', 'now()');
insert into "genre" (name, "createdAt", "updatedAt") values ('Animation|Children', 'now()', 'now()');
insert into "genre" (name, "createdAt", "updatedAt") values ('Drama|Thriller', 'now()', 'now()');
insert into "genre" (name, "createdAt", "updatedAt") values ('Children|Drama', 'now()', 'now()');
insert into "genre" (name, "createdAt", "updatedAt") values ('Crime|Drama|Film-Noir|Thriller', 'now()', 'now()');
insert into "genre" (name, "createdAt", "updatedAt") values ('Comedy', 'now()', 'now()');
insert into "genre" (name, "createdAt", "updatedAt") values ('Drama', 'now()', 'now()');
insert into "genre" (name, "createdAt", "updatedAt") values ('Action|Comedy|Fantasy|Horror', 'now()', 'now()');
insert into "genre" (name, "createdAt", "updatedAt") values ('Action|Drama|Romance', 'now()', 'now()');
insert into "genre" (name, "createdAt", "updatedAt") values ('Comedy|Romance', 'now()', 'now()');
insert into "genre" (name, "createdAt", "updatedAt") values ('Sci-Fi', 'now()', 'now()');
		`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
		drop table "genre";
		`);
  }
}
