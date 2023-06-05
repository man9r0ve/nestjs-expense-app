import { Controller, Get, Post, Delete, Put, Param, Body, HttpCode, ParseUUIDPipe, ParseEnumPipe } from "@nestjs/common"
import { ReportType } from 'src/data'
import { AppService } from "./app.service"
import { CreateReportDto, UpdateReportDto, ResponseReportDto } from "./dto/report.dto"

@Controller("report/:type")
export class AppController {
  // Service 주입 : private final AppService appSerive
  constructor(private readonly appService: AppService) {}

  @Get()
  getAllReports(@Param('type', new ParseEnumPipe(ReportType)) type: string): ResponseReportDto[] {
    const reportType = type === "income" ? ReportType.INCOME : ReportType.EXPENSE
    return this.appService.getAllReports(reportType)
  }

  @Get(':id')
  getReportById(
    @Param('type', new ParseEnumPipe(ReportType)) type: string,
    @Param('id', ParseUUIDPipe) id: string
  ): ResponseReportDto {
    const reportType = type === "income" ? ReportType.INCOME : ReportType.EXPENSE
    return this.appService.getReportById(reportType, id)
  }

  @Post()
  createReport(
    @Param('type', new ParseEnumPipe(ReportType)) type: string,
    @Body() { amount, source }: CreateReportDto
  ): ResponseReportDto {
    const reportType = type === "income" ? ReportType.INCOME : ReportType.EXPENSE
    return this.appService.createReport(reportType, {amount, source})
  }

  @Put(':id')
  updateReportById(
    @Param('type', new ParseEnumPipe(ReportType)) type: string,
    @Param('id', ParseUUIDPipe) id: string,
    @Body() body: UpdateReportDto
  ): ResponseReportDto {
    const reportType = type === "income" ? ReportType.INCOME : ReportType.EXPENSE
    return this.appService.updateReportById(reportType, id, body)
  }

  @HttpCode(204)
  @Delete(':id')
  deleteReportById(@Param('id', ParseUUIDPipe) id: string) {
    return this.appService.deleteReportById(id)
  }

}