export default ({ env }) => ({
	connection: {
		client: 'postgres',
		connection: {
		host: env('DATABASE_HOST', 'db'),
			port: env.int('DATABASE_PORT', 5432),
			database: env('DATABASE_NAME', 'blog'),
			user: env('DATABASE_USERNAME', 'admin'),
			password: env('DATABASE_PASSWORD', 'admin'),
			ssl: env.bool('DATABASE_SSL', false)
		}
	}
});
