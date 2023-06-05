import { Injectable } from '@nestjs/common'
import { data, ReportType } from 'src/data'
import { v4 as uuid } from 'uuid'

export interface Report {
  amount: number, 
  source: string
}


export interface UpdateReport {
  amount?: number, 
  source?: string
}

@Injectable()
export class AppService {
  getAllReports(type: ReportType) {
    return data.report.filter((report) => report.type === type)
  }

  getReportById(type: ReportType, id: string) {
    return data.report
      .filter((report) => report.type === type)
      .find((report) => report.id === id)
  }

  createReport(type: ReportType, {amount, source}: Report) {
    const newReport = {
      id: uuid(),
      source,
      amount,
      created_at: new Date(),
      updated_at: new Date(),
      type
    }
    data.report.push(newReport)
    return newReport
  }

  updateReportById(type: ReportType, id: string, body: UpdateReport) {
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

    return data.report[reportIndex]
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