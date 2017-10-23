exports.init = (client) => {
    const moment = require('moment-timezone');
    setInterval(() => {

        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let timeJP = moment().tz('Asia/Tokyo');
        let timeGE = moment().tz('Europe/Berlin');

        if (timeGE.hour() == 5 && timeGE.minute() == 35)
            client.channels.get('286399443102728194').send(`Panzerwaltz Special Maps and Events will reset in 30 minutes.`);
        if (timeGE.hour() == 5 && timeGE.minute() == 50)
            client.channels.get('286399443102728194').send(`Panzerwaltz Special Maps and Events will reset in 15 minutes.`);
        if (timeGE.hour() == 6 && timeGE.minute() == 5)
            client.channels.get('286399443102728194').send(`It's **${timeGE.hour()}:0${timeGE.minute()}** in Deutschland, Panzerwaltz Special Maps and Events have been reset.`);

        if ((timeJP.hour() == 2 || timeJP.hour() == 14) && timeJP.minute() == 30)
            client.channels.get('199598319620587520').send(`PvP will reset in 30 minutes.`);
        if ((timeJP.hour() == 2 || timeJP.hour() == 14) && timeJP.minute() == 45)
            client.channels.get('199598319620587520').send(`PvP will reset in 15 minutes.`);
        if ((timeJP.hour() == 3 || timeJP.hour() == 15) && timeJP.minute() == 0)
            client.channels.get('199598319620587520').send(`It's **${timeJP.hour()}:${timeJP.minute()}0** in Japan, PvP has been reset.`);