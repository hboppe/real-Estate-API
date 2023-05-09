import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateEntities1683643869416 implements MigrationInterface {
    name = 'CreateEntities1683643869416'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "email" character varying(45) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "admin" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "real_estate" ALTER COLUMN "sold" SET DEFAULT 'false'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_estate" ALTER COLUMN "sold" SET DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "admin" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "email"`);
    }

}
