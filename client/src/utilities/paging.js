const Paging = function(items=[], currentPage=1, itemPerPage=1){
	console.log(items)
	if (currentPage && itemPerPage)
    	return items.slice((currentPage-1)*itemPerPage, currentPage*itemPerPage);
    return items;
}

export default Paging