<?php

/*
 * |--------------------------------------------------------------------------
 * | Model Factories
 * |--------------------------------------------------------------------------
 * |
 * | Here you may define all of your model factories. Model factories give
 * | you a convenient way to create models for testing and seeding your
 * | database. Just tell the factory how a default model should look.
 * |
 */
$factory->define ( App\Modules\System\Models\User::class, function (Faker\Generator $faker) {
	return [ 
			'active' => 1,
			'created' => $faker->dateTime,
			'updated' => $faker->dateTime,
			'createdById' => 1,
			'updatedById' => 1,
			'firstname' => $faker->firstName,
			'lastname' => $faker->lastName,
			'email' => $faker->email 
	];
} );
$factory->define ( App\Modules\System\Models\Role::class, function (Faker\Generator $faker) {
	return [ 
			'active' => 1,
			'created' => $faker->dateTime,
			'updated' => $faker->dateTime,
			'name' => 'Role_' . $faker->randomDigitNotNull 
	];
} );
$factory->define ( App\Modules\System\Models\Credential::class, function (Faker\Generator $faker) {
	$types = App\Modules\System\Models\Credential::getCredentialTypes ();
	return [ 
			'active' => 1,
			'created' => $faker->dateTime,
			'updated' => $faker->dateTime,
			'username' => $faker->userName,
			'password' => $faker->sha1,
			'type' => $types [rand ( 1, count ( $types ) - 1 )] 
	];
} );
$factory->define ( App\Modules\MoneyPool\Models\Group::class, function (Faker\Generator $faker) {
	return [ 
			'active' => 1,
			'created' => $faker->dateTime,
			'updated' => $faker->dateTime,
			'name' => $faker->text(10),
			'description' => $faker->text(255),
	];
} );
$factory->define ( App\Modules\MoneyPool\Models\MoneyPool::class, function (Faker\Generator $faker) {
	return [ 
			'active' => 1,
			'created' => $faker->dateTime,
			'updated' => $faker->dateTime,
			'entityName' => $faker->text(10),
			'entityId' => $faker->numberBetween(1, 50),
			'amount' => $faker->numberBetween(-50, 50),
	];
} );
$factory->define ( App\Modules\MoneyPool\Models\Transaction::class, function (Faker\Generator $faker) {
	return [ 
			'active' => 1,
			'created' => $faker->dateTime,
			'updated' => $faker->dateTime,
			'poolId' => $faker->numberBetween(1, 50),
			'comments' => $faker->text(255),
			'transGroupId' => $faker->md5,
			'amount' => $faker->numberBetween(-50, 50),
	];
} );

$factory->define ( App\Modules\MoneyPool\Models\Group_User::class, function (Faker\Generator $faker) {
	return [ 
			'active' => 1,
			'created' => $faker->dateTime,
			'updated' => $faker->dateTime,
			'groupId' => $faker->numberBetween(1, 50),
			'userId' => $faker->numberBetween(1, 50),
	];
} );

