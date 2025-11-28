export const getPagination = (page, limit) => {
    const _page = page && page > 0 ? parseInt(page) : 1;
    const _limit = limit && limit > 0 ? parseInt(limit) : 1;
    const offset = (_page - 1) * _limit;
    return {limit: _limit, offset, page: _page};
};