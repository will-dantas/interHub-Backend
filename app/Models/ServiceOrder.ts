import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class ServiceOrder extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public cliente: string

  @column()
  public text: string

  @column()
  public colaborador: string

  @column()
  public coordinates: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
