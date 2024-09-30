const baseUrl = "http://103.159.51.69:2000";

const getMethod = async (endpoint) => {
    try {
        const response = await fetch(`${baseUrl}/${endpoint}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token").access}`,
            },
        });
        // endpoint = post
        // http://103.159.51.69:2000/post
        // neu token het han -> token expired -> catch
        return await response.json();
    } catch (e) {
        // check e lien qian den token expire
        // goi api refresh token
        console.error("Error fetching data:", e);
    }
};

const postMethod = async (endpoint, body) => {
    try {
        const response = await fetch(`${baseUrl}/${endpoint}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token").access}`,
            },
            body: JSON.stringify({ ...body }),
        });
        return await response.json();
    } catch (e) {
        console.error("Error fetching data:", e);
    }
};
const putMethod = async (body) => {
    try {
        const response = await fetch(`${baseUrl}/${endpoint}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token").access}`,
            },
            body: JSON.stringify({ ...body }),
        });
        return await response.json();
    } catch (e) {
        console.error("Error fetching data:", e);
    }
};
export { postMethod, getMethod };
