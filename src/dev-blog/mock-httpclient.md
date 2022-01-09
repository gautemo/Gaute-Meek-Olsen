---
title: How to test HttpClient with Moq in C#
date: 2020-05-01
coverImgExtension: png
tags: [C#]
---

This is how you can unit test your methods that use [HttpClient](https://docs.microsoft.com/en-us/dotnet/api/system.net.http.httpclient) with [Moq](https://github.com/Moq/moq4/) and xUnit.

We don't want our unit tests to actually perform HTTP requests during testing so we will have to mock those requests. Moq allows us to mock overridable members such as abstract, virtual, or interface methods. But this doesn't exist in HttpClient. We could wrap HttpClient in an Interface, but that would result in extra implementation code and we don't want to alter implementation code to support tests. But if we look at the constructor, it takes in a [HttpMessageHandler](https://docs.microsoft.com/en-us/dotnet/api/system.net.http.httpmessagehandler) that contains an abstract SendAsync method that is used by HttpClient. This is what we want to mock!

Note that in HttpClient all `GetAsync`, `PostAsync`, `PatchAsync`, `PutAsync`, `DeleteAsync`, and `SendAsync` use the SendAsync method in the HttpMessageHandler internally and can be mocked.

## Implementation to test

Here is an example of a Posts class which can fetch posts and create a post.

```cs

using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;
using System.Text.Json;

namespace HttpCode
{
  public class Posts
  {
    private readonly HttpClient httpClient;
    private const string url = "https://jsonplaceholder.typicode.com/posts";

    public Posts(HttpClient httpClient)
    {
      this.httpClient = httpClient;
    }

    public async Task<IEnumerable<JsonElement>> GetPosts()
    {
      var response = await httpClient.GetAsync(url);
      var body = await response.Content.ReadAsStringAsync();
      var posts = JsonSerializer.Deserialize<IEnumerable<JsonElement>>(body);
      return posts;
    }

    public async Task<JsonElement> CreatePost(string title)
    {
      var payload = new
      {
        title
      };
      var httpContent = new StringContent(JsonSerializer.Serialize(payload));
      var response = await httpClient.PostAsync(url, httpContent);
      var body = await response.Content.ReadAsStringAsync();
      var created = JsonSerializer.Deserialize<JsonElement>(body);
      return created;
    }
  }
}
```

## Unit Tests

Now let's mock the SendAsync method to test our two methods. The SendAsync method is protected, so we need to use `.Protected()` and access the method with a string to be able to mock it.

```cs
using HttpCode;
using Moq;
using Moq.Protected;
using System.Net;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Xunit;

namespace HttpCodeTests
{
  public class PostsTest
  {
    [Fact]
    public async void ShouldReturnPosts()
    {
      var handlerMock = new Mock<HttpMessageHandler>();
      var response = new HttpResponseMessage
      {
        StatusCode = HttpStatusCode.OK,
        Content = new StringContent(@"[{ ""id"": 1, ""title"": ""Cool post!""}, { ""id"": 100, ""title"": ""Some title""}]"),
      };

      handlerMock
        .Protected()
        .Setup<Task<HttpResponseMessage>>(
          "SendAsync",
          ItExpr.IsAny<HttpRequestMessage>(),
          ItExpr.IsAny<CancellationToken>())
        .ReturnsAsync(response);
      var httpClient = new HttpClient(handlerMock.Object);
      var posts = new Posts(httpClient);

      var retrievedPosts = await posts.GetPosts();

      Assert.NotNull(retrievedPosts);
      handlerMock.Protected().Verify(
        "SendAsync",
        Times.Exactly(1),
        ItExpr.Is<HttpRequestMessage>(req => req.Method == HttpMethod.Get),
        ItExpr.IsAny<CancellationToken>());
    }

    [Fact]
    public async void ShouldCallCreatePostApi()
    {
      var handlerMock = new Mock<HttpMessageHandler>();
      var response = new HttpResponseMessage
      {
        StatusCode = HttpStatusCode.OK,
        Content = new StringContent(@"{ ""id"": 101 }"),
      };
      handlerMock
        .Protected()
        .Setup<Task<HttpResponseMessage>>(
          "SendAsync",
          ItExpr.IsAny<HttpRequestMessage>(),
          ItExpr.IsAny<CancellationToken>())
        .ReturnsAsync(response);
      var httpClient = new HttpClient(handlerMock.Object);
      var posts = new Posts(httpClient);

      var retrievedPosts = await posts.CreatePost("Best post");

      handlerMock.Protected().Verify(
        "SendAsync",
        Times.Exactly(1),
        ItExpr.Is<HttpRequestMessage>(req => req.Method == HttpMethod.Post),
        ItExpr.IsAny<CancellationToken>());
    }
  }
}
```

## That's All

Hope this can help you as well. Happy coding!👨‍💻👩‍💻
