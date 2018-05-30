const Paging = function(items=[], currentPage=1, itemPerPage=1){
	if (currentPage && itemPerPage)
    	return items.slice((currentPage-1)*itemPerPage, currentPage*itemPerPage);
    return items;
}

module.exports = Paging