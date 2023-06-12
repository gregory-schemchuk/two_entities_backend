import {dbClient} from "../../../infrastructure/lib/dbClient";
import {DatabaseInternalError} from "../../../domain/error/DatabaseInternalError";
import {UserQueryRepository} from "../UserQueryRepository";

export class UserQueryRepositoryImpl implements UserQueryRepository {
    async getById(id: string): Promise<any> {
        try {
            let retVal = await dbClient.user.findMany({where: {id}});
            return retVal[0];
        } catch (e) {
            throw new DatabaseInternalError(e);
        }
    }

    async getList(limit: number, offset: number): Promise<Array<any>> {
        try {
            let retVal = await dbClient.user.findMany({skip: offset, take: limit});
            return retVal;
        } catch (e) {
            throw new DatabaseInternalError(e);
        }
    }
}