import { BelongsToMany, Column, DataType, Model, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';

import { UserRoles } from './user-roles.model';
import { User } from '../users/users.model';

interface RoleCreationAttribute {
	value: string;
	description: string;
}

@Table({ tableName: 'roles' })
export class Role extends Model<Role, RoleCreationAttribute> {
	@ApiProperty({ example: '1', description: 'unique identification' })
	@Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
	id: number;

	@ApiProperty({ example: 'ADMIN', description: 'users role' })
	@Column({ type: DataType.STRING, unique: true, allowNull: false })
	value: string;

	@ApiProperty({ example: 'Administrator', description: 'specification role' })
	@Column({ type: DataType.STRING, allowNull: false })
	description: string;

	@BelongsToMany(() => User, () => UserRoles)
	users: User[];
}
