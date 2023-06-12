import {AdditionalDataService} from "../AdditionalDataService";
import {AdditionalData} from "../../../domain/entity/AdditionalData";
import {AdditionalDataRepository} from "../../../repository/domain/AdditionalDataRepository";

export class AdditionalDataServiceDefault implements AdditionalDataService {
    private readonly additionalDataRepository: AdditionalDataRepository;

    constructor(additionalDataRepository: AdditionalDataRepository) {
        this.additionalDataRepository = additionalDataRepository
    }

    async create(val: any): Promise<void> {
        const additionalData = new AdditionalData(val.name, val.score, val.birthDate);
        await this.additionalDataRepository.store(additionalData);
    }

    async update(val: any): Promise<void> {
        const additionalData = await this.additionalDataRepository.getById(val.id);
        if (val.name) {
            additionalData.name = val.name;
        }
        if (val.score) {
            additionalData.score = val.score;
        }
        if (val.birthDate) {
            additionalData.birthDate = val.birthDate;
        }
        await this.additionalDataRepository.store(additionalData);
    }

    async delete(id: string): Promise<void> {
        await this.additionalDataRepository.delete(id);
    }
}