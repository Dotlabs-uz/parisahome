import { Op } from "sequelize";

export function paginateData(data: any) {
    const limit = +data.limit || 15;
    const page = Number(data.page) - 1 || 0;
    const offset = page * limit;
    const result = { limit, offset, where: {} };
    const excludedFields = ['page', 'limit', 'offset'];
    

    for (const key of Object.keys(data)) {
        if (!excludedFields.includes(key) && key === "categoryId") {
            const parse = +data[key];
            if (isNaN(parse)) {
                result.where[key] = {
                    [Op.iRegexp]: data[key]
                };
            } else {
                result.where[key] = data[key];
            }
        }
    }
    
    return result;
}