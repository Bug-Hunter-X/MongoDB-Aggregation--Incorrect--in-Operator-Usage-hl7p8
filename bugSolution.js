```javascript
//Correct use of $or operator in MongoDB aggregation
db.collection('products').aggregate([
  {
    $match: {
      $or: [{
        category: 'Electronics'
      }, {
        category: 'Clothing'
      }]
    }
  },
  {
    $group: {
      _id: '$category',
      totalProducts: { $sum: 1 }
    }
  }
]);
```