# Template

![CI](https://github.com/TherenceFrn/Symfony/actions/workflows/ci.yml/badge.svg)

````bash

composer install

php bin/console doctrine:database:create

php bin/console doctrine:migrations:migrate

php bin/console importmap:install

php bin/console asset-map:compile

php bin/console cache:clear
````