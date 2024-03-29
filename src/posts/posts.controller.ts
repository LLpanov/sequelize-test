import { Body, Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreatePostDto } from './dto/create-post.dto';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
	constructor(private postService: PostsService) {}

	@ApiOperation({ summary: 'create post' })
	@ApiResponse({ status: 200, type: Post })
	@Post()
	@UseInterceptors(FileInterceptor('image'))
	createPost(@Body() dto: CreatePostDto, @UploadedFile() image) {
		return this.postService.createPost(dto, image);
	}
}
