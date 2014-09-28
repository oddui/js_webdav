var jsDAV = require("jsDAV/lib/jsdav");
var jsDAV_Locks_Backend_FS = require("jsDAV/lib/DAV/plugins/locks/fs");

//jsDAV.debugMode = true;

jsDAV.createServer({
  node: __dirname + "/webdav",
  locksBackend: jsDAV_Locks_Backend_FS.new(__dirname + "/locks")
}, 8000);
