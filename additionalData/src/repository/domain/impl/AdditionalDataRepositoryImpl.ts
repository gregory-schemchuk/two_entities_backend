import {dbClient} from "../../../infrastructure/lib/dbClient";
import {DatabaseInternalError} from "../../../domain/error/DatabaseInternalError";
import {AdditionalDataRepository} from "../AdditionalDataRepository";

export class AdditionalDataRepositoryImpl implements AdditionalDataRepository {
    async getById(id: string): Promise<any> {
        try {
            let retVal = await dbClient.additionalData.findMany({where: {id}});
            return retVal[0];
        } catch (e) {
            throw new DatabaseInternalError(e);
        }
    }

    async store(entity): Promise<void> {
        try {
            await dbClient.additionalData.upsert({where: {id: entity.id}, update: {
                    name: entity.name,
                    score: entity.score,
                    birthDate: entity.birthDate
                },
                create: {
                    id: entity.id,
                    name: entity.name,
                    score: entity.score,
                    birthDate: entity.birthDate
                }});
        } catch (e) {
            throw new DatabaseInternalError(e);
        }
    }

    async delete(id: string): Promise<void> {
        try {
            let retVal = await dbClient.additionalData.delete({where: {id}});
        } catch (e) {
            throw new DatabaseInternalError(e);
        }
    }
}