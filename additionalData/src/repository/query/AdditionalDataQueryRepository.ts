export interface AdditionalDataQueryRepository {
    getById(id: string): Promise<any>;

    getList(limit: number, offset: number): Promise<Array<any>>;
}