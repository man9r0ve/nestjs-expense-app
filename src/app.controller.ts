import { Controller, Get, Post, Delete, Put, Param } from "@nestjs/common"
import { log } from "console"

@Controller("report/:type")
export class AppController {
  @Get()
  getAllReports(
    @Param('type') type: string
  ) {
    console.log(`type : ${type}`)
    return []
  }

  @Get(':id')
  getReportById() {
    return {}
  }

  @Post()
  createReport() {
    return "Created"
  }

  @Put(':id')
  updateReport() {
    return "Updated"
  }

  @Delete(':id')
  deleteReport() {
    return "Deleted"
  }

}