// JUNAYED HASAN
type PageMetadata = {
    totalPages: number;
    startItem: number;
    endItem: number;
    hasPrev: boolean;
    hasNext: boolean;
};

function getPageMetadata(totalItems: number,pageSize: number,currentPage: number): PageMetadata {

    if (totalItems === 0) {
        return {
            totalPages: 0,
            startItem: 0,
            endItem: 0,
            hasPrev: false,
            hasNext: false,
        };
    }

    const totalPages = Math.ceil(totalItems / pageSize);
    const startItem = (currentPage - 1) * pageSize + 1;
    const endItem = Math.min(currentPage * pageSize, totalItems);
    const hasPrev = currentPage > 1;
    const hasNext = currentPage < totalPages;

    return {
        totalPages,
        startItem,
        endItem,
        hasPrev,
        hasNext,
    };
}

console.log(getPageMetadata(95, 10, 10));
// {
//   totalPages: 10,
//   startItem: 91,
//   endItem: 95,
//   hasPrev: true,
//   hasNext: false
// }

console.log(getPageMetadata(24, 5, 3));
// {
//   totalPages: 5,
//   startItem: 11,
//   endItem: 15,
//   hasPrev: true,
//   hasNext: true
// }

console.log(getPageMetadata(0, 10, 1));
// {
//   totalPages: 0,
//   startItem: 0,
//   endItem: 0,
//   hasPrev: false,
//   hasNext: false
// }