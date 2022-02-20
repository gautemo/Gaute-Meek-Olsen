---
title: Email Validation
date: 2019-12-07
category: C#
---

When I google a regex to validate an email adress I get this:

```regex
/^(([^<>()[]\.,;:s@"]+(.[^<>()[]\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/
```

This is to long to be readable and understandable by normal humans, so in C# let's keep it simple with the MailAdress class.

```csharp
public bool IsEmailAddress(string address)
{
  try
  {
    var address = new MailAddress(address);
    return true;
  }
  catch (FormatException ex)
  {
    return false;
  }
}
```