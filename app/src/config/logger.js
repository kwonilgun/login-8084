const { createLogger, transports, format } = require("winston" );
const{ combine, timestamp, json } = format;

const printLogFormat = combine (
    // format.colorize(),
  timestamp({
        format: "YYYY-MM-DD HH:mm"
    }),
    json()
)

const logger = createLogger({
    transports: [
        new transports.Console({
            level : "info",
            format: printLogFormat,
            
        })
    ]
});

module.exports = logger;