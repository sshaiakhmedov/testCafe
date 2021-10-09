let os=require("os")

module.exports={
    "browsers":['chrome:headless'],
    "reporter": {
        "name":"xunit",
        "output":"reports/report.xml"
    },
    "src":"e2e",
    "screenshots":{
        "path":"screenshots/",
        "takeOnFails":true,
        "fullPage": true
    },
    "filter.testMeta":"reg"

}