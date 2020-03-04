

exports.up = async function(knex) {
	await knex.schema.alterTable("cars", (table) => {
		table.text("color").defaultTo('undefined')
	})
}

exports.down = async function(knex) {
	await knex.schema.alterTable("cars", (table) => {
		table.dropColumn("color")
	})
}