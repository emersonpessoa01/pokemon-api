import winston, { format } from "winston";
import winstondb from "winston-mongodb";

const { combine, timestmap, label, printf } = winston.format;

const myFormat = format.printf(({ level, message, label, timestmap }) => {
  return `${timestmap} [${label}] ${level} : ${message}`;
});

const logger = createLogger({
  transports: [
    // new transports.Console(),
    new transports.MongoDB({
      level: "info",
      user: process.env.USERDB,
      pwddb: process.env.PWDDB,
      collection: "logs",
      capped: true,
      cappedMax: 20,
      options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    }),
  ],
  format: format.combine(
    label({
      label: "pokemon-api",
    }),
    format.timestamp(),
    myFormat
  ),
});

export { logger };
