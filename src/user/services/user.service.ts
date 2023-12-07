import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { User } from '../entities/user.entity';
// import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class UserService {
  constructor() // @InjectModel(User)
  // private userModel: typeof User,
  {}
}
