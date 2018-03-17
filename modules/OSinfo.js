var os = require('os');
var time = require('./time');
var colors = require('colors');

function getOSinfo() {
    var type = os.type();
    if(type === 'Darwin') {
        type = 'OSX';
    } else if(type === 'Windows_NT') {
        type = 'Windows';
    }
    var release = os.release();
    var cpu = os.cpus()[0].model;
    var uptime = os.uptime();
    var userInfo = os.userInfo();
    console.log('System:'.bold.green, type);
    console.log('Release:'.bold.red, release);
    console.log('CPU model:'.italic.cyan, cpu);
    time.print();
    console.log('User name:'.underline.blue, userInfo.username);
    console.log('Home dir:'.dim.magenta, userInfo.homedir);
}

exports.print = getOSinfo;