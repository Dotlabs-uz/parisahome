
export async function setCookies(key: string, value: any, options?: Record<string, any>) {    
    try {
        const response = await fetch("/admin/api/cookies", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ key: key, value: value, options: options }),
        });

        if (!response.ok) {
            console.error(`Failed to set cookie: ${response.statusText}`);
            return { status: false };
        }

        return { status: true };
    } catch (error) {
        console.error('Error in setCookies:', error);
        return { status: false };
    }
}

export async function getCookies(key: string) {
    try {
        const response = await fetch(`/admin/api/cookies?key=${key}`);

        if (!response.ok) {
            console.error(`Failed to get cookie: ${response.statusText}`);
            return undefined;
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error in getCookies:', error);
        return undefined;
    }
}

export async function deleteCookies(key: string) {
    try {
        const response = await fetch("/admin/api/cookies", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ key: key })
        });

        if (!response.ok) {
            console.error(`Failed to delete cookie: ${response.statusText}`);
            return { status: false };
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Error in deleteCookies:', error);
        return { status: false };
    }
}