#!/usr/bin/env bash

echo "GENERATING PYTHON"

PACKAGE_NAME=ots_schema
PYTHON_PATH=./python
DEF=proto

rm -rf ${PYTHON_PATH}/*

# check if in virtual environment, create and enter if necessary
if [[ "$VIRTUAL_ENV" == "" ]]; then
    echo "activating venv"
    if ! [[ -e "venv/bin/activate" ]]; then
        echo "creating venv"
        python3 -m venv venv || {
            echo "ERROR: Missing library 'virtualenv'. Install it using 'sudo easy_install virtualenv'."
            exit 1
        }
    fi
    source venv/bin/activate
fi

pip --disable-pip-version-check install -r requirements.txt

# generate Python code from definitions
python -m grpc_tools.protoc -I=${DEF} --python_out=${PYTHON_PATH} --grpc_python_out=${PYTHON_PATH} ./${DEF}/*/*.proto ./${DEF}/*/*/*.proto

# make folders formal packages
shopt -s nullglob  # https://unix.stackexchange.com/a/240004/306693
touch ${PYTHON_PATH}/__init__.py
for dir in ${PYTHON_PATH}/*/; do
    touch ${dir}__init__.py
    for subdir in ${dir}*/; do
        touch ${subdir}__init__.py
    done
done

# fix imports to work as a package
for dir in ${DEF}/*; do
    dir="$(basename ${dir})"
    sed -i -E "s/from ${dir}/from ${PACKAGE_NAME}.${dir}/" ${PYTHON_PATH}/**/*.py
    sed -i -E "s/from ${dir}/from ${PACKAGE_NAME}.${dir}/" ${PYTHON_PATH}/**/*/*.py
done

echo "deactivating venv"
deactivate
echo "PYTHON DONE"
