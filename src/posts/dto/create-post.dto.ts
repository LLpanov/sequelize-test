import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreatePostDto {
	@ApiProperty({ example: 'My car', description: 'some information about car' })
	@IsString({ message: 'must be a string' })
	readonly title: string;

	@ApiProperty({ example: 'Content', description: 'its about user content' })
	@IsString({ message: 'must be a string' })
	readonly content: string;

	@IsNumber({}, { message: 'must be a number' })
	readonly userId: number;
}
