import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DB_USER_MODEL } from 'src/constants';
import { Model } from 'mongoose';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UserService {
    constructor(@Inject(DB_USER_MODEL) private userModel: Model<UserEntity>) {}

    async create(createUserDto: CreateUserDto) {
        const found = await this.userModel.findOne({
            name: createUserDto.username,
            password: createUserDto.password,
        });
        if (found == null) {
            const createdProduct = new this.userModel(createUserDto);
            return await createdProduct.save();
        } else {
            return null;
        }
    }

    async findAll() {
        return await this.userModel.find();
    }

    async findOne(id: string) {
        try {
            return await this.userModel.findOne({ _id: id });
        } catch (error) {
            return null;
        }
    }

    async update(id: string, updateUserDto: UpdateUserDto) {
        try {
            return await this.userModel.updateOne({ _id: id }, updateUserDto);
        } catch (error) {
            return null;
        }
    }

    async remove(id: string) {
        try {
            return await this.userModel.deleteOne({ _id: id });
        } catch (error) {
            return null;
        }
    }
}
