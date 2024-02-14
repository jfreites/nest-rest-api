import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { Item } from './schemas/item.schema';

@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService: ItemsService) { }

    @Get()
    findAll(): Promise<Item[]> {
        return this.itemsService.findAll();
    }

    @Get(':id')
    findOne(@Param() param): Promise<Item> {
        return this.itemsService.findOne(param.id);
    }

    @Post()
    create(@Body() createItemDto: CreateItemDto): Promise<Item> {
        return this.itemsService.create(createItemDto);
    }

    @Delete(':id')
    delete(@Param('id') id): Promise<Item> {
        return this.itemsService.delete(id);
    }

    @Put(':id')
    update(@Param('id') id, @Body() createItemDto: CreateItemDto): Promise<Item> {
        return this.itemsService.update(id, createItemDto);
    }
}


