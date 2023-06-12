export interface UserRepository {
    getById(id: string): Promise<any>;

    store(entity): Promise<void>;

    delete(id: string): Promise<void>;
}