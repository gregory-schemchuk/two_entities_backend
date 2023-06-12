import {UserQueryRepository} from "../../repository/query/UserQueryRepository";
import {UserQueryRepositoryImpl} from "../../repository/query/impl/UserQueryRepositoryImpl";
import {UserRepository} from "../../repository/domain/UserRepository";
import {UserRepositoryImpl} from "../../repository/domain/impl/UserRepositoryImpl";
import {UserService} from "../../domain/service/UserService";
import {UserServiceDefault} from "../../domain/service/impl/UserServiceDefault";
export class DependencyContainer {
    static dependencyContainer: DependencyContainer = null;
    constructor() {
        if (DependencyContainer.dependencyContainer !== null) {
            const msg = 'Cannot create more than one dependency container instance';
            console.log(msg);
        }
        DependencyContainer.dependencyContainer = this;
    }
    newUserRepository(): UserRepository {
        return new UserRepositoryImpl();
    }
    newUserQueryRepository(): UserQueryRepository {
        return new UserQueryRepositoryImpl();
    }
    newUserService(): UserService {
        return new UserServiceDefault(this.newUserRepository());
    }
    }
