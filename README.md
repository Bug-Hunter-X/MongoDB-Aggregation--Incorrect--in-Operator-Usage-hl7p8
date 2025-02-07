# MongoDB Aggregation: Incorrect $in Operator Usage

This repository demonstrates a common error when using the `$in` operator within MongoDB aggregation pipelines. The example showcases how an incorrect usage of `$in` can lead to unexpected results.

## Problem

The provided code attempts to group products by category using the `$group` operator. It uses the `$in` operator within a `$match` stage to filter for documents with a category in the specified array. If the field in your documents is not an array then you are going to get an empty result. 

## Solution

The solution is to ensure the category field is an array. If you don't want to modify the structure of your documents you should consider using $or operator instead of $in.