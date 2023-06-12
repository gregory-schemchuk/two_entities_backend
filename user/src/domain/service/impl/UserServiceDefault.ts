import {UserService} from "../UserService";
import {User} from "../../../domain/entity/User";
import {UserRepository} from "../../../repository/domain/UserRepository";

export class UserServiceDefault implements UserService {
    private readonly userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository
    }

    async create(val: any): Promise<void> {
        const user = new User(val.name, val.score, val.birthDate, val.additionalData);
        await this.userRepository.store(user);
    }

    async update(val: any): Promise<void> {
        const user = await this.userRepository.getById(val.id);
        if (val.name) {
            user.name = val.name;
        }
        if (val.score) {
            user.score = val.score;
        }
        if (val.birthDate) {
            user.birthDate = val.birthDate;
        }
        if (val.additionalData) {
            user.additionalData = val.additionalData;
        }
        await this.userRepository.store(user);
    }

    async delete(id: string): Promise<void> {
        await this.userRepository.delete(id);
    }
}