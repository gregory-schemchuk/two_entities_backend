import {dbClient} from "../../../infrastructure/lib/dbClient";
import {DatabaseInternalError} from "../../../domain/error/DatabaseInternalError";
import {AdditionalDataQueryRepository} from "../AdditionalDataQueryRepository";

export class AdditionalDataQueryRepositoryImpl implements AdditionalDataQueryRepository {
    async getById(id: string): Promise<any> {
        try {
            let retVal = await dbClient.additionalData.findMany({where: {id}});
            return retVal[0];
        } catch (e) {
            throw new DatabaseInternalError(e);
        }
    }

    async getList(limit: number, offset: number): Promise<Array<any>> {
        try {
            let retVal = await dbClient.additionalData.findMany({skip: offset, take: limit});
            return retVal;
        } catch (e) {
            throw new DatabaseInternalError(e);
        }
    }
}