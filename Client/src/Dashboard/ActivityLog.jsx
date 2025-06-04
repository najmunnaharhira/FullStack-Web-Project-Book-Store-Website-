import React, { useEffect, useState } from 'react';

const ActivityLog = ({ userId }) => {
    const [activities, setActivities] = useState([]);
    
    useEffect(() => {
        const fetchActivities = async () => {
            try {
                const response = await fetch(`/api/user/${userId}/logs`);
                const data = await response.json();
                setActivities(data);
            } catch (error) {
                console.error('Error fetching activity logs:', error);
            }
        };
        fetchActivities();
    }, [userId]);

    return (
        <div>
            <h2>Activity Log</h2>
            <ul>
                {activities.map(activity => (
                    <li key={activity.id}>
                        <strong>{activity.activity_type}</strong>: {activity.description} 
                        <br />
                        <small>{new Date(activity.timestamp).toLocaleString()}</small>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ActivityLog;


