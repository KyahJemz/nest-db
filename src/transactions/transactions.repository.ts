import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTransactionDto } from './dtos/request/create-transactions.dto';
import { TransactionEntity } from './transactions.entity';
import { TransactionDto } from './dtos/response/transactions.dto';
import { UpdateTransactionDto } from './dtos/request/update-transactions.dto';

@Injectable()
export class TransactionsRepository {
  constructor(
    @InjectRepository(TransactionEntity)
    private repository: Repository<TransactionEntity>,
  ) {}

  async create(transaction: CreateTransactionDto): Promise<TransactionDto> {
    return await this.repository.save(transaction);
  }

  async findAll(): Promise<TransactionDto[]> {
    return await this.repository.find();
  }

  async findOne(id: number): Promise<TransactionDto> {
    return await this.repository.findOne({ where: { id } });
  }

  async update(transaction: UpdateTransactionDto): Promise<TransactionDto> {
    await this.repository.update(transaction.id, transaction);
    return await this.repository.findOne({ where: { id: transaction.id } });
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
