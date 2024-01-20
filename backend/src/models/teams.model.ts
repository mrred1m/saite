import { Model, Table, Column, DataType } from "sequelize-typescript";

@Table({
  modelName: "teams",
  createdAt: false,
  updatedAt: false
})
export default class Teams extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: "id"
  })
  id?: number;

  @Column({
    type: DataType.STRING(255),
    field: "teamsName"
  })
  teamsName?: string;

  @Column({
    type: DataType.STRING(),
    field: "description"
  })
  description?: string;

  @Column({
    type: DataType.STRING(255),
    field: "logo"
  })
  logo?: string;

  @Column({
    type: DataType.STRING(255),
    field: "photo"
  })
  photo?: string;
}