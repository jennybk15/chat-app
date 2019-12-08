var moment = require('moment');

export const formatDate = (timestamp) =>{
    return moment(timestamp).format('hh:mm');
};