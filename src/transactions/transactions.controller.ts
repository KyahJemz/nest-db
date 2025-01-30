import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { CreateTransactionDto } from './dtos/request/create-transactions.dto';
import { UpdateTransactionDto } from './dtos/request/update-transactions.dto';
import { TransactionDto } from './dtos/response/transactions.dto';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Post()
  create(
    @Body() CreateTransactionDto: CreateTransactionDto,
  ): Promise<TransactionDto> {
    return this.transactionsService.create(CreateTransactionDto);
  }

  @Get()
  findAll(): Promise<TransactionDto[]> {
    return this.transactionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<TransactionDto> {
    return this.transactionsService.findOne(id);
  }

  @Put()
  update(
    @Body() UpdateTransactionDto: UpdateTransactionDto,
  ): Promise<TransactionDto> {
    return this.transactionsService.update(UpdateTransactionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.transactionsService.remove(id);
  }
}
