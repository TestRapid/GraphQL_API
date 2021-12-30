const product = {
	category: (parent, args, db) => {
		return db.categories.find((c) => c.id === parent.categoryId);
	},
	reviews: (parent, args, db) => {
		return db.reviews.filter((r) => r.productId === parent.id);
	}
};

module.exports = product;
