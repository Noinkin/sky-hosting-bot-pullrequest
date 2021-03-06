module.exports = (userID, serverName, location) => {

    let getPassword = () => {
        const CAPSNUM = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
        var password = "";
        while (password.length < 10) {
            password += CAPSNUM[Math.floor(Math.random() * CAPSNUM.length)];
        }
        return password;
    };

    return {
        "name": serverName,
        "user": userID,
        "nest": 7,
        "egg": 15,
        "docker_image": "ghcr.io/parkervcp/yolks:nodejs_17",
        "startup": "sh .local/lib/code-server-{{VERSION}}/bin/code-server",
        "limits": {
            "memory": 0,
            "swap": 0,
            "disk": 800,
            "io": 500,
            "cpu": 0
        },
        "environment": {
            "PASSWORD": `${getPassword()}`,
            "VERSION": "latest"
        },
        "feature_limits": {
            "databases": 0,
            "allocations": 2,
            "backups": 0
        },
        "deploy": {
            "locations": [location],
            "dedicated_ip": false,
            "port_range": []
        },
        "start_on_completion": false
    }
}