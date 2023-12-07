// import {
//   Controller,
//   Get,
//   Post,
//   Body,
//   Patch,
//   Param,
//   Delete,
//   Res,
//   HttpStatus,
//   Put,
// } from '@nestjs/common';
// import { UserService } from '../services/user.service';
// import { CreateUserDto } from '../dto/create-user.dto';
// import { UpdateUserDto } from '../dto/update-user.dto';
// import { Response } from 'express';

// @Controller('user')
// export class UserController {
//   constructor(private readonly userService: UserService) {}

//   @Post()
//   async create(
//     @Body() createUserDto: CreateUserDto,
//     @Res() response: Response,
//   ) {
//     try {
//       const user = await this.userService.create(createUserDto);
//       return response.status(HttpStatus.CREATED).json({
//         message: 'User has been created successfully',
//         user,
//       });
//     } catch (err) {
//       return response.status(HttpStatus.BAD_REQUEST).json({
//         statusCode: 400,
//         message: 'Error: User not created!',
//         error: 'Bad Request',
//       });
//     }
//   }

//   @Put('/:id')
//   async update(
//     @Res() response: Response,
//     @Param('id') userId: string,
//     @Body() updateUserDto: UpdateUserDto,
//   ) {
//     try {
//       const user = await this.userService.update(userId, updateUserDto);
//       return response.status(HttpStatus.OK).json({
//         message: 'Student has been successfully updated',
//         user,
//       });
//     } catch (err) {
//       return response.status(err.status).json(err.response);
//     }
//   }

//   @Get()
//   async findAll(@Res() response: Response) {
//     try {
//       const users = await this.userService.findAll();
//       return response.status(HttpStatus.OK).json({
//         message: 'All users data found successfully',
//         users,
//       });
//     } catch (err) {
//       return response.status(err.status).json(err.response);
//     }
//   }

//   @Get('/:id')
//   async findOne(@Res() response: Response, @Param('id') userId: string) {
//     try {
//       const user = await this.userService.findOne(userId);
//       return response.status(HttpStatus.OK).json({
//         message: 'User found successfully',
//         user,
//       });
//     } catch (err) {
//       return response.status(err.status).json(err.response);
//     }
//   }
//   @Delete('/:id')
//   async delete(@Res() response: Response, @Param('id') userId: string) {
//     try {
//       const user = await this.userService.delete(userId);
//       return response.status(HttpStatus.OK).json({
//         message: 'Student deleted successfully',
//         user,
//       });
//     } catch (err) {
//       return response.status(err.status).json(err.response);
//     }
//   }
// }
