---
sidebar_position: 22
---

# How to Increase Product Load Limit?

You can change the number of items that will be fetched at once when a request is sent to the server:

1. Go to lib > utils > Constant.dart File

2. Find the LOAD_ITEM_LIMIT variable and update its value:

   ![Load Limit](/images/app/limit.png)

This limit is extended for some APIs like:

- categoryCubit.dart
- bookmarkCubit.dart
- LikeAndDislikeCubit.dart
- bookmarkCubit.dart
- Search.dart
