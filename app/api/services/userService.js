import Endpoints from '../Endpoints';
import HttpClient from '../HttpClient';

const userService = {};

/**
 * Retrieves and counts all users based on provided filters for a specific account.
 *
 * @param {string} accountId - The ID of the account to fetch users from.
 * @param {Object} filters - An object containing the filters to apply to the query.
 * @returns {Promise<Object>} A promise that resolves to the result of the HTTP GET request,
 * containing the list of users and their count.
 * @throws {Error} If the HTTP request fails or an error occurs.
 */
const findAndCountAll = async (accountId, filters) => {
  return HttpClient.get(`/${Endpoints.ACCOUNTS}/${accountId}/${Endpoints.USERS}`, { params: filters });
};

userService.findAndCountAll = findAndCountAll;

export default userService;
