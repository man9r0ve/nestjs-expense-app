import { Controller, Get, Post, Delete, Put, Param, Body, HttpCode, ParseUUIDPipe, ParseEnumPipe } from "@nestjs/common"
import { ReportType } from 'src/data'
import { ReportService } from "src/report/report.service"
import { CreateReportDto, UpdateReportDto, ResponseReportDto } from "src/dto/report.dto"

@Controller('report/:type')
export class ReportController {
  // Service 주입 : private final AppService appSerive
  constructor(private readonly reportService: ReportService) {}

  @Get()
  getAllReports(@Param('type', new ParseEnumPipe(ReportType)) type: string): ResponseReportDto[] {
    const reportType = type === "income" ? ReportType.INCOME : ReportType.EXPENSE
    return this.reportService.getAllReports(reportType)
  }

  @Get(':id')
  getReportById(
    @Param('type', new ParseEnumPipe(ReportType)) type: string,
    @Param('id', ParseUUIDPipe) id: string
  ): ResponseReportDto {
    const reportType = type === "income" ? ReportType.INCOME : ReportType.EXPENSE
    return this.reportService.getReportById(reportType, id)
  }

  @Post()
  createReport(
    @Param('type', new ParseEnumPipe(ReportType)) type: string,
    @Body() { amount, source }: CreateReportDto
  ): ResponseReportDto {
    const reportType = type === "income" ? ReportType.INCOME : ReportType.EXPENSE
    return this.reportService.createReport(reportType, {amount, source})
  }

  @Put(':id')
  updateReportById(
    @Param('type', new ParseEnumPipe(ReportType)) type: string,
    @Param('id', ParseUUIDPipe) id: string,
    @Body() body: UpdateReportDto
  ): ResponseReportDto {
    const reportType = type === "income" ? ReportType.INCOME : ReportType.EXPENSE
    return this.reportService.updateReportById(reportType, id, body)
  }

  @HttpCode(204)
  @Delete(':id')
  deleteReportById(@Param('id', ParseUUIDPipe) id: string) {
    return this.reportService.deleteReportById(id)
  }

}
