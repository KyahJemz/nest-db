import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dtos/request/create-transactions.dto';
import { UpdateTransactionDto } from './dtos/request/update-transactions.dto';
import { TransactionsRepository } from './transactions.repository';
import { TransactionDto } from './dtos/response/transactions.dto';

@Injectable()
export class TransactionsService {
  constructor(
    private readonly transactionsRepository: TransactionsRepository,
  ) {}

  async create(
    createTransactionDto: CreateTransactionDto,
  ): Promise<TransactionDto> {
    return this.transactionsRepository.create(createTransactionDto);
  }

  async findAll(): Promise<TransactionDto[]> {
    return this.transactionsRepository.findAll();
  }

  async findOne(id: number): Promise<TransactionDto> {
    return this.transactionsRepository.findOne(id);
  }

  async update(
    updateTransactionDto: UpdateTransactionDto,
  ): Promise<TransactionDto> {
    return this.transactionsRepository.update(updateTransactionDto);
  }

  async remove(id: number) {
    return this.transactionsRepository.remove(id);
  }
}
