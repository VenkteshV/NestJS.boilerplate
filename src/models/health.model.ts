const os = require('os');

export default class HealthModel {
  application: string;
  status: string;
  date: Date;
  containerName: string;
  dbStatus: string;

  constructor(status) {
    this.application = 'NestJS boilerplate';
    this.status = status;
    this.date = new Date();
    this.containerName = os.hostname();
    // this.dbStatus = dbStatus === 1 ? "connected": "disconnected";
  }
}
