import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
	@ApiProperty({ example: 'lol@gmail.com', description: 'post address user' })
	@IsString({ message: 'must be a string' })
	@IsEmail({}, { message: 'not correct email' })
	readonly email: string;

	@ApiProperty({ example: '1123214', description: 'password' })
	@IsString({ message: 'must be a string' })
	@Length(4, 16, { message: 'more than 4 less than 16 symbols' })
	readonly password: string;
}
