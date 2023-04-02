import { HTTP, HTTPS } from '@constants/api';

/**
 * Change URL from HTTP to HTTPS
 * @param {String} url - url for change
 * @returns - url with HTTPS
 */
export const changeHTTP = url => {
    const result = url ? url.replace(HTTP, HTTPS) : url;

    return result;
}

/**
 * Send Fetch request
 * @param {String} url 
 * @returns {Promise} - Promise with result request
 */
export const getApiResource = async (url) => {
    try {
        const response = await fetch(url);

        if(!response.ok) {
            console.error('Could not fetch', response.status);
            return false;
        }

        return await response.json();
    } catch (error) {
        return false;
    }
}