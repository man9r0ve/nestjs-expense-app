import { Module } from '@nestjs/common';
import { ReportController } from './report.controller';
import { ReportService } from './report.service';
import { SummaryService } from 'src/summary/summary.service';

@Module({
  controllers: [ReportController],
  providers: [ReportService],
  exports:[ReportService]
})
export class ReportModule {}
