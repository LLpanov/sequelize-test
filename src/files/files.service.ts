import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as uuid from 'uuid';
import * as path from 'path';
import { existsSync, mkdirSync, writeFileSync } from 'fs';

@Injectable()
export class FilesService {
	async createFile(file): Promise<string> {
		try {
			const fileName = uuid.v4() + '.jpg';
			console.log(fileName);
			const filePath = path.resolve(__dirname, '..', 'static');
			if (!existsSync(filePath)) {
				mkdirSync(filePath, { recursive: true });
			}
			writeFileSync(path.join(filePath, fileName), file.buffer);
			return fileName;
		} catch (e) {
			throw new HttpException('error writing file', HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
