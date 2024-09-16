import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../schemas/user.schema';
import { UserDto } from './user.dto';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) { }

    async create(UserDto: UserDto): Promise<User> {
        const createdUser = new this.userModel(UserDto);
        return createdUser.save();
    }

    async findAll(): Promise<User[]> {
        return this.userModel.find().exec();
    }

    async delete(id: number) {
        await this.userModel.findByIdAndDelete(id);
    }

    async update(id: number, userDto: UserDto) {
        return this.userModel.findByIdAndUpdate(id, userDto, { new: true });
    }
}
