import { Injectable } from '@nestjs/common';
import { data, ReportType } from 'src/data'
import { v4 as uuid } from 'uuid'
import { ResponseReportDto } from 'src/dto/report.dto'

export interface Report {
  amount: number,
  source: string
}

export interface UpdateReport {
  amount?: number,
  source?: string
}

@Injectable()
export class ReportService {
  getAllReports(type: ReportType): ResponseReportDto[] {
    return data.report
      .filter((report) => report.type === type)
      .map((report) => new ResponseReportDto(report))
  }

  getReportById(type: ReportType, id: string): ResponseReportDto {
    const report = data.report
      .filter((report) => report.type === type)
      .find((report) => report.id === id)

    if(!report)
      return

    return new ResponseReportDto(report)
  }

  createReport(type: ReportType, {amount, source}: Report): ResponseReportDto {
    const newReport = {
      id: uuid(),
      source,
      amount,
      created_at: new Date(),
      updated_at: new Date(),
      type
    }
    data.report.push(newReport)
    return new ResponseReportDto(newReport)
  }

  updateReportById(type: ReportType, id: string, body: UpdateReport): ResponseReportDto {
    const reportToUpdate = data.report
        .filter(report => report.type === type)
        .find(report => report.id === id)

    if(!reportToUpdate)
      return;

    const reportIndex = data.report.findIndex(report => report.id === reportToUpdate.id)

    data.report[reportIndex] = {
      ...data.report[reportIndex],
      ...body
    }

    return new ResponseReportDto(data.report[reportIndex])
  }

  /**
   * 데이터 삭제
   * @param id: string
   * @returns
   */
  deleteReportById(id: string) {
    const reportIndex = data.report.findIndex(report => report.id === id)

    if(reportIndex == -1)
      return;

    data.report.slice(reportIndex, 1)

    return;
  }
}
