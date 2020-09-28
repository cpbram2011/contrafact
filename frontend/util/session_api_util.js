

export const signup = user => {
    return $.ajax({
        url: "/api/users",
        method: "POST",
        data: {user}
    });
};

export const login = user => {
    return $.ajax({
        url: "/api/session",
        method: "POST",
        data: {user}

    });
};

export const logout = () => {
    return $.ajax({
        url: "/api/session",
        method: "DELETE",
    });
};


export const fetchEmail = (email) => {
    
    return $.ajax({
        url: '/api/users/findemail',
        data: {email}
    });
};

export const fetchUsername = (username) => {
    
    return $.ajax({
        url: '/api/users/findusername',
        data: {username}
    });
};

