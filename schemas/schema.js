const { gql } = require("apollo-server");

const typeDefs = gql`
	type Query {
		product(id: ID!): Product
		category(id: ID!): Category
		products(filter: ProductsFilter): [Product!]!
		categories: [Category!]!
	}

	type Mutation {
		addCategory(input: AddCategory!): Category!
		addProduct(input: AddProduct!): Product!
		addReview(input: AddReview!): Review!
		deleteCategory(id: ID!): Boolean!
		deleteProduct(id: ID!): Boolean!
		deleteReview(id: ID!): Boolean!
		updateCategory(id: ID!, input: UpdateCategory!): Category
		updateProduct(id: ID!, input: UpdateProduct!): Product
		updateReview(id: ID!, input: UpdateReview!): Review
	}

	type Product {
		id: ID!
		title: String!
		description: String!
		price: Float!
		quantity: Int!
		onSale: Boolean!
		category: Category
		reviews: [Review!]!
	}
	type Category {
		id: ID!
		title: String!
		products(filter: ProductsFilter): [Product!]!
	}
	type Review {
		id: ID!
		title: String!
		comment: String
		rating: Int!
		date: Int!
	}

	input ProductsFilter {
		onSale: Boolean
		avgRating: Int
	}
	input AddCategory {
		title: String!
	}
	input UpdateCategory {
		title: String!
	}
	input AddProduct {
		title: String!
		description: String!
		price: Float!
		quantity: Int!
		onSale: Boolean!
		categoryId: ID!
	}
	input UpdateProduct {
		title: String!
		description: String!
		price: Float!
		quantity: Int!
		onSale: Boolean!
		categoryId: ID!
	}
	input AddReview {
		title: String!
		comment: String
		rating: Int!
		productId: ID!
	}
	input UpdateReview {
		title: String!
		comment: String
		rating: Int!
		productId: ID!
	}
`;

module.exports = typeDefs;
