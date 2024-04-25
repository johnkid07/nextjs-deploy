const mysql = require('mysql2')


export const mysqlPool = mysql.createPool(process.env.MYSQL_URI)
//mysql://2h5PPmTKRCiWzC2.root:YV1mUG0sftKtjs37@gateway01.ap-southeast-1.prod.aws.tidbcloud.com:4000/6504563_dit207?ssl={"rejectUnauthorized":true}'
