#!/bin/bash

echo "Gracias por descargar nuestro codigo"
echo "Este es un script para ayudarte con la instalacion y facilitarla"


echo -n "Ingrese el nombre de su usuario de la Base de Datos: "
read DB_USER

echo -n "Ingrese la password de su Base de Datos: "
read DB_PASSWORD

echo -ne "Ingrese el numero que corresponda a su tipo de base de datos: \n[1] MySQL\n[2] Mariadb\n[3] Tedious (Microsoft SQL)\n[9] Salir\nEleccion: "
read DB_DIALECT

if [ $DB_DIALECT -eq 1 ]; then
    DB_DIALECT=mysql2
elif [ $DB_DIALECT -eq 2 ]; then
    DB_DIALECT=mariadb
elif [ $DB_DIALECT -eq 3 ]; then
    DB_DIALECT=tedious
elif [ $DB_DIALECT -eq 9 ]; then
    exit 0
else
    echo "Ingrese un numero valido"
fi

echo -ne "Usuario: $DB_USER\nPassword: $DB_PASSWORD\nDialecto de la db:  $DB_DIALECT\n"