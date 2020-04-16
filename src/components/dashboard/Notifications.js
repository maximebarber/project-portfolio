import React from "react";
import moment from "moment";

const Notifications = ({ notifications }) => {
    return (
        <div className="section">
            <div className="card">
                <div className="card-content">
                    <span className="card-title">Notifications</span>
                    <ul className="notifications">
                        {notifications &&
                            notifications.map((notification) => {
                                return (
                                    <li key={notification.id}>
                                        <span className="green-text">
                                            {notification.user}
                                        </span>
                                        <span> {notification.content}</span>
                                        <div className="grey-text notification-date">
                                            {moment(
                                                notification.time.toDate()
                                            ).fromNow()}
                                        </div>
                                    </li>
                                );
                            })}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Notifications;
