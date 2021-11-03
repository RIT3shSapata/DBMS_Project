# Instructions to Test User permissions in Postgres

## 1. Run the Users sql file

Run the `apna_ghar_users.sql` file with an extra `-d` flag. This flag is for connecting the database.

```bash
psql -f path_to_sql_file -d apna_ghar
```

replace `path_to_sql_file` with the actual file path to the users sql file.

## 2. Testing Admin permissions

Log in to psql cli usingreplace `path_to_sql_file` with the actual file path to the `queries` sql file. the following command(for linux distributions only):

```bash
psql -U admin -h localhost -d apna_ghar -f path_to_sql_file
```

replace `path_to_sql_file` with the actual file path to the `queries` sql file.
The terminal will prompt for a password, enter `password1`.

## 3. Testing Resident permissions

Log in to psql cli using the following command(for linux distributions only):

```bash
psql -U resident -h localhost -d apna_ghar -f path_to_sql_file
```

replace `path_to_sql_file` with the actual file path to the `queries` sql file.
The terminal will prompt for a password, enter `password2`.

## 4. Testing Security permissions

Log in to psql cli using the following command(for linux distributions only):

```bash
psql -U security -h localhost -d apna_ghar -f path_to_sql_file
```

replace `path_to_sql_file` with the actual file path to the `queries` sql file.
The terminal will prompt for a password, enter `password3`.

## To restart the process of creation of users

### First run the `delete_users` sql file to revoke and drop all the previous instances of the users that have been created.

```bash
psql -f path_to_sql_file -d apna_ghar
```

replace `path_to_sql_file` with the actual file path to the `delete_users` sql file.
