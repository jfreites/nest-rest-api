import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Item } from './schemas/item.schema';
import { CreateItemDto } from './dto/create-item.dto';

@Injectable()
export class ItemsService {
    constructor(@InjectModel(Item.name) private itemModel: Model<Item>) { }

    async findAll(): Promise<Item[]> {
        return this.itemModel.find().exec();
    }

    async findOne(id: string): Promise<Item> {
        return this.itemModel.findOne({ _id: id }).exec();
    }

    async create(createItemDto: CreateItemDto): Promise<Item> {
        const createdItem = new this.itemModel(createItemDto);
        return createdItem.save();
    }

    async delete(id: string): Promise<Item> {
        return this.itemModel.findByIdAndDelete({ _id: id }).exec();
    }

    async update(id: string, item: Item): Promise<Item> {
        return this.itemModel.findByIdAndUpdate(id, item).exec();
    }
}
