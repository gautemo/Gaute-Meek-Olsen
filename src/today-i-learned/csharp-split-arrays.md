---
title: List & Arrays to chunks
date: 2019-12-07
category: C#
---

When you work with large lists or arrays, you might want to handle the elements in chunks to work with fewer elements. Let's do that with an extension method.

```csharp
public static class ArrayExtensions
{
  public static IEnumerable<IEnumerable<T>> Split<T>(this IEnumerable<T> list, int size)
  {
    for (var i = 0; i < (float)list.Count() / size; i++)
    {
      yield return list.Skip(i * size).Take(size);
    }
  }
}

class Program
{
  static void Main(string[] args)
  {
    var list = new List<int>{1,2,3,4,5,6,7,8,9,10,11};
    var chunks = list.Split(3);
    foreach(var chunk in chunks){
      Console.WriteLine($"[{string.Join(',', chunk)}]");
    }
  }
}
```
