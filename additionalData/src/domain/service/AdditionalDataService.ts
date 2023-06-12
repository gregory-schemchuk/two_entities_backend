export interface AdditionalDataService {
    create(val: any): Promise<void>;

    update(val: any): Promise<void>;

    delete(id: string): Promise<void>;
}