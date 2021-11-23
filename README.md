# Calculator

Simple calculator build with Laravel and ReactJs

## Installation

```sh
git clone https://github.com/xeruba/calculator.git calculator
cd calculator
```
Go to the root folder and create your .env file using the .env.sample file.
If necessary, edit the DB_* variables:
| VARIABLES |
| ------ |
|DB_CONNECTION=mysql|
|DB_HOST=127.0.0.1|
|DB_PORT=3306|
|DB_DATABASE=calculator|
|DB_USERNAME=sail|
|DB_PASSWORD=pass|

```sh
docker run --rm \
    -u "$(id -u):$(id -g)" \
    -v $(pwd):/var/www/html \
    -w /var/www/html \
    laravelsail/php80-composer:latest \
    composer install --ignore-platform-reqs
./vendor/bin/sail up -d
./vendor/bin/sail php artisan key:generate
./vendor/bin/sail php artisan migrate
./vendor/bin/sail npm run dev
```


## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).