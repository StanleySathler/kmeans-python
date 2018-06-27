### Description

This repository is a basic K-means Clustering implementation for a college project. It reads a list of people information and divides them into K clusters, where the means are their ages.

This is not a generic implementation and was built focused only on this type of entry.

### How to run

The usage syntax is:

```sh
$ python3 kmeans.py <entry_file_path> <...means>
```

If you want to use the `people.dat` entry file with means `5`, `10`, `15`, `20`, `25`, `30` and `35`, you can type:

```sh
$ python3 kmeans.py entry/people.dat 5 10 15 20 25 30 35
```
