import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { SequelizeModule } from '@nestjs/sequelize';

import { Post } from './posts.model';
import { User } from '../users/users.model';
import { FilesModule } from '../files/files.module';

@Module({
	imports: [SequelizeModule.forFeature([User, Post]), FilesModule],
	providers: [PostsService],
	controllers: [PostsController]
})
export class PostsModule {}
