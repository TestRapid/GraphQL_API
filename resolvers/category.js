const category = {
	products: (parent, { filter }, db) => {
		let filteredProducts = db.products.filter(
			(p) => p.categoryId === parent.id
		);
		if (filter) {
			const { onSale, avgRating } = filter;
			if (onSale) {
				filteredProducts = filteredProducts.filter((p) => p.onSale);
			}
			if ([1, 2, 3, 4, 5].includes(avgRating)) {
				filteredProducts = filteredProducts.filter((p) => {
					let sumRating = 0;
					let numRating = 0;
					reviews.forEach((r) => {
						if (r.productId === p.id) {
							sumRating += r.rating;
							numRating++;
						}
					});
					const avg = sumRating / numRating;
					return avg >= avgRating;
				});
			}
		}
		return filteredProducts;
	}
};

module.exports = category;
