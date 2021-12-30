const { v4 } = require("uuid");

const mutation = {
	addCategory: (parent, { input }, db) => {
		const newCategory = { id: v4(), title: input.title };
		db.categories.push(newCategory);
		return newCategory;
	},
	deleteCategory: (parent, { id }, db) => {
		const categoryIndex = db.categories.findIndex((c) => c.id === id);
		if (categoryIndex === -1) return false;
		db.categories.splice(categoryIndex, 1);
		db.products.forEach((p) => {
			if (p.categoryId === id) p.categoryId = null;
		});
		return true;
	},
	updateCategory: (parent, { id, input }, db) => {
		const categoryIndex = db.categories.findIndex((c) => c.id === id);
		if (categoryIndex === -1) return null;
		db.categories[categoryIndex] = {
			...db.categories[categoryIndex],
			...input
		};
		return db.categories[categoryIndex];
	},
	addProduct: (parent, { input }, db) => {
		const newProduct = {
			id: v4(),
			...input
		};
		db.products.push(newProduct);
		return newProduct;
	},
	deleteProduct: (parent, { id }, db) => {
		const productIndex = db.products.findIndex((p) => p.id === id);
		if (productIndex === -1) return false;
		db.products.splice(productIndex, 1);
		db.reviews = db.reviews.filter((r) => r.productId !== id);
		return true;
	},
	updateProduct: (parent, { id, input }, db) => {
		const productIndex = db.products.findIndex((p) => p.id === id);
		if (productIndex === -1) return null;
		db.products[productIndex] = {
			...db.products[productIndex],
			...input
		};
		return db.products[productIndex];
	},
	addReview: (parent, { input }, db) => {
		const newReview = {
			id: v4(),
			...input,
			date: Date.now()
		};
		db.reviews.push(newReview);
		return newReview;
	},
	deleteReview: (Parent, { id }, db) => {
		const reviewIndex = db.reviews.findIndex((r) => r.id === id);
		if (reviewIndex === -1) return false;
		db.reviews.splice(reviewIndex, 1);
		return true;
	},
	updateReview: (parent, { id, input }, db) => {
		const reviewIndex = db.reviews.findIndex((r) => r.id === id);
		if (reviewIndex === -1) return null;
		db.reviews[reviewIndex] = {
			...db.reviews[reviewIndex],
			...input
		};
		return db.reviews[reviewIndex];
	}
};

module.exports = mutation;
