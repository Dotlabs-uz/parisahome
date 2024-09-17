"use server";
import axios from "axios";
import { cookies } from "next/headers";

export async function postData(path: string, body: any, withToken?: boolean) {
    try {

        const { data } = await axios.post(process.env.NEXT_PUBLIC_API_URL + path, body);

        return data;

    } catch (e) {
        console.log("postError", e);

        return {
            status: 500,
            massage: e
        }
    }
}

export async function deleteData(path: string, withToken?: boolean) {
    try {

        if (withToken) {
            const token: any = cookies()?.get("userToken")?.value;

            const { data } = await axios(process.env.API_URL + path, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            return data;
        } else {
            const theme: any = cookies()?.get("token")?.value;
            const token = JSON.parse(theme).token

            const { data } = await axios(process.env.API_URL + path, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            return data;
        }

    } catch (e) {
        console.log("deleteError", e);

        return {
            status: 500,
            massage: e
        }
    }
}

export async function getData(path: string, withToken?: boolean) {
    try {
        const url = `${process.env.API_URL}${path}`;

        if (withToken) {
            const token = cookies()?.get("userToken")?.value;

            if (!token) {
                return { token: false };
            }

            const { data } = await axios.get<any>(url, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            return data;
        } else {
            const { data } = await axios.get(url);
            return data;
        }

    } catch (e) {
        console.log("getError", e);

        return {
            status: 500,
            massage: e
        }
    }
}
