import {AdditionalDataQueryRepository} from "../../repository/query/AdditionalDataQueryRepository";
import {AdditionalDataQueryRepositoryImpl} from "../../repository/query/impl/AdditionalDataQueryRepositoryImpl";
import {AdditionalDataRepository} from "../../repository/domain/AdditionalDataRepository";
import {AdditionalDataRepositoryImpl} from "../../repository/domain/impl/AdditionalDataRepositoryImpl";
import {AdditionalDataService} from "../../domain/service/AdditionalDataService";
import {AdditionalDataServiceDefault} from "../../domain/service/impl/AdditionalDataServiceDefault";
export class DependencyContainer {
    static dependencyContainer: DependencyContainer = null;
    constructor() {
        if (DependencyContainer.dependencyContainer !== null) {
            const msg = 'Cannot create more than one dependency container instance';
            console.log(msg);
        }
        DependencyContainer.dependencyContainer = this;
    }
    newAdditionalDataRepository(): AdditionalDataRepository {
        return new AdditionalDataRepositoryImpl();
    }
    newAdditionalDataQueryRepository(): AdditionalDataQueryRepository {
        return new AdditionalDataQueryRepositoryImpl();
    }
    newAdditionalDataService(): AdditionalDataService {
        return new AdditionalDataServiceDefault(this.newAdditionalDataRepository());
    }
    }
