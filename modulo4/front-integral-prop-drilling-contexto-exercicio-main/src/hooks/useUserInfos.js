import { useState } from 'react'



export default function UserInfos() {
    const [usersData, setUsersData] = useState([]);
    const [userInEditing, setUserInEditing] = useState(false);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    function handleDeleteUser(userId) {
        const localUsersData = [...usersData];

        const index = localUsersData.findIndex(item => item.id === userId);

        localUsersData.splice(index, 1);

        setUsersData(localUsersData);
    }
    return {
        usersData,
        setUsersData,
        userInEditing,
        setUserInEditing,
        age,
        setAge,
        name,
        setName,
        handleDeleteUser,
    }
}

