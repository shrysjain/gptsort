# gptsort

A true O(1) sorting algorithm, `gptsort` is the **best** way to sort any array. All you have to do is call a simple function and let ChatGPT handle the rest in constant time!

*Yes this is a joke*

## Installation

```js
npm install gptsort
```

## Usage

```js
import sort from "gptsort";

const array = [87, 23, 45, 12, 98, 56, 77, 34, 90, 11, 67, 29, 5];
const api_key = "YOUR OPENAI API KEY HERE";

sort(array, api_key).then((sorted) => { // O(1)!
  console.log(sorted); // [5, 11, 12, 23, 29, 34, 45, 56, 67, 77, 87, 90, 98]
});
```

**note:** there is no guarantee that the `sort` function will correctly sort the array. it is up to you if this risk is worth the efficiency that this new sorting algorithm provides.