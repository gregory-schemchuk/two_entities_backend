import {dbClient} from "../../../infrastructure/lib/dbClient";
import {DatabaseInternalError} from "../../../domain/error/DatabaseInternalError";
import {UserRepository} from "../UserRepository";

export class UserRepositoryImpl implements UserRepository {
    async getById(id: string): Promise<any> {
        try {
            let retVal = await dbClient.user.findMany({where: {id}});
            return retVal[0];
        } catch (e) {
            throw new DatabaseInternalError(e);
        }
    }

    async store(entity): Promise<void> {
        try {
            await dbClient.user.upsert({where: {id: entity.id}, update: {
                    name: entity.name,
                    score: entity.score,
                    birthDate: entity.birthDate,
                    additionalData: entity.additionalData
                }, create: {
                    id: entity.id,
                    name: entity.name,
                    score: entity.score,
                    birthDate: entity.birthDate,
                    additionalData: entity.additionalData
                }});
        } catch (e) {
            throw new DatabaseInternalError(e);
        }
    }

    async delete(id: string): Promise<void> {
        try {
            let retVal = await dbClient.user.delete({where: {id}});
        } catch (e) {
            throw new DatabaseInternalError(e);
        }
    }
}