import {v4} from "uuid";
import {Expose} from "class-transformer";

export class User {
    constructor(name: string, score: number, birthDate: Date, additionalData: string, id?: string) {
        this._id = id ? id : v4();
        this._name = name ? name : null;
        this._score = score ? score : null;
        this._birthDate = birthDate ? birthDate : null;
        this._additionalData = additionalData ? additionalData : null;
    }

    @Expose({name: "name"})
    private _name: string;
    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    @Expose({name: "score"})
    private _score: number;
    get score(): number {
        return this._score;
    }

    set score(value: number) {
        this._score = value;
    }

    @Expose({name: "birthDate"})
    private _birthDate: Date;
    get birthDate(): Date {
        return this._birthDate;
    }

    set birthDate(value: Date) {
        this._birthDate = value;
    }

    @Expose({name: "additionalData"})
    private _additionalData: string;
    get additionalData(): string {
        return this._additionalData;
    }

    set additionalData(value: string) {
        this._additionalData = value;
    }

    @Expose({name: "id"})
    private readonly _id: string;
    get id(): string {
        return this._id;
    }
}