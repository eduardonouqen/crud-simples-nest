import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './user.dto';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }

    @Get()
    findAll() {
        return this.userService.findAll();
    }

    @Post()
    create(@Body() userDto: UserDto) {
        return this.userService.create(userDto);
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.userService.delete(id);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() userDto: UserDto) {
        return this.userService.update(id, userDto);
    }
}