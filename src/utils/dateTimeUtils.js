var moment = require('moment');

export const formatDate = (timestamp) =>{
    return moment(timestamp).format('hh:mm');
    // const messageDate = new Date(timestamp);
    // const messageDateTime = messageDate.toLocaleDateString() +
    //     ' at ' + messageDate.toLocaleTimeString();
    // return messageDateTime;
};