import { PrimaryKeyEntity } from "entities";

export interface IModelRepository<Model extends PrimaryKeyEntity> {
    createOrUpdate(entity: Model): Promise<Model>;
    removeById(entityId: string): Promise<boolean>;
    findById(entityId: string): Promise<Model | null>
    getAll(): Promise<Model[]>
}