---
title: Intro to the easiest DB ever, Firestore
date: 2018-11-17
tags: [Firebase]
serie: Firestore
---

Let me introduce you to the easiest database in the world. It’s called Firestore and it lives in the cloud. It’s really easy to get started as all coding is done on the front end, but it also scales really well as it is a product by Firebase from Google.

## Set up

Feel free to follow along with the coding as I will show you how it works. If you get stuck on where to put the code, the full source code is provided at the bottom.

First, go to the [Firebase console](https://console.firebase.google.com/) and spend the 3 clicks to create a project. Then inside the project, click Database in the navigation menu and Create database button (test mode is good for now). We will deal with securing our database later. Actually, that is all the setup needed, you now have a working NoSQL database.

I will walk you through how to read, write, update and delete to your database from the web. But you can see their [documentation](https://firebase.google.com/docs/firestore/quickstart) for IOS, Android, Java, Python, Node.js, Go, PHP, C#, and Ruby. (That’s their support as I’m writing this, I won’t be shocked if they add more language and platform support later)

Create an HTML file to get started.

```html
<!doctype html>
<html lang="en">
  <head>  
    <meta charset="utf-8">  
    <meta name="viewport" content="width=device-width, initial-scale=1.0">   
    <title>Title</title>  
  </head>
  <body> 
    <script>
      /*Your JavaScript code goes here*/
    </script>
  </body>
</html>
```

Then we need to add Firebase to our web application. The simplest way is to go to the project overview in the Firebase console, click the web symbol above the text “*Add an app to get started*”, then just copy the code and paste it into your HTML file.

We are now ready to create a reference to our database.

```js
const db = firebase.firestore();
```

Firestore saves our data in collections which contains documents. Collections can also have sub-collections. Let’s say we have the collections families and cities. Let's create references for our collections.

```js
const families = db.collection('families');
const cities = db.collection('cities');
```

## Adding data

We are going to use the add method to add families and set method to add cities.

```js
const addFamily = surname => {
  families.add({surname});
}
const addCity = (city, population) => {
  const pop = parseInt(population);
  cities.doc(city).set({pop})
  .then(() => console.log('Document successfully written!'))
  .catch(() => console.error('Error writing document: ', error));
}
```

The differences are that `set` uses the city as the ID, while `add` autogenerates an ID. Also if you use the set method and a document with the same ID already exists, it will be overwritten unless you add the { merge: true } option. Notice that `then` and `catch` are not required.

Now we need some HTML.
```html
<label for="family-name">Surname:</label>
<input type="text" id="family-name">
<button id="family-button">Add</button>
<br/>
<label for="city">City:</label>
<input type="text" id="city">
<label for="population">Population:</label>
<input type="text" id="population">
<button id="city-button">Add</button>
```

And some event listeners for our buttons.

```js
document.querySelector('#family-button').addEventListener('click', () => {
  const name = document.querySelector('#family-name').value;
  addFamily(name);
});
document.querySelector('#city-button').addEventListener('click', () => {
  const city = document.querySelector('#city').value;
  const population = document.querySelector('#population').value;
  addCity(city, population);
});
```

That is all you need to save data to your database, no need to create tables or schemas beforehand. If the collection doesn’t exist they will be created. You can see and administrate your data through the Firebase console (big bonus).

## Getting data

### Get a single object

This is how we retrieve the population of a single city from Firestore. `data()` returns our object.

```js
const populationCity = async city => {
  const doc = await cities.doc(city).get();
  if (doc.exists) {
    return doc.data().pop;
  } else {
    return 'city not found';
  }
}
```

Let’s add HTML.

```html
<label for="search-city">Population for city:</label>
<input type="text" id="search-city">
<button id="population-button">Add</button>
<span id="result-population"></span>
```

And JavaScript to use our populationCity method.

```js
document.querySelector('#population-button').addEventListener('click', async () => {
  const city = document.querySelector('#search-city').value;
  const population = await populationCity(city);
  document.querySelector('#result-population').textContent = population;
});
```

### Getting multiple objects

If we want more objects from a collection we can use the get method on our cities reference. But we also have the option to filter, order, and limit our query. Let’s get the 3 biggest cities with over 1 million in population.

```js
const getCities = async () => {
  const querySnapshot = await cities.where('pop', '>=', 1000000).orderBy('pop', 'desc').limit(3).get();
  let list = [];
  querySnapshot.forEach(doc => list.push({name: doc.id, pop: doc.data().pop}));
  return list;
}
```

Time for some HTML

```html
<label>3 big cities:</label><button id="get-big">Get cities</button>
<div id="big-result"></div>
```

and JavaScript to use our function.

```js
document.querySelector('#get-big').addEventListener('click', async () => {
  const res = await getCities();
  const bigDiv = document.querySelector('#big-result');
  res.forEach(c => {
    const p = document.createElement('p');
    p.textContent = `${c.name}, ${c.pop}`;
    bigDiv.appendChild(p);
  });
});
```

### Getting real-time updates

To get real-time updates to either a single document or a collection we will use the `onSnapshot` method. Let’s get all the cities.

```js
cities.onSnapshot(snapshot => {
  snapshot.docChanges().forEach(change => {
    switch(change.type){
      case 'added':
        cityAdded({name: change.doc.id, pop: change.doc.data().pop});
        break;
      case 'modified':
        cityUpdated({name: change.doc.id, pop: change.doc.data().pop});
        break;
      case 'removed':
        cityRemoved(change.doc.id);
        break;
    }
  })
})
```

We use the `docChanges` method to know what change happened. If a document was added, modified or removed. Now let’s show the cities.

```html
<label>All cities</label>
<div id="all-cities"></div>
```

JavaScript with the three methods to populate our div.

```js
const citiesDiv = document.querySelector('#all-cities');
const cityAdded = city => {
  const p = document.createElement('p');
  p.textContent = `${city.name}, ${city.pop}`;
  p.id = city.name;
  citiesDiv.appendChild(p);
}
const cityUpdated = city => {
  document.querySelector('#' + city.name).textContent = `${city.name}, ${city.pop}`;
}
const cityRemoved = name => {
  document.querySelector('#' + name).remove();
}
```

You can use the `addCity` method for an already existing city to trigger an update. We haven’t covered deletion yet, but you can do it from the developer console if you want to test it.

## Updating data

Updating data is simple, just get the document you would like to change. Then call the `update` method with only the data you would like to change.

```js
const updatePopulation = (city, pop) => {
  cities.doc(city).update({
    pop: pop
  })
}
```

We would like the option to add 100 to a city population.

```js
const b = document.createElement('button');
b.textContent = '+100';
b.onclick = () => updatePopulation(city.name, city.pop + 100);
p.appendChild(b);
```

This should be added inside the `cityAdded` function we created earlier.

### Transactions

What if the city administrators had opened the application and clicked the increase button the exact same time? In that case, we need to use a transaction to avoid a race condition.

```js
const populationTransaction = (city, inc) => {
  const cityRef = cities.doc(city);
  db.runTransaction(transaction => {
    return transaction.get(cityRef).then(sfdoc => {
      const newPop = sfdoc.data().pop + inc;
      transaction.update(cityRef, {pop: newPop});
    })
  })
}
```

Then update our cityAdded function.

```js
//b.onclick = () => updatePopulation(city.name, city.pop + 100);
b.onclick = () => populationTransaction(city.name, 100);
```

If you spam click the button before it disappears you will see that the transaction is working.

Remember that in a transaction you need to do the read (`data()`) before the write (`update`). Also if your transaction contains multiple writes and one fails, all writes will be rolled back.

## Deleting data

Deleting data is simple.

```js
const deleteCity = city => {
  cities.doc(city).delete();
}
```

Adding a button inside our cityAdded function to call `deleteCity`.

```js
const d = document.createElement('button');
d.textContent = 'delete';
d.onclick = () => deleteCity(city.name);
p.appendChild(d);
```

## Sub-collections

If you need nested data, you could just have a list of objects inside your document. But then you need to retrieve the whole list every time you query your document. A better way which provides more flexibility is to use sub-collections.

Let's add a demo functions, so you get the idea.

```js
const addDemoFamily = async () => {
  /*demo family object*/ 
  const demoFamily = {
    surname: 'Smith',
    members: [
      {
        name: 'Joe',
        role: 'Child',
        favouriteFood: ['Pizza', 'Fish', 'Pancakes']
      },
      {
        name: 'Lucy',
        role: 'Mother',
        favouriteFood: ['Soup', 'Pizza']
      },
      {
        name: 'Amy',
        role: 'Child',
        favouriteFood: ['Icecream']
      }
    ]
  };
  /*Adding a family document*/
  docRef = await families.add({surname: demoFamily.surname});
  /*Getting our sub-collection*/
  const memberRef = docRef.collection('members');
  /*Adding documents to our sub-collection through a batch*/
  const batch = db.batch();
  for(let i=0; i<demoFamily.members.length; i++){
    batch.set(memberRef.doc('' + i), demoFamily.members[i]);
  }
  await batch.commit();
  /*Reading our saved data with a query*/
  const querySnapshot = await memberRef.where('role', '==', 'Child').get();
  let list = [];
  querySnapshot.forEach(doc => list.push(doc.data().name));
  alert('Only children: ' + list);
}
```

We have used a batched write to add all family members, to do the writing in one commit call. Then we need a button to trigger the function.

```html
<button onclick="addDemoFamily()">Add demo family</button>
```

Visit your Firebase console to see how your data is added and structured.

## Conclusion

I have now covered most of the Firestore functionality. I hope you see how easy it is. No need to set up a server which needs to connect to a database and provide an API. And we get a lot of functionality such as offline support, real-time updates, and an administration user interface.

But what about security? If all this happens from the client, then our data cannot be safe. Security should always be done in the backend. This is where Firestore rules and Firebase authentication plays its part. Follow my next article to see how you can secure your database and customize who and which actions are allowed.

### All code

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>Title</title>
  <meta name="author" content="Gaute Meek Olsen">
</head>

<body>
  <label for="family-name">Surname:</label>
  <input type="text" id="family-name">
  <button id="family-button">Add</button>
  <br>
  <label for="city">City:</label>
  <input type="text" id="city">
  <label for="population">Population:</label>
  <input type="text" id="population">
  <button id="city-button">Add</button>
  <br>
  <label for="search-city">Population for city:</label>
  <input type="text" id="search-city">
  <button id="population-button">Add</button>
  <span id="result-population"></span>
  <br>
  <label>3 big cities:</label><button id="get-big">Get cities</button>
  <div id="big-result"></div>
  <br>
  <label>All cities</label>
  <div id="all-cities"></div>
  <br>
  <button onclick="addDemoFamily()">Add demo family</button>
  
  <script src="https://www.gstatic.com/firebasejs/5.5.8/firebase.js"></script>
  <script>
  // Initialize Firebase
  var config = {
    apiKey: "[get this from your Firebase console]",
    authDomain: "[get this from your Firebase console]",
    databaseURL: "[get this from your Firebase console]",
    projectId: "[get this from your Firebase console]",
    storageBucket: "[get this from your Firebase console]",
    messagingSenderId: "[get this from your Firebase console]"
  };
  firebase.initializeApp(config);
  </script>
  <script>
    const db = firebase.firestore();

    const families = db.collection('families');
    const cities = db.collection('cities');

    document.querySelector('#family-button').addEventListener('click', () => {
      const name = document.querySelector('#family-name').value;
      addFamily(name);
    });
    document.querySelector('#city-button').addEventListener('click', () => {
      const city = document.querySelector('#city').value;
      const population = document.querySelector('#population').value;
      addCity(city, population);
    });

    document.querySelector('#population-button').addEventListener('click', async () => {
      const city = document.querySelector('#search-city').value;
      const population = await populationCity(city);
      document.querySelector('#result-population').textContent = population;
    });
    document.querySelector('#get-big').addEventListener('click', async () => {
      const res = await getCities();
      const bigDiv = document.querySelector('#big-result');
      res.forEach(c => {
        const p = document.createElement('p');
        p.textContent = `${c.name}, ${c.pop}`;
        bigDiv.appendChild(p);
      });
    });

    const addFamily = surname => {
      families.add({surname});
    }

    const addCity = (city, population) => {
      const pop = parseInt(population);
      cities.doc(city).set({pop})
      .then(() => console.log('Document successfully written!'))
      .catch(() => console.error('Error writing document: ', error));
    }

    const populationCity = async city => {
      const doc = await cities.doc(city).get();
      if (doc.exists) {
        return doc.data().pop;
      } else {
        return 'city not found';
      }
    }

    const getCities = async () => {
      const querySnapshot = await cities.where('pop', '>=', 1000000).orderBy('pop', 'desc').limit(3).get();
      let list = [];
      querySnapshot.forEach(doc => list.push({name: doc.id, pop: doc.data().pop}));
      return list;
    }

    cities.onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        switch(change.type){
          case 'added':
            cityAdded({name: change.doc.id, pop: change.doc.data().pop});
            break;
          case 'modified':
            cityUpdated({name: change.doc.id, pop: change.doc.data().pop});
            break;
          case 'removed':
            cityRemoved(change.doc.id);
            break;
        }
      })
    })

    const citiesDiv = document.querySelector('#all-cities');
    const cityAdded = city => {
      const p = document.createElement('p');
      p.textContent = `${city.name}, ${city.pop}`;
      p.id = city.name;
      const b = document.createElement('button');
      b.textContent = '+100';
      //b.onclick = () => updatePopulation(city.name, city.pop + 100);
      b.onclick = () => populationTransaction(city.name, 100);
      p.appendChild(b);
      const d = document.createElement('button');
      d.textContent = 'delete';
      d.onclick = () => deleteCity(city.name);
      p.appendChild(d);
      citiesDiv.appendChild(p);
    }

    const cityUpdated = city => {
      document.querySelector('#' + city.name).textContent = `${city.name}, ${city.pop}`;
    }

    const cityRemoved = name => {
      document.querySelector('#' + name).remove();
    }

    const updatePopulation = (city, pop) => {
      cities.doc(city).update({
        pop: pop
      })
    }

    const populationTransaction = (city, inc) => {
      const cityRef = cities.doc(city);
      db.runTransaction(transaction => {
        return transaction.get(cityRef).then(sfdoc => {
          const newPop = sfdoc.data().pop + inc;
          transaction.update(cityRef, {pop: newPop});
        })
      })
    }

    const deleteCity = city => {
      cities.doc(city).delete();
    }

    const addDemoFamily = async () => {
      /*demo family object*/
      const demoFamily = {
        surname: 'Smith',
        members: [
          {
            name: 'Joe',
            role: 'Child',
            favouriteFood: ['Pizza', 'Fish', 'Pancakes']
          },
          {
            name: 'Lucy',
            role: 'Mother',
            favouriteFood: ['Soup', 'Pizza']
          },
          {
            name: 'Amy',
            role: 'Child',
            favouriteFood: ['Icecream']
          }
        ]
      }
      /*Adding a family document*/
      docRef = await families.add({surname: demoFamily.surname});
      /*Getting our sub-collection*/
      const memberRef = docRef.collection('members');
      
      /*Adding documents to our sub-collection through a batch*/
      const batch = db.batch();
      for(let i=0; i<demoFamily.members.length; i++){
        batch.set(memberRef.doc('' + i), demoFamily.members[i]);
      }
      await batch.commit();

      /*Reading our saved data with a query*/
      const querySnapshot = await memberRef.where('role', '==', 'Child').get();
      let list = [];
      querySnapshot.forEach(doc => list.push(doc.data().name));
      alert('Only children: ' + list);
    }
  </script>
</body>
</html>
```