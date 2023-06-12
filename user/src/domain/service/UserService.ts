export interface UserService {
    create(val: any): Promise<void>;

    update(val: any): Promise<void>;

    delete(id: string): Promise<void>;
}