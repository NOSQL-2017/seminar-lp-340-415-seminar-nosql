var r = require("rethinkdb");
r.connect( function(err, conn) {
    r.table('scores').run(conn, function(err, cursor) {
        if (err) throw err;
        cursor.toArray(function(err, result) {
            if (err) throw err;
            console.log(JSON.stringify(result, null, 2));
        });
    })
    r.table('scores').changes().run(conn, function(err, cursor) {
        if (err) throw err;
        cursor.each(function(err, row) {
            if (err) throw err;
            console.log(JSON.stringify(row, null, 2));
        });
    });
})




            