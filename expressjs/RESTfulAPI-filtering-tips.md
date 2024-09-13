# RESTful API Filtering Tips

When designing a RESTful API, implementing filtering is crucial to allow clients to request only the data they need. Here are some practical tips to design effective and scalable filtering in RESTful APIs:

## 1. Use Query Parameters for Filtering
- The most common approach is to use query parameters to filter results. For example, to filter users by role and status, you could do something like this:
  
  `GET /users?role=admin&status=active`

- Each key-value pair in the query string corresponds to a field and the value to filter by.

## 2. Support Multiple Filtering Criteria
- Allow users to filter by multiple fields simultaneously. Use logical operators like `AND` by default, but allow flexibility with conditions if needed:

  `GET /products?category=electronics&price_lt=1000&brand=sony`

- Common suffixes for comparison filters:
  - `lt` for less than (`price_lt=1000`)
  - `gt` for greater than (`price_gt=100`)
  - `lte` for less than or equal (`price_lte=500`)
  - `gte` for greater than or equal (`price_gte=200`)
  - `ne` for not equal (`status_ne=inactive`)

## 3. Allow Range Filtering
- Support range filters for attributes like price, dates, or quantities:

  `GET /products?price_gte=100&price_lte=500`
  
  `GET /events?start_date_gte=2023-01-01&start_date_lte=2023-12-31`

## 4. Enable Searchable Fields
- For fields that may need partial matching, like searching through names or descriptions, allow `LIKE` or similar functionality:

  `GET /books?title_like=JavaScript`

- Be cautious about performance with large datasets—index searchable fields when possible.

## 5. Use Logical Operators (AND, OR)
- Support logical operators like `AND` and `OR` when filtering. While `AND` is often implicit when using multiple query parameters, `OR` conditions may require specific syntax:

  `GET /products?category=electronics|category=appliances`

- Alternatively, allow a separate syntax for OR filters:

  `GET /products?category=electronics,appliances`

## 6. Support Nested Resource Filtering
- For resources with relationships (e.g., filtering orders by user information), allow filtering based on nested fields:

  `GET /orders?customer.name=John&status=shipped`

## 7. Handle Null and Empty Values
- Allow filtering for `null` values in your API:

  `GET /users?last_login=null`

- Also, handle filters for fields that are empty strings or have default values.

## 8. Paginate the Results
- Ensure that large result sets are paginated even when filtering is applied. You can provide pagination parameters like `limit` and `offset`:

  `GET /users?role=admin&limit=10&offset=20`

## 9. Provide Sorting Options
- Allow clients to sort results along with filters:

  `GET /products?category=electronics&sort=price&order=asc`

## 10. Error Handling for Invalid Filters
- If a client provides invalid query parameters or filtering criteria, return a helpful error message. Ensure the API responds with a `400 Bad Request` and details on why the filter is invalid:

`{ "error": "Invalid filter parameter 'price_lt' for resource 'users'." }`


## 11. Ensure Performance and Indexing
- For large datasets, ensure you have proper indexes on fields that are frequently used for filtering to avoid performance bottlenecks. Complex filters on non-indexed fields can lead to slow queries and poor API performance.
- Use MongoDB’s query optimizer, for example, by indexing fields like `price`, `category`, and `status`.

## 12. Document the Filtering Capabilities
- Clearly document the available filters, operators, and fields that support filtering in your API documentation. Provide examples of how to use them effectively.

### Example:

`GET /users?age_gte=30&age_lte=40&status=active&sort=created_at&order=desc&limit=50&page=1`

- Filter users aged between 30 and 40
- Status is "active"
- Results sorted by creation date in descending order
- Paginate with a limit of 50 users per page and show page 1
