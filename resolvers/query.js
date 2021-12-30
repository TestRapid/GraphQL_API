const Query = {
	products: (parent, { filter }, db) => {
		let filteredProducts = db.products;
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
	},
	categories: (parent, args, db) => {
		return db.categories;
	},
	category: (parent, { id }, db) => {
		return db.categories.find((c) => c.id === id);
	},
	product: (parent, { id }, db) => {
		return db.products.find((p) => p.id === id);
	}
};

module.exports = Query;
