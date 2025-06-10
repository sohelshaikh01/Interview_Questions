export const loginUser = async (username, password) => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username === "user" && password === "pass") {
                resolve({
                    success: true,
                    data: {
                        username,
                        email: "user@example.com",
                        token: 
                            "adgpaAGdiaagdSDetLAKKSEaxesrw"
                    },
                });
            } 
            else {
                reject({success: false, error: "Invalid Credentials"});
            }
        }, 1000);
    });
};


