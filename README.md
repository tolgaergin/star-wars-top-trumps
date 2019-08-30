# Star Wars Top Trumps

## Demo

https://stoic-liskov-0322ea.netlify.com/

### Approach

For the test, it was asked to use SWAPI. The documentation can be seen in here https://swapi.co/documentation

One of the important thing in the test is selecting random people or starships.
SWAPI Api has 3 endpoints for People and Starship.

- /starships/ => which returns only 10 records of 37 in one request
- /starships/:id/ => which returns only 10 records of 87 in one request
- /starships/schema/

To get a random starship or people, I had two options.

1. I need to fetch /starships/ endpoint and get the count value from the response then
   I'll generate number between 1 and total count
   and finally using /starships/:id/ endpoint, I'll get only one starship if i'm lucky.

I'm saying I'm lucky because the API doesn't have all the ids between 1 and 37. For example id = 16 was deleted.
(check https://swapi.co/api/starships/16/)
So I'd get 404 error and then I need to refetch until I get 200 status code.

I think this way may cause waste of extra requests and doesn't look an efficent way.

2. My other way is to use only /starships/ endpoint which will return me 10 records.
   Then I'll get 2 (or more) unique random records from this array.

But this way also look not good for me for the reason that I'm going to explain.

Those endpoints /starships/ also returns "next" and "previous" page urls. If there is a next page after the first 10 records,
next has a url and previous is null. In the second request with ?page=2, previous will have a url. When we come to the last page,
"next" property will be null.

Every time user plays a game whether starships or people battle, I'm making a request to this endpoint /starships/.

- First round the game will pick 2 (or more) random starships in 10 starships. (added new 10 records to my store)
- Second round the game will pick 2 (or more) random starships in 20 starships. (added new 10 records to my store)
- Third round the game will pick 2 (or more) random starships in 30 starships. (added new 10 records to my store)
- Fourth round the game will pick 2 (or more) random starships in 37 starships. And finally the application doesnt need to make another request to the server so because I aggreated all the data from the server to the redux store.

### Playing the game

There are two routes in the application.

1. / => homepage that you can play the game by choosing the how many players will be in the game and choosing type of the battle between people or starship

2. /resutls => after you play a game, you can see the game history in this page. Click the show opponents to see the more details about the game.

### Commands

Install dependencies

```
yarn install
```

To demo on http://localhost:3000/#/

```
yarn start
```

To test

```
yarn test
```
