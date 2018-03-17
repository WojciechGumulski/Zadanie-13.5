var os = require('os');
var colors = require('colors');

function time() {
    var uptime = os.uptime();
    var hours = parseInt(uptime / 3600);
    var minutes = parseInt((uptime - hours * 3600) / 60);
    var seconds = parseInt(uptime - hours * 3600 - minutes * 60).toFixed(0);
    console.log('Uptime:'.bold.bgYellow, hours, 'h', minutes, 'min', seconds, 'sec');
}

exports.print = time;