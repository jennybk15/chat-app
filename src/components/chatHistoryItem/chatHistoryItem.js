import React from 'react';
import {formatDate} from '../../utils/dateTimeUtils';
import './chatHistoryItem.css';

export default class ChatHistoryItem extends React.Component {

    render() {
        const clsName = this.props.ownerIsSender ? "blue-text title light-green accent-1 right-align" : "title";
        return (
            <li className={"collection-item " + clsName} key={this.props.index}>
                {this.props.isGroupChat && !this.props.ownerIsSender && <span className={clsName}>{this.props.senderName}</span>}
                <p>

                    { this.props.ownerIsSender && <div className="right-align">
                        <span className="message-text">{this.props.text}</span>
                        <span className="message-date">{formatDate(this.props.date)}</span>
                    </div>}

                    { !this.props.ownerIsSender && <div className="left-align">

                        <span className="message-text">{this.props.text}</span>
                        <span className="message-date">{formatDate(this.props.date)}</span>
                    </div>}
                </p>
            </li>
        );
    }
}