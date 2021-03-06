# Calculator

Simple calculator build with Laravel and ReactJs

## Prerequisites

Ensure that [Docker is installed](https://docs.docker.com/get-started/) and up to date on your system. Once installed, configure with your required preferences and ensure it is running.

## Installation

```sh
git clone https://github.com/xeruba/calculator.git calculator
cd calculator
mv .env.example .env
docker run --rm \
    -u "$(id -u):$(id -g)" \
    -v $(pwd):/var/www/html \
    -w /var/www/html \
    laravelsail/php80-composer:latest \
    composer install --ignore-platform-reqs
./vendor/bin/sail up -d
./vendor/bin/sail php artisan key:generate
./vendor/bin/sail php artisan migrate
./vendor/bin/sail npm install
./vendor/bin/sail npm run dev
```

Open your browser and go to http://localhost

## Interface
![Interface](https://drive.google.com/uc?id=1brNr5SDOcP74zydxSYtnb0ckRYqX1fqG)

## Database
Just an example of how the data are stored on the database.
![database](https://drive.google.com/uc?id=1587kCO8Y_y-kQq7p3eX3MzbTdMlddosn)

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).