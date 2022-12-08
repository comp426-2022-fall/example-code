// Load database engine better-sqlite3
const database = require('better-sqlite3')
// Create database connection
const db = new database('example.db')
// Check access log table
//const stmt = db.prepare(`SELECT name FROM sqlite_master type='table' and name='access';`)
//let accessrow = stmt.get();
//if ( accessrow === undefined ) {
//  const accessLogInit = `
//    CREATE TABLE access (
//	  id INTEGER PRIMARY KEY,
//	  remote_addr VARCHAR,
//	  remote_user VARCHAR,
//	  datetime VARCHAR,
//	  method VARCHAR,
//	  url VARCHAR,
//	  http_version VARCHAR,
//	  status VARCHAR,
//      content_length VARCHAR,
//	  referer_url VARCHAR,
//	  user_url VARCHAR
//	);
//  `
//  db.exec(accessLogInit)
//} else {
//  console.log('Access log table exists.')
//}

const userstmt = db.prepare(`SELECT name FROM sqlite_master WHERE type='table' and name='userinfo';`)
let userrow = userstmt.get();
if ( userrow === undefined ) {
	const userinfoInit = `
	CREATE TABLE userinfo (
		id INTEGER PRIMARY KEY,
		username VARCHAR,
		email VARCHAR,
		mobile VARCHAR,
		password VARCHAR
	);
	INSERT INTO userinfo (username, email, mobile, password) VALUES ('admin','john.d.martin.iii@unc.edu','9195558645','supersecure');
	`
	db.exec(userinfoInit)
} else {
	console.log('User info table exists.')
}



// Export db 
module.exports = db
