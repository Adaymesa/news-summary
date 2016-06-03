# News Summary starter project

This is the starter repo for the News Summary project in Further JavaScript week 8.  See the Makers course repo for the [full project description](https://github.com/makersacademy/course/blob/master/further_javascript/news_summary_project.md).

## Setting up

### Clone this repo to your computer

    $ git clone https://github.com/makersacademy/news-summary.git

### Install the Java Development Kit (JDK)

[Install the JDK](http://www.oracle.com/technetwork/java/javase/downloads/index.html)

Check it's installed by typing

    $ java -version

You should see a version number.

### Install the other dependencies

    $ cd path/to/news-summariser/
    $ npm install
    $ npm run install-bower-dependencies
    $ npm run install-selenium-dependencies

## Run and view your app

    $ cd path/to/news-summariser/
    $ npm run start-app

Go to [http://localhost:8080](http://localhost:8080) in your web browser.  You should see "Hello, world".

## Run your feature tests

In a terminal, run your app

    $ cd path/to/news-summariser/
    $ npm run start-app

In a second terminal, run Selenium

    $ cd path/to/news-summariser/
    $ npm run start-selenium

In a third terminal, run your feature tests

    $ cd path/to/news-summariser/
    $ npm run test-features

## Run your unit tests

    $ cd path/to/news-summariser/
    $ npm run test-units
